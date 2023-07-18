import Upload from "./pages/Upload.js";
import Form from "./pages/Form.js";
import { Resume } from "./pages/Resume.js";
import { OrderList } from "./pages/OrderList.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import { AuthProvider } from "./context/AuthContext.js";
import { ImageProvider } from "./context/ImageContext.js";
import { OrderProvider } from "./context/OrderContext.js";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.js";
import { PanelOrders } from "./pages/PanelOrders.js";

function App() {
    return (
        <AuthProvider>
            <ImageProvider>
                <OrderProvider>
                    <div className="px-10 dark:bg-slate-900  dark:text-white">
                        <Routes>
                            <Route
                                path="/register"
                                element={<Register />}></Route>
                            <Route path="/login" element={<Login />}></Route>
                            <Route element={<ProtectedRoute />}>
                                <Route path="/" element={<Upload />}></Route>
                                <Route path="/form" element={<Form />}></Route>
                                <Route
                                    path="/resume"
                                    element={<Resume />}></Route>
                                <Route
                                    path="/client-orders"
                                    element={<OrderList />}></Route>
                                <Route
                                    path="/admin-orders"
                                    element={<PanelOrders />}
                                />
                            </Route>
                        </Routes>
                    </div>
                </OrderProvider>
            </ImageProvider>
        </AuthProvider>
    );
}
export default App;
