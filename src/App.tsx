import type React from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import '../src/styles/App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import PostDetail from "./pages/PostDetail";
import { useAuth } from "./context/authContext";
import CreatePost from "./pages/CreatePost";

function App() {
  const { isAuth, setIsAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
      console.log('Usuário deslogado!');
      setIsAuth(false);
      navigate('/'); // Redireciona para a página inicial após o logout
      // Aqui você chamaria sua lógica real de logout (limpar tokens, etc.)
  };
  
  return (
    <>
      <NavBar 
        isAuthenticated={isAuth}
        handleLogout={handleLogout}
        navigate={navigate}
      />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/edit/:id" element={<CreatePost />} />
      </Routes>
    </>
  )
}

export default App;
