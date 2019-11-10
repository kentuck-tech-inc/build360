
import React from 'react'
import './ChatPage.css'

class ChatPage extends React.Component {
  get query() {
    const params = new URLSearchParams(this.props.location.search)
    return {
      with: params.get('with')
    }
  }
  render() {
    const { user } = this.props
    const chatTargetId = this.query.with
    return (
      <p className="ChatPage">
        You are: {user}
        Chatting with id: {chatTargetId}
      </p>
    )
  }
}

export { ChatPage }
