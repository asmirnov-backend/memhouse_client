import { styled } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';

const ColoredButton = styled(Button)<ButtonProps & { customColor?: string }>(({ customColor }) => ({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: customColor,
  borderColor: customColor,

  '&:hover': {
    backgroundColor: customColor,
    borderColor: customColor,
    opacity: 0.6,
  },

  '&:active': {
    boxShadow: 'none',
    backgroundColor: customColor,
    borderColor: customColor,
  },
  '&:focus': {
    boxShadow: `0 0 0 0.2rem ${customColor}`,
  },
}));

export default ColoredButton;
