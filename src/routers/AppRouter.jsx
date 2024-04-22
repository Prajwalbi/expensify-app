import React from "react";
import { BrowserRouter, Route, NavLink ,Routes} from 'react-router-dom';
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={ <ExpenseDashBoardPage />} ></Route>
                    <Route path="/home" element={ <AddExpensePage />}>  </Route>
                    <Route path="/edit/:id"  element={ <EditExpensePage />}> </Route>
                    <Route path="/help"  element={ <HelpPage />}> </Route>
                    <Route path="*" element={ <NotFoundPage />}> </Route>
                 
                    </Routes> 
                    
                {/* </Switch> */}
            </div>
        </BrowserRouter>
    );
}




export { AppRouter as default };


