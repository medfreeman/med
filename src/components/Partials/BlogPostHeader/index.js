import React from "react";
import PropTypes from "prop-types";

import Title from "Elements/Title";
import Link from "Elements/Link";

import styles from "./index.css";
import linkTheme from "./linkTheme.css";

const BlogPostHeader = ({ post }) => {
  const title = post.id
    ? <Link to={`/blog/${post.id}`} theme={linkTheme}>
        {post.title || post.id}
      </Link>
    : post.title;

  return (
    <header>
      <Title level={2} className={styles.h2} spanClass={styles.h2__text}>
        {title}
      </Title>
      <p>
        {post.date}
      </p>
    </header>
  );
};

BlogPostHeader.propTypes = {
  post: PropTypes.object
};

export default BlogPostHeader;
