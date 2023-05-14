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
    <FormControl
      sx={{ m: 1, minWidth: 120, height: 40, maxWidth: "100%" }}
      size="small"
    >
      {
        <InputLabel
          shrink={value.label.length > 0}
          id="demo-select-small-label"
        >
          {label}
        </InputLabel>
      }{" "}
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label={label}
        name={fieldName}
        onChange={handleChange}
        sx={{ width: "100%" }}
        MenuProps={{
          sx: {
            width: "100%",
            maxWidth: "100%",
            maxHeight: "50%",
            top: "45px",
            left: 0,
          },
        }}
      >
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
