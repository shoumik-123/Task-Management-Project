import MasterLayout from "../components/MasterLayout/Master-Layout";
import Page404 from "../pages/Page-404";
import RegistrationPage from "../pages/Registration-Page";
import LoginPage from "../pages/Login-Page";
import ProfilePage from "../pages/Profile-Page";
import CanceledPage from "../pages/Canceled-Page";
import ProgressPage from "../pages/Progress-Page";
import CompletedPage from "../pages/Completed-Page";
import DashboardPage from "../pages/Dashboard-Page";
import CreatePage from "../pages/Create-Page";
import NewPage from "../pages/New-Page";
import {createBrowserRouter} from "react-router-dom";
import ForgetPasswordPage from "../pages/ForgetPassword-Page";

const router = createBrowserRouter([
    {
        path : '/',
        element : <MasterLayout></MasterLayout>,
        children : [
            {
                path : '/',
                element : <DashboardPage></DashboardPage>
            },
            {
                path : '/create',
                element : <CreatePage></CreatePage>
            },
            {
                path :"/all",
                element : <NewPage></NewPage>
            },
            {
                path : '/progress',
                element : <ProgressPage></ProgressPage>
            },
            {
                path : '/complete',
                element : <CompletedPage></CompletedPage>
            },
            {
                path : '/cancel',
                element : <CanceledPage></CanceledPage>
            },
            {
                path :"/profile",
                element : <ProfilePage></ProfilePage>
            },
            {
                path : '/login',
                element : <LoginPage></LoginPage>
            },
            {
                path : '/registration',
                element : <RegistrationPage></RegistrationPage>
            },
            {
                path :"*",
                element : <Page404></Page404>
            },
            {
                path : '/forgetPassword',
                element : <ForgetPasswordPage></ForgetPasswordPage>
            },
        ]
    }
])

export default router;