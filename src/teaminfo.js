import React from 'react';
import './css.css';
import {NavLink} from "react-router-dom";

import jsonData from './data.json';
const loadData = () => JSON.parse(JSON.stringify(jsonData));

class TeamInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={data: []}
    }

    componentWillMount(){
        this.setState({data: jsonData.teams[this.props.fetchIndex]})
    }

    click=(e)=>{
        this.props.sendIndex(e.currentTarget.getAttribute('index'))
    }

    select=(e)=>{
        var obj=this.state.data.roster
        if(e.target.value=='DepthOrder'){
            for(var i=0;i<this.state.data.roster.length;i++){
                var temp=this.state.data.roster[i].depthOrder
                if(temp==2){
                    temp=obj.splice(i,1)
                    obj.push(temp[0])
                }
            }
            for(var i=0;i<this.state.data.roster.length;i++){
                var temp=this.state.data.roster[i].depthOrder
                if(temp==3){
                    temp=obj.splice(i,1)
                    obj.push(temp[0])
                }
            }
        }
        this.forceUpdate()
    }

    render(){
        return (
                <div>
                    <h1>{this.state.data.name}</h1>
                    <p>
                        Sort &ensp;
                        <select onChange={this.select}>
                            <option value='none'></option>
                            <option value='DepthOrder'>DepthOrder</option>
                        </select>
                    </p>
                    {this.state.data.roster.map((obj,i)=>{
                        return (
                            <div className='playerCard' index={i} onClick={this.click}>
                                <NavLink to='/editinfo' className='link'>
                                    <p className='playerName' >{obj.person.displayName}</p>
                                    <p>Unit: &ensp;{obj.unit}</p>
                                    <p>Position: &ensp;{obj.position}</p>
                                    <p>DepthOrder: {obj.depthOrder}</p>
                                </NavLink>
                            </div>
                        )
                    })}
                </div>
        )
    }
}

export default TeamInfo