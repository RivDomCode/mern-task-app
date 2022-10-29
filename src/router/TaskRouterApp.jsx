import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";


export const TaskRouterApp = ()=> {

    const status = "auth";

    return(
        <BrowserRouter>
            <Routes>
            {
        (status === "non-auth")

        ? (
            <>
            <Route path="/login/*" element={<Login/>} />
            <Route path="/*" element={ <Navigate to="/login" /> } />
            </>
           )
        : (
            <>
              <Route path="/" element={<Home/>} />
              <Route path="/*" element={ <Navigate to="/" /> } />
            </>
          )
      }

            </Routes>

        </BrowserRouter>
    )
}