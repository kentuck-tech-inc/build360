import jwtDecode from 'jwt-decode'
const userPool = {
  UserPoolId: 'us-east-1_dc9vkVBLC',
  ClientId: '4mn7teeu4ojrg0tsi5chuargdr'
};

export function getLoginUrl() {
  const url = new URL(window.location)
  const authRedirect = `${url.origin}/auth`
  return `https://auth.build360.io/login?client_id=${userPool.ClientId}&response_type=token&scope=email+openid+phone+profile&redirect_uri=${authRedirect}`
}

export function login() {
  localStorage.setItem('redirect_url', window.location)
  window.location = getLoginUrl()
}

export function logout() {
  localStorage.removeItem('auth')
  const url = new URL(window.location)
  window.location = url.origin
}

export function getAuth() {
  const currentAuthStr = localStorage.getItem('auth')
  let currentAuth;

  try {
    currentAuth = JSON.parse(currentAuthStr)
  } catch (jsonParseException) {
    console.log('Problem parsing auth from localStorage, setting to empty object')
  }

  return currentAuth || {};
}

export function getUser() {
  const auth = getAuth()
  if(auth.id_token) {
    return jwtDecode(auth.id_token)
  }
}
