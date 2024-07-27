import { Route, Routes } from "react-router";
import Login from "./auth/login";
import HR from "./features/hr/hr";
import EmployeeOnBoarding from "./features/hr/components/employeeonboarding";
import ManagerOnBoarding from "./features/hr/components/manageronboarding";
import Manager from "./features/manager/manager"; 
import store from "./store";
import { Provider, useDispatch } from "react-redux";
import { getEmployees } from "./store/action/employee";

function App() {
   return(
    <div>
      <Provider store = {store}>
      <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/hr" element={<HR />}></Route>
          <Route path= "/employee-onboarding" element = {<EmployeeOnBoarding />}></Route>
          <Route path= "/manager-onboarding" element = {<ManagerOnBoarding />}></Route>
          <Route path="/manager" element={<Manager />}></Route>
      </Routes>
      </Provider>
    </div>
   )
}

export default App;