import { InputHTMLAttributes } from "react";
import { useController, useFormContext } from "react-hook-form";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  /**
   * Name of input to ref
   */
  name: string;
}

export function TextField({ label, name, ...rest }: TextFieldProps) {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <label
        htmlFor="number"
        className="block text-sm font-medium text-left mb-1"
      >
        {label}
      </label>
      <input
        // type="text"
        // {...register("number", { required: true })}
        className="w-full bg-transparent border-b border-white focus:outline-none focus:border-white text-white"
        {...rest}
        {...field}
      />
      {!!error && <span>{error.message}</span>}
    </div>
  );
}
