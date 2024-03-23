import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    useParams
} from "react-router-dom";

import Home from '@/pages/Home';
import AccountLinks from '@/pages/AccountLinks';
import Dashboard from '@/pages/Admin/Dashboard';

export default createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="/:accountlink" element={ <AccountLinks /> }></Route>
            <Route path="/admin">
                <Route path="dashboard" element={ <Dashboard /> }></Route>
            </Route>
        </>
    )
)