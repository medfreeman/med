import React from "react";
import PropTypes from "prop-types";

class Title extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    spanClass: PropTypes.string
  };

  static defaultProps = {
    level: 1
  };

  constructor(props) {
    super(props);
    this.children = React.Children.map(props.children, child => {
      if (
        React.isValidElement(child) &&
        child.props.className === "phenomic-HeadingAnchor"
      ) {
        return null;
      } else {
        return (
          <span className={props.spanClass}>
            {child}
          </span>
        );
      }
    });
    this.Tag = `h${this.props.level}`;
  }
  render() {
    return (
      <this.Tag className={this.props.className}>
        {this.children}
      </this.Tag>
    );
  }
}

export default Title;
