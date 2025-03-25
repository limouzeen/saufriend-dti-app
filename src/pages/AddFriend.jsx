import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddFriend() {
  const [form, setForm] = useState({
    myfriendFullname: '',
    myfriendPhone: '',
    myfriendAge: '',
    myfriendMajor: 'IoT',
    myfriendImage: null,
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
    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, value));

    try {
      await axios.post('/myfriend/add-myfriend', data);
      navigate('/friends');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add friend');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Add New Friend</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <input
            type="text"
            name="myfriendFullname"
            placeholder="Full Name"
            value={form.myfriendFullname}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="myfriendPhone"
            placeholder="Phone"
            value={form.myfriendPhone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="myfriendAge"
            placeholder="Age"
            value={form.myfriendAge}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
          <select
            name="myfriendMajor"
            value={form.myfriendMajor}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
          >
            <option value="IoT">IoT</option>
            <option value="DTI">DTI</option>
            <option value="IT">IT</option>
          </select>
          <input
            type="file"
            name="myfriendImage"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Add Friend
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFriend;
