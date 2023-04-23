import { Typography } from '@mui/material';

import { MemFullDto } from '../../generated/graphql';

export default function TagsBar(props: { mem: Pick<MemFullDto, 'tags'> }) {
  const tags = props.mem.tags.map(e => (e.startsWith('#') ? `${e} ` : `#${e} `));

  return <Typography sx={{ maxWidth: '30vw' }}>{tags}</Typography>;
}
