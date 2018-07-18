import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

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

class Users extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <div>{users.map(user => <div key={user.idx}>{user.name}</div>)}</div>
      </div>
    );
  }
}

export default connect(state => ({ users: state.users }))(
  withStyles(styles)(Users)
);
