import { withRouter } from 'react-router-dom';

function UserCodeSaver({ location }) {
  const params = new URLSearchParams(location.search)
  const userCode = params.get('code')
  const currentCode = localStorage.getItem('userCode')

  if(userCode !== currentCode) {
    localStorage.setItem('userCode', userCode)
  }

  return null
}

export default withRouter(UserCodeSaver)
