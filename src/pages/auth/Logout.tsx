import { logoutUser } from '../../services/authService';
import { clearUser } from '../../features/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
   const handleLogout = async () => {
    try {
      await logoutUser();              // Firebase logs out
      dispatch(clearUser());           // Clear Redux state
      navigate('/login');              // Redirect to login
    } catch (err) {
      console.error('Logout failed:', err);
      alert('Something went wrong during logout.');
    }
  };

  return (
    <button onClick={handleLogout} className="text-white px-4 py-2 m-2 text-xs rounded-lg bg-red-400">
      Logout
    </button>
  );
};

export default Logout;
