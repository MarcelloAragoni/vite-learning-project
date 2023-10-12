import { ButtonProps } from "./types";

export function Button({ color, children, disabled, ...props }: ButtonProps) {
  return (
    <button color={color} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
