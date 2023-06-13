import sanityClient from '@sanity/client'

import {
  GET_SANITY_DATA_REQUESTING,
  GET_SANITY_DATA_LOADED,
  GET_SANITY_DATA_ERROR,
} from './constants'

const token = ''
const sanityQuery = '{"newsletter": *[_type == "newsletter"]{subject, body}, "recipients": *[_type == "listOfRecipients"]{group, emails}}'
const client = sanityClient({
  projectId: 'b18ryh7o',
  dataset: 'production',
  token: token
})

export const loadSanityData = (dispatch) => {
  dispatch({type: GET_SANITY_DATA_REQUESTING})

  client.fetch(sanityQuery).then(data => {
    const {
      newsletter = [],
      recipients = []
    } = data
    let parsedNewsletters = newsletter.map(
      (item) => ({title: item.subject, key: 'newsletter', value: item})
    )
    let parsedRecipients = recipients.map(
      (item) => ({title: item.group, key: 'recipient', value: item})
    )
    parsedNewsletters.unshift({title: 'Vyberte newsletter', key: 'newsletter'})
    parsedRecipients.unshift({title: 'Vyberte skupinu', key: 'recipient'})

    const payload = {
      newsletters: parsedNewsletters,
      recipients: parsedRecipients
    }

    dispatch({type: GET_SANITY_DATA_LOADED, payload})
  })
}
