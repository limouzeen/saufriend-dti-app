import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function FriendList() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const res = await axios.get('/myfriend/list');
      setFriends(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching friends:', err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this friend?")) return;
    try {
      await axios.delete(`/myfriend/delete-myfriend/${id}`);
      fetchFriends(); // Reload list
    } catch (err) {
      alert('Delete failed.');
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900">My Friends</h2>
        <Link
          to="/add-friend"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Friend
        </Link>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : friends.length === 0 ? (
        <p className="text-gray-600">No friends found.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {friends.map((friend) => (
            <div key={friend.myfriendId} className="bg-white rounded shadow p-4 relative">
              <div className="flex justify-center mb-3">
                <div className="bg-gradient-to-tr from-pink-500 to-yellow-500 p-[2px] rounded-full w-24 h-24">
                  <div className="bg-white rounded-full w-full h-full overflow-hidden relative">
                    <img
                      src={`http://localhost:3000/images/myfriend/${friend.myfriendImage}`}
                      alt={friend.myfriendFullname}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-blue-800 text-center">{friend.myfriendFullname}</h3>
              <p className="text-sm text-gray-700 text-center">Phone: {friend.myfriendPhone}</p>
              <p className="text-sm text-gray-700 text-center">Age: {friend.myfriendAge}</p>
              <p className="text-sm text-gray-700 text-center">Major: {friend.myfriendMajor}</p>

              <div className="flex gap-2 mt-3 justify-center">
                <Link
                  to={`/update-friend/${friend.myfriendId}`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(friend.myfriendId)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FriendList;
