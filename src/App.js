import './App.css';

import Header from './Header.js'
import Sidebarmap from './Sidebarmap.js'
import Body from './Body.js'


function App() {
  return (
   <div className='container'>
  <div className='app-header'>
   <Header/>
  </div>
  <div className='app-body'>
   <Sidebarmap/>
   <Body/>
  </div>
   </div>
  );
}

export default App;
