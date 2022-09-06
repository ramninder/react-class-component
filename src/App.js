 import React from "react";
import Card from "./components/card";

 
class App extends React.Component{

render(){
  return (
    <div>
      <div className="header">{this.props.title}</div>
      <Card></Card>
    </div>
  );

}

 }

 export default App;