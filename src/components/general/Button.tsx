interface Props {
  text: string;
}
export const Button = ({ text }: Props) => (
  <button className='btn w-full bg-primary border border-transparent mt-2 text-white rounded-[20px]'>
    {text}
  </button>
);
