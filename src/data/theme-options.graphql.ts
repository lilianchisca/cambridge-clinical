import { gql } from '@apollo/client'

export const THEME_OPTIONS_QUERY = gql`
  query ThemeOptionsQuery {
    themeSettingsOptions {
      themeSettings {
        favicon {
          sourceUrl
        }
        phoneNumber
        emailAddress
        facebook
        twitter
        linkedin
        instagram
        headerMenu {
          link {
            target
            title
            url
          }
          subMenu {
            link {
              target
              title
              url
            }
          }
        }
      }
    }
  }
`
