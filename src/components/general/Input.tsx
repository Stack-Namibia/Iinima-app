import { TextField, InputAdornment } from "@mui/material";

interface Props {
  id: string;
  label: string;
  type: string;
  multiline?: boolean;
  adornment?: string;
}

export const Input = ({ id, label, type, multiline, adornment }: Props) => (
  <TextField
    id={id}
    label={label}
    variant='outlined'
    fullWidth
    margin='dense'
    className='rounded-lg'
    type={type}
    multiline={multiline}
    rows={multiline ? 5 : 1}
    InputProps={
      adornment
        ? {
            startAdornment: (
              <InputAdornment position='start'>N$</InputAdornment>
            ),
          }
        : {}
    }
  />
);
