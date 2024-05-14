import React from "react";
import { BrowserRouter, Route, NavLink ,Routes} from 'react-router-dom';
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import Login from "../components/Login";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                {/* <Header /> */}
                <Routes>
                    <Route path="/" element={ <Login/> } ></Route>
                    <Route element={<PrivateRoute />}>
                   
                    <Route path="/dashboard" element={<ExpenseDashBoardPage/>}></Route>
                    <Route path="/home" element={ <AddExpensePage />}>  </Route>
                    <Route path="/edit/:id"  element={ <EditExpensePage />}> </Route>
                    </Route>
                    <Route path="/help"  element={ <HelpPage />}> </Route>
                    <Route path="*" element={ <NotFoundPage />}> </Route>
                    
                    </Routes> 
            </div>
        </BrowserRouter>
    );
}
export { AppRouter as default };


