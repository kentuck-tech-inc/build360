import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { FadeInOnVisible } from '../../components/FadeInOnVisible/FadeInOnVisible'
import './BuilderMaterialCalculator.css'
import { Card } from '../../components/Card/Card'

export class BuilderMaterialCalculator extends React.Component {

    constructor(props) {
        super(props)

        this.cost = {'good': 125, 'better': 150, 'best': 180};

        this.state = {
            key: 'better',
            materialCost: 150 ,
            estimate: 0,
            totalSqft: 1000,
            totalFinSqft: 1000,
            totalBedNumber:2,
            floorplan:{},
        }

        if(this.props.floorplan!=undefined){
            this.state.totalBedNumber = this.props.floorplan.bedrooms;
            this.state.totalFinSqft = this.props.floorplan.totalSqFeet;
            this.state.totalSqft = this.props.floorplan.totalSqFeet;
        }
    
        this.handleMaterialCostChange = this.handleMaterialCostChange.bind(this); 
        this.handleBedChange = this.handleBedChange.bind(this);
        this.handleTotalFinSqftChange = this.handleTotalFinSqftChange.bind(this);
        this.handleTotalSqftChange = this.handleTotalSqftChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMaterialCostChange(event) {
        const {key} = this.state
        console.log('handleMaterialCostChange')
        this.setState({materialCost:this.cost[key]})
    }
    handleTotalFinSqftChange(event){
        console.log('handleTotalFinSqftChange')
        console.log(event.target.value)
        this.setState({totalFinSqft : event.target.value});
        console.log(this.state.totalFinSqft)
    }
    handleTotalSqftChange(event){
        console.log('handleTotalFinSqftChange')
        console.log(event.target.value)
        this.state.totalSqft = event.target.value;
        console.log(this.state.totalSqft)
    }
    handleBedChange(event) {
        console.log('handleBedChange')
        console.log(event.target.value)
        this.state.totalBedNumber = event.target.value;
        console.log(this.state.totalBedNumber)
    }
    
    handleSubmit(event) {    
        const {materialCost, totalFinSqft} = this.state    
        event.preventDefault();
        console.log('handleSubmit')

        this.setState({estimate : materialCost * totalFinSqft});
        console.log('estimate updated')
    }

    render(){
        return (
            <div className="BuilderCard-info">
                <FadeInOnVisible className="next-section grid-column-2">
                    <Card className="flex flex-col items-left">
                        <div className="mt-4">
                            <Tabs id="controlled-tab-example" activeKey={this.state.key} onSelect={k => {
                                this.state.key = k;
                                this.state.materialCost = this.cost[this.state.key];
                                console.log(this.cost[this.state.key]);
                                console.log(this.state.key);
                                this.handleMaterialCostChange();
                            } }>
                                <Tab eventKey="good" title="Good">
                                    <table className="inline-block -m-2 mr-8" cellSpacing={0} cellPadding="8px">
                                        <tbody>
                                        <tr>
                                            <th>Area</th>
                                            <th>Flooring</th>
                                            <th>Misc</th>
                                        </tr>
                                        <tr>
                                            <td>Living Areas</td>
                                            <td>Carpet, Laminate</td>
                                            <td>--</td> 
                                        </tr>
                                        <tr>
                                            <td>Kitchen</td>
                                            <td>Vinyl, Laminate</td>
                                            <td>Laminate, Red Oak, Spruce, Birth cabines with Laminate or Plastic Counter</td> 
                                        </tr>
                                        <tr>
                                            <td>Bedrooms</td>
                                            <td>Carpet, Laminate</td>
                                            <td>--</td> 
                                        </tr>
                                        <tr>
                                            <td>Bathrooms</td>
                                            <td>Vinyl, Lineoleum</td>
                                            <td>Fiberglass shower/tub</td> 
                                        </tr>
                                        <tr>
                                            <td>Basement</td>
                                            <td>Unfinished, None, Studded/Plumbed, Stained Concrete, Carpet</td>
                                            <td>--</td> 
                                        </tr>
                                        <tr>
                                            <td>Exterior</td>
                                            <td>Vinyl Siding, Engineered Hardwood, Metal Siding, Imitation brick/stone</td>
                                            <td>--</td> 
                                        </tr>
                                        <tr>
                                            <td>Other</td>
                                            <td>Back deck, front porch, back porch, seeded lawn</td>
                                            <td>--</td> 
                                        </tr>
                                        </tbody>
                                    </table>
                                </Tab>
                                <Tab eventKey="better" title="Better">
                                    <table className="inline-block -m-2 mr-8" cellSpacing={0} cellPadding="8px">
                                        <tbody>
                                        <tr>
                                            <th>Area</th>
                                            <th>Flooring</th>
                                            <th>Misc</th>
                                        </tr>
                                        <tr>
                                            <td>Living Areas</td>
                                            <td>Engineered hardwood, hardwood, bamboo</td>
                                            <td>--</td> 
                                        </tr>
                                        <tr>
                                            <td>Kitchen</td>
                                            <td>Tile, engineered hardwood, hardwood, cork</td>
                                            <td>Maple, cherry, hickory, ash, walnut cabinets with granite counters</td> 
                                        </tr>
                                        <tr>
                                            <td>Bedrooms</td>
                                            <td>Carpet, engineered hardwood, hardwood, cork, bamboo</td>
                                            <td>--</td> 
                                        </tr>
                                        <tr>
                                            <td>Bathrooms</td>
                                            <td>Tile, vinyl plank</td>
                                            <td>Fiberglass shower/tub</td> 
                                        </tr>
                                        <tr>
                                            <td>Basement</td>
                                            <td>Unfinished, None, Studded/Plumbed, Stained Concrete, Carpet</td>
                                            <td>--</td> 
                                        </tr>
                                        <tr>
                                            <td>Exterior</td>
                                            <td>Vinyl Siding, Engineered Hardwood, Metal Siding, Imitation brick/stone</td>
                                            <td>--</td> 
                                        </tr>
                                        <tr>
                                            <td>Other</td>
                                            <td>Back deck, front porch, back porch, seeded lawn</td>
                                            <td>--</td> 
                                        </tr>
                                        </tbody>
                                    </table>
                                </Tab>
                                <Tab eventKey="best" title="Best">
                                    <table className="inline-block -m-2 mr-8" cellSpacing={0} cellPadding="8px">
                                        <tbody>
                                        <tr>
                                            <th>Area</th>
                                            <th>Flooring</th>
                                            <th>Misc</th>
                                        </tr>
                                        <tr>
                                            <td>Living Areas</td>
                                            <td>Sanded and stained hardwood, hardwood, bamboo, marble</td>
                                            <td>--</td> 
                                        </tr>
                                        <tr>
                                            <td>Kitchen</td>
                                            <td>Tile, hardwood, natural stone, granite</td>
                                            <td>Maple, cherry, hickory, ash, walnut cabinets with granite counters</td>
                                        </tr>
                                        <tr>
                                            <td>Bedrooms</td>
                                            <td>Bamboo, carpet, hardwood</td>
                                            <td>--</td> 
                                        </tr>
                                        <tr>
                                            <td>Bathrooms</td>
                                            <td>Tile, natural stone</td>
                                            <td>Walk-in tile shower, jetted tub, garden tub</td> 
                                        </tr>
                                        <tr>
                                            <td>Basement</td>
                                            <td>Engineered hardwood, stained concrete, vinyl plank, carpet</td>
                                            <td>--</td> 
                                        </tr>
                                        <tr>
                                            <td>Exterior</td>
                                            <td>Stucco, brick, stone, log, insulated siding, concrete, glass</td>
                                            <td>--</td> 
                                        </tr>
                                        <tr>
                                            <td>Other</td>
                                            <td>Back deck, front porch, back porch, seeded lawn, sodded lawn</td>
                                            <td>--</td> 
                                        </tr>
                                        </tbody>
                                    </table>
                                </Tab>
                            </Tabs>
                        </div>
                    </Card> 
                    <Card className="flex flex-col items-left">
                        <h2 className="offset-header" id="view-plans">Estimator</h2> 
                        
                        <form action="#">
                            <br /><br />
                            
                            <table className="inline-block -m-2 mr-8" cellSpacing={0} cellPadding="8px">
                                <tbody>
                                    <tr>
                                        <td>
                                            <label>Material Cost:</label>
                                        </td>
                                        <td>
                                            <input type="text" id="materialCost"
                                                name="materialCost"                             
                                                value = {this.state.materialCost} 
                                                onChange = {this.handleMaterialCostChange}
                                                readOnly />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Total Squarefootage:</label>
                                        </td>
                                        <td>
                                            <input type="text" id="totalSqft"
                                                name="totalSqft"
                                                value = {this.state.totalSqft}
                                                onChange = {this.handleTotalSqftChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Total Finished Squarefootage:</label>
                                        </td>
                                        <td>
                                            <input type="text" id="totalFinSqft"
                                                name="totalFinSqft"
                                                value = {this.state.totalFinSqft}
                                                onChange = {this.handleTotalFinSqftChange} /> 
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label>Number of bed rooms:</label>
                                        </td>   
                                        <td>             
                                            <input type="text" id="bedNumber"
                                                name="bedNumber"
                                                value = {this.state.totalBedNumber}
                                                onChange = {this.handleBedChange} />
                                        </td>
                                    </tr>       
                                </tbody>
                            </table>    
                            <br /> <br />                       
                            <input type="submit" value="Calculate"  onClick={this.handleSubmit}/>
                        </form>
                        <label> Starting cost: ${this.state.estimate}</label>
                        
                    </Card>
                </FadeInOnVisible> 
            </div>    
        ); 
    }
}
