import React from 'react'
import {
  ChatkitProvider,
  TokenProvider
} from "@pusher/chatkit-client-react"
import { Chat } from '../../components/Chat/Chat';
import { UserList } from '../../components/UserList/UserList';
import './ChatPage.css'

const instanceLocator = "v1:us1:294a4690-7f3c-466d-9ce4-16c37331651a";
const tokenProvider = new TokenProvider({
  url: "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/294a4690-7f3c-466d-9ce4-16c37331651a/token"
});

class ChatPage extends React.Component {
  get query() {
    const params = new URLSearchParams(this.props.location.search)
    return {
      with: params.get('with')
    }
  }
  render() {
    const { user } = this.props
    const primaryIdentity = user.identities &&
      user.identities.find(ident => ident.primary === 'true')
    const userId = primaryIdentity && primaryIdentity.userId
    const chatTargetId = this.query.with
    const groups = user['cognito:groups']
    const isBuilder = groups.find(group => group === 'Builders')

    const testUserId = isBuilder
      ? 'jane'
      : 'raedwa01'
    const testOtherUserId = isBuilder
      ? 'raedwa01'
      : 'jane'

    return (
      <ChatkitProvider
        instanceLocator={instanceLocator}
        tokenProvider={tokenProvider}
        userId={testUserId}
      >
        <section className="ChatPage">
          {/* <UserList userId={'raedwa01'}/> */}
          <Chat otherUserId={testOtherUserId} />
        </section>
      </ChatkitProvider>
    )
  }
}

export { ChatPage }
