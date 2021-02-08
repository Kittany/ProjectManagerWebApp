import './Styles/CCLogin.css';
import CCLogin from './Components/CCLogin.jsx';
import CCSidebar from './Components/CCSidebar.jsx';
import CCUserProjects from './Components/CCUserProjects/CCUserProjects.jsx'
import CCAdminPage from './Components/CCAdminPage/CCAdminPage.jsx'
import CCUserProfile from './Components/CCUserProfile/CCUserProfile.jsx'
import CCSettingsPage from './Components/CCSettingsPage/CCSettingsPage';
import CCProjectDetail from './Components/CCProjectDetail/CCProjectDetail';

function App() {
  return (
    <div id="App">
      {/* <CCLogin /> */}
      <CCSidebar/>
      {/* <CCUserProjects/> */}
      <CCAdminPage/>  
      {/* <CCUserProfile/> */}
      {/* <CCSettingsPage/> */}
      {/* <CCProjectDetail/> */}
    </div>
  );
}

export default App;
