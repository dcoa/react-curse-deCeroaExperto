
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginScreen } from "../componets/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>} />
                    {/* <Route path="/*" element={<DashboardRoutes />} /> */}
                    <Route path="/login" element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>} />
                    {/* <Route path="/login" element={<LoginScreen />} /> */}
                </Routes>
            </ BrowserRouter>
        </>
    )
}
