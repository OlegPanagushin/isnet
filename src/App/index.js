import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Links from "./containers/Links";
import Users from "./containers/Users";
import { loadApp } from "../actions";

const styles = {
  "@global": {
    html: {
      height: "100%"
    },
    body: {
      height: "100%",
      margin: 0,
      padding: 0
    },
    "#root": {
      height: "100%"
    }
  }
};

class App extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    loadApp: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    return (
      <React.Fragment>
        <Links />
        <Users />
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { loadApp }
)(withStyles(styles)(App));
