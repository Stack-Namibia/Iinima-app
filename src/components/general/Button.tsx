interface Props {
  text: string;
  width?: string;
  color?: string;
}
export const Button = ({ text, width, color }: Props) => (
  <button
    className={`btn w-full ${
      color ? `bg-${color}` : "bg-primary"
    } border border-transparent mt-2 text-white rounded-[20px] ${
      width && `max-w-[${width}]`
    }`}
  >
    {text}
  </button>
);
