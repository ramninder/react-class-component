 import React from "react";
import CardList from "./components/cardList";

 
class App extends React.Component{

render(){
  return (
    <div>
      <div className="header">{this.props.title}</div>
      <CardList></CardList>
    </div>
  );

}

 }

 export default App;