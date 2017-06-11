import React from "react"
import Head from "react-helmet"
import PropTypes from "prop-types"
import { createContainer, query } from "@phenomic/preset-react-app/lib/client"
import { Link } from "react-router"

import Layout from "./Layout"

const BlogArchive =  ({ posts }) => (
  <Layout>
    <div>
      <Head>
        <title>{ "Hello world" }</title>
        <meta name="description" content="Everything is awaysome!" />
      </Head>
      <h1>{ "Blog Archive" }</h1>
      <ul>
        { posts && posts.node && posts.node.list &&
          posts.node.list.map((post) => (
            <li key={ post.id }>
              <Link to={ `/blog/${ post.id }` }>{ post.title || post.id }</Link>
            </li>
          ))
        }
      </ul>
      <p>
        {
          posts && posts.node && posts.node.hasNextPage &&
          <Link to={ `/blog/after/${ posts.node.next }` }>{ "Older posts" }</Link>
        }
      </p>
    </div>
  </Layout>
)

BlogArchive.propTypes = {
  posts: PropTypes.object
}

const HomeContainer = createContainer(BlogArchive, (props) => ({
  posts: query({ collection: "posts", limit: 5, after: props.params.after }),
}))

export default HomeContainer
