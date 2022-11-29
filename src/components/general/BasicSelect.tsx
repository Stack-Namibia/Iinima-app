import * as React from "react";
import {
  Select,
  SelectChangeEvent,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";

interface SelectProps {
  items: { value: string; label: string }[];
  onChange?: (event: SelectChangeEvent) => void;
  text: string;
}
export function BasicSelect({ items, onChange, text }: SelectProps) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, marginTop: 1 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{text}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          label={text}
          onChange={handleChange}
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
