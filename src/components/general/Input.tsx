import { TextField } from "@mui/material";

interface Props {
  id: string;
  label: string;
  type: string;
}

export const Input = ({ id, label, type }: Props) => (
  <TextField
    id={id}
    label={label}
    variant='outlined'
    fullWidth
    margin='dense'
    className='rounded-lg'
    type={type}
  />
);
