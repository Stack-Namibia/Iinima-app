import * as React from "react";
import {
  Select,
  SelectChangeEvent,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface SelectProps {
  items: { value: string; label: string }[];
  onChange?: Dispatch<SetStateAction<string>>;
  value?: string;
  text: string;
  required?: boolean;
}
export function BasicSelect({
  items,
  onChange,
  value,
  text,
  required,
}: SelectProps) {
  return (
    <Box sx={{ minWidth: 120, marginTop: 1 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{text}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          label={text}
          onChange={
            onChange && ((e: SelectChangeEvent) => onChange(e.target.value))
          }
          required={required}
        >
          {items.map(({ value, label }, key) => (
            <MenuItem value={value} key={key}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
