
import React from 'react'
import classnames from 'classnames'
import { camelCase } from '../../utils/stringUtils'
import './FetchData.css'

class FetchData extends React.Component {
  state = {
    loading: true,
    hasError: false
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    const { fetcher, dataName } = this.props
    this.setState({ loading: true })
    fetcher().then((data) => {
      this.setState({
        loading: false,
        hasError: false,
        data
      })
    }).catch((error) => {
      console.log(`Problem fetching data for ${dataName}: `, error)
      this.setState({
        loading: false,
        hasError: true,
        error
      })
    })
  }

  render() {
    const { loading, hasError, error, data } = this.state
    const { children, className, dataName } = this.props;

    if(loading) {
      return (
        <p className={classnames('FetchData', 'loading', className)}>
          Loading {dataName}...
        </p>
      )
    }

    if(hasError) {
      return (
        <p className={classnames('FetchData', 'error', className)}>
          There was a problem while loading {dataName},
          please try again later.
        </p>
      )
    }

    return React.Children.map(children, (child) => {
      if(!child) return;
      if(!React.isValidElement(child)) return child;

      return React.cloneElement(child, {
        [camelCase(dataName)]: data
      })
    })
  }
}

export {FetchData}
