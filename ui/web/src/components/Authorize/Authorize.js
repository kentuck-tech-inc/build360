import { withRouter } from 'react-router-dom'
import { getAuth } from '../../utils/authUtils'

function Authorize({ location, history }) {
  const params = new URLSearchParams(location.search)
  const access_token = params.get('access_token')
  const id_token = params.get('id_token')
  const token_type = params.get('token_type')
  const expires_in = params.get('expires_in')
  const redirect_url = params.get('redirect_url') || '/'
  const currentAuth = getAuth()

  const invalidParams = !access_token
    || !id_token
    || !token_type
    || !expires_in
  const authChanged = access_token !== currentAuth.access_token
    || id_token !== currentAuth.id_token
    || token_type !== currentAuth.token_type
    || expires_in !== currentAuth.expires_in

  if (invalidParams) {
    console.log(`Invalid auth params, redirecting to index...`)
    history.push('/')
    return null
  } else if (authChanged) {
    console.log(`Auth changed, saving to localStorage`)
    localStorage.setItem('auth', JSON.stringify({
      access_token,
      id_token,
      token_type,
      expires_in
    }))
  }

  history.push(decodeURIComponent(redirect_url))

  return null
}

export default withRouter(Authorize)