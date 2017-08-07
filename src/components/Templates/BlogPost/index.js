import React from "react";
import Head from "react-helmet";
import PropTypes from "prop-types";

import {
  createContainer,
  query,
  BodyRenderer
} from "@phenomic/preset-react-app/lib/client";
import Layout from "Layout/";
import ErrorPage from "Templates/ErrorPage";

const BlogPostComponent = ({ hasError, page }) => {
  if (hasError) {
    return <ErrorPage error={page.error} />;
  }

  return (
    <Layout>
      <div>
        {page.node &&
          <article>
            <Head>
              <title>
                {page.node.title}
              </title>
              <meta
                name="description"
                content={"" /* page.node.body.slice(0, 50)*/}
              />
            </Head>
            <h1>
              {page.node.title}
            </h1>
            <BodyRenderer>
              {page.node.body}
            </BodyRenderer>
          </article>}
      </div>
    </Layout>
  );
};

BlogPostComponent.propTypes = {
  hasError: PropTypes.bool,
  page: PropTypes.object
};

const BlogPost = createContainer(BlogPostComponent, props => ({
  page: query({ collection: "posts", id: props.params.splat })
}));

export default BlogPost;
