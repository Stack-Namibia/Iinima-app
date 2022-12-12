import React from "react";
import { auth } from "../../plugins/firebase";
import SignIn from "../pages/sign-in";
const withAuth = (WrappedComponent: any) => {
  return class extends React.Component<{}, { user: any }> {
    constructor(props: any) {
      super(props);

      // Set the initial state
      this.state = {
        user: null,
      };
    }

    componentDidMount() {
      auth.onAuthStateChanged((user: any) => {
        if (user) {
          this.setState({ user });
        }
      });
    }

    render() {
      console.log(this.state.user);
      // Provide the wrapped component with the authenticated user's data
      if (this.state.user) {
        return <WrappedComponent {...this.props} user={this.state.user} />;
      } else {
        return <SignIn />;
      }
    }
  };
};

export default withAuth;
