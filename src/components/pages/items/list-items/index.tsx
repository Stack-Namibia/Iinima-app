import withAuth from "../../../auth";
import ApplicationWrapper from "../../../general/ApplicationWrapper";
import Form from "./Form";

const ListItem = () => {
  return (
    <ApplicationWrapper>
      <div className='grid justify-items-center'>
        <Heading text='New Listing' />
        <Form />
      </div>
    </ApplicationWrapper>
  );
};

interface Props {
  text: string;
}

const Heading = ({ text }: Props) => (
  <h1 className='font-bold text-3xl mt-5'>{text}</h1>
);

export default withAuth(ListItem);
