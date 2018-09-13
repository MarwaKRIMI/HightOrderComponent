import React from "react";
import Spinner from "./spinner";

const Fadeine = WrappedComponent => {
  return class Fadeine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
      setTimeout(
        () =>
          this.setState({
            loading: false
          }),
        5000
      );
    }

    render() {
      return this.state.loading ? (
        <div>
          {" "}
          <Spinner />
          <h3>Please wait...</h3>
        </div>
      ) : (
        <WrappedComponent />
      );
    }
  };
};

export default Fadeine;
