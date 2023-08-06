import Card from "./Components/CardCarosel/Card";
import Carosel from "./Components/Carosel/Carosel";
import Group from "./Components/Group/Group";
import Navbar from "./Components/Navbar"
import Popular from "./Popular/Popular";

function App() {
  return  <>

  <div className="main-box">
  <Navbar/>
  <Carosel/><br/>
 <Card/>
 <Group/>
 <Popular/>
 

  
  </div>


  </> 
  
}

export default App;
