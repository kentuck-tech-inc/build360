import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import './Tabs.css'

const TabHeaders = ({ tabs = [], selectedTab, selectTab }) => tabs.length > 0
  ? (
    <ul className="Tabs">
      {
        tabs.map((tab, index) => (
          <li key={index} className={classnames('Tab', {'Tab-selected': selectedTab === index })}>
            <button
              className="Tab-button"
              onClick={() => selectTab(index)}
            >
              {tab}
            </button>
          </li>
        ))
      }
    </ul>
  )
  : null

export class Tabs extends React.Component {
  static propTypes = {
    defaultSelected: PropTypes.number,
    tabs: PropTypes.array,
    content: PropTypes.array
  }

  static defaultProps = {
    defaultSelected: 0,
    tabs: [],
    content: []
  }

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: this.props.defaultSelected
    }
  }

  selectTab = (tabIndex) => {
    const { selectTab } = this.state
    if(selectTab !== tabIndex) {
      this.setState({ selectedTab: tabIndex })
    }
  }

  render() {
    const { tabs, content } = this.props
    const { selectedTab } = this.state
    const tabContent = content[selectedTab] || null

    return (
      <>
        <TabHeaders tabs={tabs} selectedTab={selectedTab} selectTab={ this.selectTab } />
        {
          content.length > 0
            ? (
              content.map((tabContent, contentIndex) => (
                <section
                  key={contentIndex}
                  className={classnames(
                    "TabContent",
                    { 
                      "TabContent-selected": contentIndex === selectedTab
                    }
                  )}
                >
                  { tabContent }
                </section>
              ))
            )
            : null
        }
      </>
    )
  }
}