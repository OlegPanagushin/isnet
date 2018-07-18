import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Links from "./containers/Links";
import Users from "./containers/Users";
import { loadApp, startSimulation, pauseSimulation } from "../actions";

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
    loadApp: PropTypes.func.isRequired,
    startSimulation: PropTypes.func.isRequired,
    pauseSimulation: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.startSimulation = () => {
      this.props.startSimulation();
    };

    this.pauseSimulation = () => {
      this.props.pauseSimulation(true);
    };
  }

  componentDidMount() {
    this.props.loadApp();
  }

  render() {
    return (
      <div>
        <Button onClick={this.startSimulation}>Start</Button>
        <Button onClick={this.pauseSimulation}>Pause</Button>
        <div>
          {/* <Users /> */}
          <Links />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { loadApp, startSimulation, pauseSimulation }
)(withStyles(styles)(App));
