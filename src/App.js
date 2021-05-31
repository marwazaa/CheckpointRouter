
import { Route,BrowserRouter } from 'react-router-dom';

import Description from './Description';
import Home from './Home'
function App() {
  
  return (
  <BrowserRouter>
    
  <Route exact path="/" component={Home}/>
  <Route path="/Description" component={Description}/>

  </BrowserRouter>
  )
}
export default App






