import { gql } from '@apollo/client'

const PAGE_FIELDS = gql`
  fragment PageFields on Page {
    children {
      nodes {
        id
        slug
        uri
        ... on Page {
          id
          title
        }
      }
    }
    id
    parent {
      node {
        id
        slug
        uri
        ... on Page {
          title
        }
      }
    }
    slug
    title
    uri
    date
    modified
    featuredImage {
      node {
        altText
        caption
        sourceUrl
        srcSet
        sizes
        id
      }
    }
  }
`

export const QUERY_ALL_PAGES = gql`
  ${PAGE_FIELDS}
  query GetAllPages {
    pages(first: 10000, where: { hasPassword: false }) {
      nodes {
        ...PageFields
        isPostsPage
        isFrontPage
      }
    }
  }
`

export const QUERY_PAGE_BY_URI = gql`
  ${PAGE_FIELDS}
  query GetPageByUri($uri: ID!) {
    page(id: $uri, idType: URI) {
      ...PageFields
      content
      featuredImage {
        node {
          altText
          caption
          id
          sizes
          sourceUrl
          srcSet
        }
      }
      builder {
        sections {
          ... on Page_Builder_Sections_Book {
            content
            fieldGroupName
            title
          }
          ... on Page_Builder_Sections_Callout {
            bottomPadding
            button {
              target
              title
              url
            }
            fieldGroupName
            pretitle
            title
            topPadding
          }
          ... on Page_Builder_Sections_CalloutBig {
            topTitle
            topContent
            topButton {
              url
              title
              target
            }
            fieldGroupName
            features {
              icon {
                sourceUrl
              }
              title
              subtitle
            }
            bottomTitle
            bottomImage {
              sourceUrl
            }
            bottomContent
            bottomButton {
              target
              title
              url
            }
          }
          ... on Page_Builder_Sections_CalloutContact {
            topPadding
            title
            pretitle
            fieldGroupName
            bottomPadding
          }
          ... on Page_Builder_Sections_CalloutSimple {
            topPadding
            title
            fieldGroupName
            content
            bottomPadding
          }
          ... on Page_Builder_Sections_Faqs {
            fieldGroupName
            faq {
              question
              categories {
                category
              }
              answer
            }
          }
          ... on Page_Builder_Sections_FeaturedBlock {
            topPadding
            title
            imageLeftSide
            fieldGroupName
            content
            bottomPadding
            image {
              sourceUrl
            }
          }
          ... on Page_Builder_Sections_Features {
            topPadding
            title
            fieldGroupName
            features {
              title
              description
            }
            bottomPadding
          }
          ... on Page_Builder_Sections_FeaturesIcons {
            acfeFlexibleLayoutTitle
            bottomPadding
            content
            topPadding
            title
            features {
              title
              icon {
                sourceUrl
              }
              iconWidth
              iconHeight
            }
            fieldGroupName
          }
          ... on Page_Builder_Sections_FeaturesTabs {
            topPadding
            title
            fieldGroupName
            features {
              title
              image {
                sourceUrl
              }
            }
            bottomPadding
          }
          ... on Page_Builder_Sections_Hero {
            title
            fieldGroupName
            features {
              feature
            }
            content
            button {
              url
              title
              target
            }
            image {
              sourceUrl
            }
          }
          ... on Page_Builder_Sections_Interviews {
            topPadding
            interviews {
              ... on Interview {
                id
                excerpt
                slug
                title
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
            fieldGroupName
            bottomPadding
          }
          ... on Page_Builder_Sections_IntroBlock {
            topPadding
            title
            fieldGroupName
            content
            bottomPadding
          }
          ... on Page_Builder_Sections_IntroSection {
            topPadding
            title
            fieldGroupName
            content
            bottomPadding
          }
          ... on Page_Builder_Sections_PageIntro {
            title
            pretitle
            fieldGroupName
            content
            imageField {
              sourceUrl
            }
          }
          ... on Page_Builder_Sections_Pricing {
            topPadding
            title
            fieldGroupName
            bottomPadding
            features {
              title
              description
            }
          }
          ... on Page_Builder_Sections_Services {
            title
            fieldGroupName
            content
            features {
              feature
            }
            links {
              link {
                url
                title
                target
              }
              features {
                feature
              }
            }
          }
          ... on Page_Builder_Sections_Team {
            topPadding
            title
            fieldGroupName
            featured
            content
            bottomPadding
            teamMembers {
              ... on TeamMember {
                id
                title
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                teamMemberSettings {
                  position
                  linkedinProfile
                  phoneNumber
                  emailAddress
                }
              }
            }
          }
        }
      }
    }
  }
`
