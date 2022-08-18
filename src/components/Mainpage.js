import React, {Component} from 'react';
import {getAtricles} from "../api/api"
import './Mainpage.css'
import Row from "./Row"
import Navgation from "./Navigation"


class Mainpage extends Component {
  state={
      articles:[]
  }
  componentDidMount(){
    getAtricles().then((res)=>(this.setState({articles:res.data})))
  }
  render () {
    return (
      <div>
      <Navgation />
      {this.state.articles && this.state.articles.map((rows)=>rows.map((row)=>
        <Row row={row}/>
        ))}
      </div>
    );
  }
}

export default Mainpage;
