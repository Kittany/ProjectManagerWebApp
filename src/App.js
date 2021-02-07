import './Styles/CCLogin.css';
import CCLogin from './Components/CCLogin.jsx';
import CCSidebar from './Components/CCSidebar.jsx';
import CCUserProjects from './Components/CCUserProjects/CCUserProjects.jsx'
import CCAdminPage from './Components/CCAdminPage/CCAdminPage.jsx';
import CCUserProfile from './Components/CCUserProfile/CCUserProfile.jsx';

function App() {
  return (
    <div id="App">
      {/* <CCLogin /> */}
      <CCSidebar/>
      {/* <CCUserProjects/> */}
      <CCAdminPage/>
      {/* <CCUserProfile/> */}
      
    </div>
  );
}

export default App;
