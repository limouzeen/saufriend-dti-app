import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateFriend() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    myfriendFullname: '',
    myfriendPhone: '',
    myfriendAge: '',
    myfriendMajor: 'IoT',
    myfriendImage: null,
  });
  const [preview, setPreview] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFriend();
  }, []);

  const fetchFriend = async () => {
    try {
      const res = await axios.get('/myfriend/list');
      const friend = res.data.find((f) => f.myfriendId == id);
      if (friend) {
        setForm({
          myfriendFullname: friend.myfriendFullname,
          myfriendPhone: friend.myfriendPhone,
          myfriendAge: friend.myfriendAge,
          myfriendMajor: friend.myfriendMajor,
          myfriendImage: null,
        });
        setPreview(`http://localhost:3000/images/myfriend/${friend.myfriendImage}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('myfriendId', id);
    Object.entries(form).forEach(([key, val]) => {
      if (val) data.append(key, val);
    });

    try {
      await axios.put('/myfriend/update', data);
      navigate('/friends');
    } catch (err) {
      setError(err.response?.data?.message || 'Update failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Update Friend</h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <input
            type="text"
            name="myfriendFullname"
            value={form.myfriendFullname}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="myfriendPhone"
            value={form.myfriendPhone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            name="myfriendAge"
            value={form.myfriendAge}
            onChange={handleChange}
            placeholder="Age"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
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

          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-40 object-cover rounded border"
            />
          )}

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
            Update Friend
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateFriend;
