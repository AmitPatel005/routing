
import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './dashboard/DashBoard';
import ShowUserDetails from './dashboard/ShowUserDetails';
import Login from './login/Login';
import AddUser from './dashboard/AddUser';
import ProtectedRoute from './dashboard/routes/ProtectedRoute';



function App() {
  

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashBoard" 
        element={<ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>} />
        <Route path="/details/:id" element={<ProtectedRoute>
                <ShowUserDetails />
              </ProtectedRoute>} />
        <Route path="/addUser" element={<ProtectedRoute>
                <AddUser />
              </ProtectedRoute>} />
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
