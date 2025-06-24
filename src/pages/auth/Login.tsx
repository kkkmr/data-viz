import { useState } from 'react';
import { loginUser } from '../../services/authService';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../../app/store';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.auth.user);
  if (user) return <Navigate to="/" replace />;


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate('/'); // Redirect to dashboard
    } catch (error) {
      alert('Login failed');
    }
  };

  const handleRegisterClick=()=>{
    navigate('/register'); 
  }

  return (
    <div className="m-4 flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} className='p-4 bg-gray-400 w-100 text-white' />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} className='p-4 bg-gray-400 text-white'/>
            <button type="submit" className='p-2 bg-green-400 text-white hover:cursor-pointer'>Login</button>
        </form>
        <button onClick={handleRegisterClick} className='cursor-pointer m-2 p-2 bg-green-200'>
            Not a member? Create account here
        </button>
    </div>
  );
};

export default Login;
