import { gql } from '@apollo/client'

export const GET_MISSIONS = gql`
{
        launchesPast(limit: 10) {
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            flickr_images
          }
          rocket {
            rocket_name
            second_stage {
              payloads {
                payload_type
                payload_mass_kg
                payload_mass_lbs
              }
            }
            rocket_type
            rocket {
              company
            }
          }
          id
          details
    }
}
     
`