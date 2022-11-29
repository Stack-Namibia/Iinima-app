import * as React from "react";

interface InfoProps {
  text: string;
}
export const InfoText = ({ text }: InfoProps) => (
  <p className='mt-2 font-semibold text-[#7E7A7A] text-sm'>{text}</p>
);
