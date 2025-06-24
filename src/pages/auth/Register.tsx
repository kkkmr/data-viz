import { useState } from 'react';
import { registerUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirm) {
      setError('Passwords do not match');
      return;
    }

    try {
      await registerUser(email, password);
      navigate('/'); // Redirect after successful registration
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4 max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-semibold">Register</h2>
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        className="w-full border px-3 py-2"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border px-3 py-2"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full border px-3 py-2"
        value={confirm}
        onChange={e => setConfirm(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Account
      </button>
    </form>
  );
};

export default Register;
