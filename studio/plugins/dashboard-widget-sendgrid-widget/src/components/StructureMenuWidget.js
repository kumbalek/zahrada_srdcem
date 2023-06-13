import React, {useReducer, useEffect} from 'react'
import blocksToHyperScript from '@sanity/block-content-to-hyperscript'
import SearchableSelect from 'part:@sanity/components/selects/default'
import Button from 'part:@sanity/components/buttons/default'
import Dialog from 'part:@sanity/components/dialogs/confirm'
import Confirmation from 'part:@sanity/components/snackbar/default'

import {SET_STATE} from './constants'
import reducer, {initialState} from './reducer'
import {loadSanityData} from './utils'
import styles from './StructureMenuWidget.css'
import {BlockRenderer} from './serializers'

const htmlBefore = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Newsletter - Zahrada srdcem</title> <style> #outlook a { padding: 0; } body { width: 100% !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; margin: 0; padding: 0; } .ReadMsgBody { width: 100%; } .ExternalClass { width: 100%; } .backgroundTable { margin: 0 auto; padding: 0; width: 100%; !important; } table td { border-collapse: collapse; } .ExternalClass * { line-height: 115%; } figure { margin: 0; } h1 { color: #475840; text-align: center; font-family: serif; letter-spacing: 1px; } h3 { color: #475840; } a { color: #86A27E; } a:visited { color: #475840; } blockquote { color: #475840; text-align: center; font-size: 22px; font-family: serif; font-style: italic; letter-spacing: 1px; } /* End reset */ @media screen and (max-width: 630px) { *[class="container"] { width: 320px !important; padding: 0px !important } *[class="mobile-column"] { display: block; } *[class="mob-column"] { float: none !important; width: 100% !important; } *[class="mobile-padding"] { padding-left: 10px !important; padding-right: 10px !important; } *[class="hide"] { display: none !important; } *[class="100p"] { width: 100% !important; height: auto !important; } *[class="mobile-column-blog"] { padding-bottom: 20px; display: block; } } @media screen and (max-width: 450px) { *[class="mobhide"] { display: none !important; } *[class="font-bump"] { font-size: 16px !important; } *[class="link-bump"] { font-size: 21px !important; } *[class="100p-mob"] { width: 100% !important; height: auto !important; } } </style></head><body style="padding:0; margin:0"> <table border="0" cellpadding="0" cellspacing="0" class="mobile-padding" style="margin: 0; padding: 0" width="100%"> <tr> <td align="center" valign="top"> <table border="0" cellpadding="0" cellspacing="0" class="100p" width="640"> <tr> <td height="10"></td> </tr> <tr> <td align="right" style="font-size:11px; color:#333333; font-family:Arial, Helvetica, sans-serif;"> Nezobrazil se Vám email správně? <a href="https://zahradasrdcem.cz/" style="color:#86A27E; text-decoration:none;">Přečtěte si newsletter na webu</a> </td> </tr> </table> <table border="0" cellpadding="0" cellspacing="0" class="100p" width="640"> <tr> <td height="20"></td> </tr> </table> <table border="0" cellpadding="0" cellspacing="0" class="100p" width="640"> <tr> <td valign="top"><img alt="" border="0" class="100p" src="https://cdn.sanity.io/images/b18ryh7o/production/a0e8a7afeb877d6adb419f0c05b94a6d83c3259f-640x202.jpg?w=640&amp;h=480&amp;fit=max" style="width:240px;display:block;margin:auto;"></td> </tr> </table> <table border="0" cellpadding="0" cellspacing="0" class="100p" width="640"> <tr> <td height="20"></td> </tr> </table> <table border="0" cellpadding="20" cellspacing="0" class="100p" style="background-color: #F7F6EF" width="640"> <tr> <td valign="top"> <table border="0" cellpadding="0" cellspacing="0"> <tr> <td align="left" class="font-bump" style="font-size:14px; color:#333333; font-family:Arial, Helvetica, sans-serif;">'
const htmlAfter = '</td> </tr> </table> </td> </tr> </table> </td> </tr> </table></body></html>'

const removeSpaces = (e = '') => e.replace(/\s/g, '')

const sendTestMail = async (state) => {
  const {
    newsletter: {
      value: {
        subject,
        body
      }
    } = {},
    recipient: {
      value: {
        emails
      }
    } = {}
  } = state
  const newsletter = blocksToHyperScript({
    blocks: body,
    imageOptions: {w: 640, h: 480, fit: 'max'},
    projectId: 'b18ryh7o',
    dataset: 'production',
    serializers: {types: {block: BlockRenderer}}
  }).outerHTML
  const personalizations = emails.map(email => ({
    to: [{
      email: removeSpaces(email)
    }]
  }))
  const message = `${htmlBefore}${newsletter}${htmlAfter}`

  try {
    const response = await fetch('/.netlify/functions/sendgrid', {
      method: 'POST',
      body: JSON.stringify({
        message,
        subject,
        personalizations
      })
    })
    if (!response.ok) {
      console.log('ERROR RESPONSE', response)
      return false
    }
    console.log('SUCCESS RESPONSE, ', response)
    return true
  } catch (error) {
    console.log('ERROR ', error)
    return false
  }
}

const handleSend = (state, setState) => {
  const {
    newsletter: {
      value: newsletterValue
    } = {},
    recipient: {
      value: recipientValue
    } = {}
  } = state

  if (newsletterValue && recipientValue) {
    setState({
      confirmationDialog: true,
      valueNotSelected: false
    })
  } else {
    setState({
      valueNotSelected: true
    })
  }
}

function StructureMenuWidget () {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setState = (payload) => dispatch({type: SET_STATE, payload})

  useEffect(() => {
    const {
      dataRequesting,
      dataLoaded,
      dataError
    } = state

    if (dataRequesting === false && dataLoaded === false && dataError === false) {
      loadSanityData(dispatch)
    }
  })

  const selectOnChange = (value) => {
    setState({
      valueNotSelected: false,
      [value.key]: value
    })
  }

  const onConfirm = () => {
    setState({
      confirmationDialog: false,
      loading: true
    })
    sendTestMail(state)
      .then(success => {
        console.log('THEN, ', success)
        setState({
          confirmationSuccess: success,
          confirmationError: !success,
          loading: false,
          // Reset selects
          newsletter: undefined,
          recipient: undefined
        })
      })
  }

  const onCancel = () => {
    setState({
      confirmationDialog: false
    })
  }

  const {
    newsletter,
    recipient,
    newsletters = [],
    recipients = [],
    valueNotSelected,
    confirmationDialog,
    confirmationSuccess,
    confirmationError,
    loading
  } = state

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3 className={styles.title}>{'Rozeslat newsletter'}</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.input}>
          <p>{'Newsletter'}</p>
          <SearchableSelect
            label={'Newsletter'}
            items={newsletters}
            onChange={selectOnChange}
            value={newsletter}
          />
        </div>
        <div className={styles.input}>
          <p>{'Příjemci'}</p>
          <SearchableSelect
            label={'Příjemci'}
            items={recipients}
            onChange={selectOnChange}
            value={recipient}
          />
        </div>
        {valueNotSelected && <p>{'Pro odeslání vyberte newsletter i příjemce.'}</p>}
        {
          confirmationDialog && <Dialog
            title={'Potvrzení:'}
            children={
              <>
                <p>{'Odesíláte newsletter: '}<b>{newsletter.title}</b></p>
                <p>{'Na emaily ve skupině: '}<b>{recipient.title}</b></p>
              </>
            }
            confirmButtonText={'Odeslat'}
            cancelButtonText={'Zrušit'}
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
        }
        <Button
          onClick={() => handleSend(state, setState)}
          loading={loading}
          disabled={loading}
        >
          {'Odeslat'}
        </Button>
        {confirmationSuccess && <Confirmation
          kind={'success'}
          title={'Odeslání proběhlo úspěšně'}
          onClose={() => { setState({confirmationSuccess: false}) }}
        />}
        {confirmationError && <Confirmation
          kind={'error'}
          title={'Při odesílání došlo k chybě'}
          onClose={() => { setState({confirmationError: false}) }}
        />}
      </div>
    </div>
  )
}

export default StructureMenuWidget
