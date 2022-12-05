import { TextField as MUITextField } from "@mui/material";
import { Controller } from "react-hook-form";

type TextFieldProps = {
  control: any;
  onChange: any;
  value: any;
};

export const TextField = ({ control, onChange, value }: TextFieldProps) => {
  return (
    <Controller
      control={control}
      name="test"
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <MUITextField label="Last name" variant="outlined" margin="dense" fullWidth value={value} onChange={onChange} />
      )}
    />
  );
};
