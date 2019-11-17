import React from 'react'
import PropTypes from 'prop-types'

import './BuilderEntry.css'

class BuilderEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      owner: '',
      type: '',
      founded: '',
      locations: '',
      bio: ''
    }
  }
  static propTypes = {

  }

  handleChange(evt) {
    const founded = (evt.target.validity.valid) ? evt.target.value : this.state.founded;

    this.setState({ founded });
  }

  render() {
    return (
      <form className="BuilderEntry" action="/builder/addEdit">
        <div className="inputs">
          <label>
            Company Name
            <input type="text" className="Input" name="companyName" />
          </label>
          <label>
            Owner Name
            <input type="text" className="Input" name="owner" />
          </label>
          <label>
            Construction Type
            <select className="Input" name="type" defaultValue="">
              <option value=""></option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
            </select>
          </label>
          <label>
            Founding Year
            <input type="text" className="Input" name="founded" pattern="[0-9]*" onChange={this.handleChange.bind(this)} value={this.state.founded} />
          </label>          
          <label>
            Locations
            <input type="text" className="Input" name="locations" />
          </label>
          <label>
            Biography
            <input type="textarea" className="InputArea" name="bio" />
          </label>
        </div>
        <button className="btn mt-8">Save</button>
      </form>
    )
  }
}

export {BuilderEntry}