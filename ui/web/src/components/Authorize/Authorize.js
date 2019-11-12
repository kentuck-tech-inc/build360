import { withRouter } from 'react-router-dom'
import { getAuth } from '../../utils/authUtils'

function Authorize({ location, history }) {
  var hash = location.hash.substr(1)
  const params = hash.split('&').reduce(function (result, item) {
    var parts = item.split('=');
    result[parts[0]] = parts[1];
    return result;
}, {});
//  const params = new URLSearchParams(location.search)
  const access_token = params['access_token']
  const id_token = params.get('id_token']
  const token_type = params['token_type']
  const expires_in = params['expires_in']
  const redirect_url = params['redirect_url'] || '/'
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
