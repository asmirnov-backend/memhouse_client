import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Button, TextField, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';

import { encode } from 'base64-arraybuffer';
import { useSnackbar } from 'notistack';

import BlockPageWhileLoading from '../../components/BlockPageWhileLoading';
import { FullCenteredFlexBox } from '../../components/styled';
import { CreateMemMutationVariables, useCreateMemMutation } from '../../generated/graphql';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row' as any,
  flexWrap: 'wrap',
  marginTop: 16,
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box' as any,
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

type FormInput = Omit<CreateMemMutationVariables, 'imgsBuffers'> & { images: FileList };

const imgsBuffers: string[] = [];

function CreateMem() {
  const [files, setFiles] = useState<any[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = () => {
          // Do whatever you want with the file contents
          const binaryStr = reader.result;
          imgsBuffers.push(encode(binaryStr as ArrayBuffer));
          console.log(imgsBuffers);
        };
        reader.readAsArrayBuffer(file);
      });

      setFiles(
        acceptedFiles.map((file) =>
          Object.assign({}, file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = useForm<FormInput>();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  const [createMemMutation, { loading }] = useCreateMemMutation({ errorPolicy: 'all' });

  const onSubmit = async (params: FormInput) => {
    console.log(imgsBuffers);

    const creationResult = await createMemMutation({
      variables: { text: params.text || undefined, tags: params.tags || undefined, imgsBuffers },
    });
    imgsBuffers.length = 0;

    if ('errors' in creationResult) {
      enqueueSnackbar(t('error') + creationResult.errors?.join('. '), { variant: 'error' });
    }

    enqueueSnackbar(t('success'), { variant: 'success' });
    reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <BlockPageWhileLoading isLoading={loading} />
      <FullCenteredFlexBox>
        <Typography component="h1" variant="h5">
          {t('create mem')}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
          <Controller
            name="images"
            control={control}
            render={({ field }) => (
              <Container>
                <Box
                  component={'div'}
                  sx={{
                    textAlign: 'center',
                    border: '3px blue dashed',
                    width: '100%',
                    margin: 'auto',
                  }}
                  {...getRootProps({ className: 'dropzone' })}
                >
                  <input {...getInputProps()} />
                  <Typography>Drag n drop some files here, or click to select files</Typography>
                </Box>
                <aside style={thumbsContainer}>{thumbs}</aside>
              </Container>
            )}
          />

          <TextField
            margin="normal"
            fullWidth
            label={t('mem text')}
            type="text"
            multiline
            {...register('text')}
            error={formErrors.text ? true : false}
            helperText={formErrors.text?.message}
          />

          <TextField
            margin="normal"
            fullWidth
            label={t('mem tags')}
            type="text"
            {...register('tags')}
            error={formErrors.tags ? true : false}
            helperText={formErrors.tags?.message}
          />

          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            {t('create')}
          </Button>
        </Box>
      </FullCenteredFlexBox>
    </Container>
  );
}

export default CreateMem;
