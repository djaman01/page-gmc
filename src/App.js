import './App.css';
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Body from './Body.js'


function App() {
  return (
   <>
  <div className='app-header'>
   <Header/>
  </div>
  <div className='app-body'>
   <Sidebar/>
   <Body/>
  </div>
   </>
  );
}

export default App;
