import { gql } from '@apollo/client'

export const QUERY_TEST_BY_URI = gql`
  query GetTestByUri($uri: ID!) {
    test(id: $uri, idType: URI) {
      title
      testDetails {
        introductionScreen
        course {
          ... on Course {
            title
          }
        }
        categories {
          name
          questions {
            nodes {
              id
              questionDetails {
                questionContent
                question
                questionType
                timeCap
                matches {
                  leftSide
                  rightSide
                }
                answers {
                  answer
                  result
                }
                course {
                  ... on Course {
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
