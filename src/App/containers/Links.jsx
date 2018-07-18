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

class Links extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { links } = this.props;
    return (
      <div>
        <h2>Links</h2>
        <div>{links.map(link => <div key={link.idx}>{link.idx}</div>)}</div>
      </div>
    );
  }
}

export default connect(state => ({ links: [...state.links] }))(
  withStyles(styles)(Links)
);
