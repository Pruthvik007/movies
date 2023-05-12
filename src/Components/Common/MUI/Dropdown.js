import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdown({
  options,
  value,
  onChange,
  label,
  fieldName,
}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{value.label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label={value.label}
        name={fieldName}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options &&
          options.length > 0 &&
          options.map((option) => {
            return (
              <MenuItem key={option.value} value={option}>
                {option.label}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
}
