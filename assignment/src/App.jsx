import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./dashboard/DashBoard";
import ShowUserDetails from "./dashboard/ShowUserDetails";
import Login from "./login/Login";
import AddUser from "./dashboard/AddUser";
import ProtectedRoute from "./dashboard/routes/ProtectedRoute";
import Logout from "./dashboard/Logout";

function App() {
  const token = localStorage.getItem("token");
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        {/* public route */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />

          {/* //protected route */}
          {/* <Route element={<ProtectedRoute isAuthenticated={!!token} />}>
            <Route path="/dashBoard" element={<DashBoard />} />
            <Route path="/details/:id" element={<ShowUserDetails />} />
            <Route path="/addUser" element={<AddUser />} />
          </Route> */}

          {token ? (
            <Route element={<Logout />}>
              <Route path="/dashBoard" element={<DashBoard />} />
              <Route path="/details/:id" element={<ShowUserDetails />} />
              <Route path="/addUser" element={<AddUser />} />
            </Route>
          ) : (
            <Route path="*" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
