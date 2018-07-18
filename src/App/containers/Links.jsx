import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Tree from "react-d3-tree";

const styles = {};

function linksToTree(links) {
  if (!links.length) return [{ name: "0" }];

  const linkToBranch = linkId => {
    const link = links[linkId];
    if (link)
      return {
        name: linkId.toString(),
        children: link.childrenIds.map(id => linkToBranch(id))
      };
    else
      return {
        name: linkId.toString()
      };
  };

  const result = linkToBranch(0);
  return [result];
}

class Links extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    const { links } = this.props;
    return (
      <div>
        <h2>Links</h2>
        <div style={{ width: "100vw", height: "500px" }}>
          <Tree data={linksToTree(links)} orientation="vertical" />
        </div>
      </div>
    );
  }
}

export default connect(state => ({ links: [...state.links] }))(
  withStyles(styles)(Links)
);
