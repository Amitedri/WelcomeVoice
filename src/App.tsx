import React from "react";
import "./App.css";
import Voice from "./components/Voice";
 interface window{
   FB:any;
 }
 
function App() {
  
  React.useEffect(()=>{
    
    const p5 = (window as any).p5;
    const windows = (window as any);

    if(window.hasOwnProperty('p5')){
      windows.song.play()
    }
  },[])
  return (
    <div className="App">
      <Voice />
    </div>
  );
}

export default App;
