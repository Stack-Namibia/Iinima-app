interface Props {
  text: string;
  width?: string;
  color?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
}
export const Button = ({
  text,
  width,
  color,
  type,
  disabled,
  loading,
  onClick,
}: Props) => (
  <button
    className={`btn w-full ${
      color ? `bg-${color}` : "bg-primary"
    } border border-transparent mt-2 text-white rounded-[20px] ${
      width && `max-w-[${width}]`
    } ${loading && "loading"}`}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </button>
);
