import { gql } from '@apollo/client'

export const POST_BY_SLUG_QUERY = gql`
  query PostBySlugQuery($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      date
      modified
      slug
      title
      excerpt(format: RENDERED)
      categories {
        nodes {
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
      content(format: RENDERED)
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
`

export const POSTS_PAGINATED_QUERY = gql`
  query PostsPaginatedQuery($after: String) {
    posts(first: 100, after: $after, where: { hasPassword: false }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        date
        modified
        slug
        title
        excerpt(format: RENDERED)
        categories {
          nodes {
            slug
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`
