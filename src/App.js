import './Styles/CCLogin.css';
import CCLogin from './Components/CCLogin.jsx';
import CCSidebar from './Components/CCSidebar.jsx';
import CCUserProjects from './Components/CCUserProjects/CCUserProjects.jsx'

function App() {
  return (
    <div id="App">
      {/* <CCLogin /> */}
      <CCSidebar/>
      <CCUserProjects/>
    </div>
  );
}

export default App;
