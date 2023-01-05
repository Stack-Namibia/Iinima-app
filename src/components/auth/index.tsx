import React from "react";
import { connect } from "react-redux";
import { auth } from "../../plugins/firebase";
import {
  logout,
  setAuthUser,
} from "../../store/action-creators/auth-action-creators";
import SignIn from "../pages/sign-in";
const withAuth = (WrappedComponent: any) => {
  class WithAuth extends React.Component<{ dispatch: any }, { user: any }> {
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
          this.props.dispatch(setAuthUser(user));
        } else {
          this.setState({ user: null });
          this.props.dispatch(logout());
        }
      });
    }

    render() {
      console.log();
      // Provide the wrapped component with the authenticated user's data
      if (this.state.user) {
        return <WrappedComponent {...this.props} user={this.state.user} />;
      } else {
        return <SignIn />;
      }
    }
  }
  return connect()(WithAuth);
};

export default withAuth;
