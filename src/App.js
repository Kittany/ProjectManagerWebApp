import './Styles/CCLogin.css';
import CCLogin from './Components/CCLogin.jsx';
import CCSidebar from './Components/CCSidebar.jsx';
import CCUserProjects from './Components/CCUserProjects/CCUserProjects.jsx'
import CCUserProfile from './Components/CCUserProfile/CCUserProfile';

function App() {
  return (
    <div id="App">
      {/* <CCLogin /> */}
      <CCSidebar/>
      {/* <CCUserProjects/> */}
      <CCUserProfile/>
    </div>
  );
}

export default App;
