import React from 'react'
import { BuilderCard } from '../BuilderCard/BuilderCard'
import { searchBuilders } from '../../api/Builder'
import classnames from 'classnames';

class BuilderSearchResponse extends React.Component {
  state = {
    builders: [],
    loading: true
  }

  componentDidMount() {
    searchBuilders(this.props.query).then(builders => {
      this.setState({ builders: builders || [], loading: false, error: false })
    })
    .catch(() => {
      this.setState({ loading: false, error: true })
    })
  }

  render() {
    const { className } = this.props
    const { builders = [], loading, error } = this.state
    const classname = classnames(
      'BuilderSearchResponse',
      {
        'error': error,
        'loading': loading
      },
      className
    )
    if(error) {
      return <p className={classname}>
        There was a problem while searching for builders,
        please try again later.
      </p>
    }

    if(loading) {
      return <p className={classname}>
        Searching for builders...
      </p>
    }

    return <ul className={classname}>
      {
        builders.map((builder) => (
          <li key={builder.id}>
            <BuilderCard className="mt-16" key={builder.id} isLink builder={builder}/>
          </li>
        ))
      }
    </ul>
  }
}

export {BuilderSearchResponse}