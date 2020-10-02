import React ,{useState} from 'react';
class Subscription extends React.Component
{

  constructor(props){
    super(props);
    this.state={
      items:[],
    }
  }

  componentDidMount(){
    fetch('http://localhost:5000/api/data/fetchdata')
    .then(res=>res.json())
    .then(json=>
    {
      console.log(json);
      this.setState(
      {
        items:json,
      })
    })
  }

 
  render()
  {
    var {items}=this.state;
    return(
     <div className="app">
      <ul>

          {items.length>0 && items.data.map(item=>{
             
          })};   
      </ul>

     </div>
     
      )
  }
}


export default Subscription