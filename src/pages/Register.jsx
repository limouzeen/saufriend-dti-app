import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [form, setForm] = useState({
    userFullname: '',
    userEmail: '',
    userName: '',
    userPassword: '',
    userImage: null,
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));

    try {
      await axios.post('/user/register', formData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center text-blue-900">Register</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <input type="text" name="userFullname" placeholder="Full Name" value={form.userFullname} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500" required />
          <input type="email" name="userEmail" placeholder="Email" value={form.userEmail} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500" required />
          <input type="text" name="userName" placeholder="Username" value={form.userName} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500" required />
          <input type="password" name="userPassword" placeholder="Password" value={form.userPassword} onChange={handleChange} className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500" required />
          <input type="file" name="userImage" accept="image/*" onChange={handleChange} className="w-full" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
