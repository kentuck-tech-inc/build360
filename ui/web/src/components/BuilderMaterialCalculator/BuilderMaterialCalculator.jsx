import React, { useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { FadeInOnVisible } from '../../components/FadeInOnVisible/FadeInOnVisible'
import './BuilderMaterialCalculator.css'
import { Card } from '../../components/Card/Card'
import { searchBuilders } from '../../api/Builder'
import FilteredMultiSelect from 'react-filtered-multiselect'

export class BuilderMaterialCalculator extends React.Component {

    constructor(props) {
        super(props)

        this.cost = {'good': 125, 'better': 150, 'best': 180};

        this.BOOTSTRAP_CLASSES = {
            filter: 'form-control',
            select: 'form-control',
            button: 'btn btn btn-block btn-default',
            buttonActive: 'btn btn btn-block btn-primary',
          }

        this.state = {
            key: 'better',
            materialCost: 150 ,
            estimate: 0,
            totalSqft: 1000,
            totalFinSqft: 1000,
            totalBedNumber:2,
            totalBathNumber:2,
            floorplan:{},
            selectedOptions: [],
            builders: [{name:'none'}],
            loading: false,
            error: false,      
            showBuilderRequest: false,      
        }

        if(this.props.floorplan !== undefined){
            this.state.totalBedNumber = this.props.floorplan.bedrooms;
            this.state.totalFinSqft = this.props.floorplan.totalSqFeet;
            this.state.totalSqft = this.props.floorplan.totalSqFeet;
            this.state.totalBathNumber = this.props.floorplan.bathrooms;
        }

        if(this.props.showBuilderRequest !== undefined){
            this.state.showBuilderRequest = this.props.showBuilderRequest;
        }
    
        this.handleMaterialCostChange = this.handleMaterialCostChange.bind(this); 
        this.handleBedChange = this.handleBedChange.bind(this);
        this.handleTotalFinSqftChange = this.handleTotalFinSqftChange.bind(this);
        this.handleTotalSqftChange = this.handleTotalSqftChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBuilderSearch = this.handleBuilderSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleDeselect = this.handleDeselect.bind(this);
        this.handleZipCodeSearch = this.handleZipCodeSearch.bind(this);
        this.handleBuilderRequestSubmit = this.handleBuilderRequestSubmit.bind(this)
        this.handleBathChange = this.handleBathChange.bind(this);
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
    handleBathChange(event){
        console.log('handleBathChange')
        console.log(event.target.value)
        this.state.totalBathNumber = event.target.value;
        console.log(this.state.totalBathNumber)
    }
    handleZipCodeSearch(event){
        console.log('handleZipCodeSearch')
        this.state.zipCodeSearch = event.target.value;
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const {materialCost, totalFinSqft} = this.state    
        console.log('handleSubmit')

        this.setState({estimate : materialCost * totalFinSqft});
        console.log('estimate updated')
    }

    handleBuilderRequestSubmit(event){
        console.log('handleBuilderRequestSubmit')
    }

    handleBuilderSearch(event){  
        event.preventDefault();
        console.log('handleBuilderSearch')
        console.log(this.state.zipCodeSearch)

        this.setState({loading: true});

        searchBuilders(this.state.zipCodeSearch).then(builders => {
            console.log('search succeded')
            console.log(builders)

            var tempB = builders.map(b=>{
                console.log(b);
                const c = {};
                c.id = b.id;
                c.name = b.companyName;
                c.email = '';

                return c;
            });

            console.log(tempB);

            this.setState({ builders: tempB || [], loading: false, error: false })
        })
        .catch(() => {
            console.log('search failed')
          this.setState({ loading: false, error: true })
        })
    }
    
    
    handleDeselect = (deselectedOptions) => {
        var selectedOptions = this.state.selectedOptions.slice()
        deselectedOptions.forEach(option => {
        selectedOptions.splice(selectedOptions.indexOf(option), 1)
        })
        this.setState({selectedOptions})
    }
    handleSelect = (selectedOptions) => {
        selectedOptions.sort((a, b) => a.id - b.id)
        this.setState({selectedOptions})
        console.log(this.state.selectedOptions)
    }
    

    render(){
        return (
            <div className="BuilderMaterialCalculator">
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
                                            <td>Laminate, Red Oak, Spruce, Birch cabines with Laminate or Plastic Counter</td> 
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
                        <h2 className="offset-header">Estimator</h2> 
                        
                        <form class="mb-4" action="#" onSubmit={this.handleSubmit}>
                            <br /><br />
                            
                            <table className="inline-block -m-2 mr-8" cellSpacing={0} cellPadding="8px">
                                <tbody>
                                    <tr>
                                        <td>
                                            <label>Price Per Square Foot:</label>
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
                                            <label>Total Square Feet:</label>
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
                                            <label>Total Finished Square Feet:</label>
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
                                            <label>Number of bedrooms:</label>
                                        </td>   
                                        <td>             
                                            <input type="text" id="bedNumber"
                                                name="bedNumber"
                                                value = {this.state.totalBedNumber}
                                                onChange = {this.handleBedChange} />
                                        </td>
                                    </tr>   
                                    <tr>
                                        <td>
                                            <label>Number of baths:</label>
                                        </td>   
                                        <td>             
                                            <input type="text" id="bathNumber"
                                                name="bathNumber"
                                                value = {this.state.totalBathNumber}
                                                onChange = {this.handleBathChange} />
                                        </td>
                                    </tr>      
                                </tbody>
                            </table>                  
                            <button class="btn mt-2">Calculate</button>
                        </form>
                        <label> Starting cost: ${this.state.estimate}</label>
                        
                        <section className="mt-8">
                            <h2 className="offset-header">Select up to 5 builders to get more detailed quotes</h2>
                            <form className="InlineBuilderSearchForm mt-4" action="#">
                                <div className="input-wrapper">
                                    <input id="BuilderSearch" type="search"       
                                        //value = {this.state.zipCodeSearch} 
                                        onChange = {this.handleZipCodeSearch}
                                        placeholder="Builder By Name or Zip Code" />
                                    <button className="btn" onClick={this.handleBuilderSearch}>Search</button>
                                </div>
                            </form>
                            <div className="grid-column-2">
                                <div className="mt-4">
                                    <FilteredMultiSelect
                                    buttonText="Add"
                                    classNames={this.BOOTSTRAP_CLASSES}
                                    onChange={this.handleSelect}
                                    options={this.state.builders}
                                    selectedOptions={this.state.selectedOptions}
                                    textProp="name"
                                    valueProp="id"
                                    />
                                </div>
                                <div className="mt-4">
                                    <FilteredMultiSelect
                                    buttonText="Remove"
                                    classNames={{
                                        filter: 'form-control',
                                        select: 'form-control',
                                        button: 'btn btn btn-block btn-default',
                                        buttonActive: 'btn btn btn-block btn-danger'
                                    }}
                                    onChange={this.handleDeselect}
                                    options={this.state.selectedOptions}
                                    textProp="name"
                                    valueProp="id"
                                    />
                                </div>
                            </div>
                            <button className="BuilderButton btn w-full mt-4" onClick={this.handleBuilderRequestSubmit}>
                                Request Estimates
                            </button>
                        </section>
                    </Card>
                </FadeInOnVisible> 
            </div>    
        ); 
    }
}
