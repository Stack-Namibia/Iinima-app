interface VerticalDividerProps {
  text: string;
}

const VerticalDivider = ({ text }: VerticalDividerProps) => {
  return <div className='divider lg:divider-horizontal'>{text}</div>;
};

export default VerticalDivider;
