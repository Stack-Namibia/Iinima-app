import withAuth from "../auth";
import ApplicationWrapper from "../general/ApplicationWrapper";

const EditItems = () => {
  return (
    <ApplicationWrapper>
      <h1>Edit Items</h1>;
    </ApplicationWrapper>
  );
};

export default withAuth(EditItems);
