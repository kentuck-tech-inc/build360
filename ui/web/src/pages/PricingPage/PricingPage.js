import React from 'react'
import './PricingPage.css'

class PricingPage extends React.Component {
  render () {
    return (
      <section className="PricingPage">
        <table className="PricingTable" cellSpacing={0} cellPadding={0}>
          <thead>
            <tr>
              <th></th>
              <th>Professional</th>
              <th>Enterprise</th>
              <th>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <span className="price">$199</span>
                <span className="frequency">per Month</span>
              </td>
              <td>
                <span className="price">$299</span>
                <span className="frequency">per Month</span>
              </td>
              <td>
                <span className="price">$499</span>
                <span className="frequency">per Month</span>
              </td>
            </tr>
            <tr>
              <td>VR Custom Quoting</td>
              <td className="no">No</td>
              <td className="yes">Yes</td>
              <td className="yes">Yes</td>
            </tr>
            <tr>
              <td>Number of States</td>
              <td>1</td>
              <td>5</td>
              <td>All</td>
            </tr>
            <tr>
              <td>Top of Listings</td>
              <td className="no">No</td>
              <td>In 3 Zip Codes</td>
              <td className="yes">Yes</td>
            </tr>
            <tr>
              <td>Residential</td>
              <td className="yes">Yes</td>
              <td className="yes">Yes</td>
              <td className="yes">Yes</td>
            </tr>
            <tr>
              <td>Commerial &amp; Industrial</td>
              <td className="no">No</td>
              <td className="no">No</td>
              <td className="yes">Yes</td>
            </tr>
            <tr>
              <td>Monthly Blog Listing</td>
              <td className="no">No</td>
              <td className="no">No</td>
              <td className="yes">Yes</td>
            </tr>
            <tr>
              <td>Maximum quotes per month</td>
              <td>25</td>
              <td>100</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <form action="/purchase">
                  <input hidden name="type" value="professional"/>
                  <button className="btn">Purchase<br/>Professional</button>
                </form>
              </td>
              <td>
                <form action="/purchase">
                  <input hidden name="type" value="enterprise"/>
                  <button className="btn">Purchase<br/>Enterprise</button>
                </form>
              </td>
              <td>
                <form action="/purchase">
                  <input hidden name="type" value="premium"/>
                  <button className="btn">Purchase<br/>Premium</button>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}

export { PricingPage }