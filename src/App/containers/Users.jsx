import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

const styles = {};

class Users extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { users } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <div>
          {users.map(user => (
            <div key={user.id}>
              {user.name} - {user.balance}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(state => ({ users: [...state.users] }))(
  withStyles(styles)(Users)
);
