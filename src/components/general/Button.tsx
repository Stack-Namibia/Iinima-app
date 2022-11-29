interface Props {
  text: string;
  width?: string;
}
export const Button = ({ text, width }: Props) => (
  <button
    className={`btn w-full bg-primary border border-transparent mt-2 text-white rounded-[20px] ${
      width && `max-w-[${width}]`
    }`}
  >
    {text}
  </button>
);
