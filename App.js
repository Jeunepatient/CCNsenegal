import { BrowserRouter as Router, Swictch, Route } from "react-router-dom";
import Leftside from "./components/Leftside";
import '../node_modules/font-awesome/css/font-awesome.min.css'
import LeftContextProvider from "./Context/Leftcontext";
import Homepage from "./components/Homepage";
import './App.css'
const App = () => {
  return (
    <Router>
      <div className='app'>
       
        <LeftContextProvider>
            <Leftside />
            <Homepage />
        </LeftContextProvider>
      </div>
    </Router> 
    
   );
}
 
export default App;