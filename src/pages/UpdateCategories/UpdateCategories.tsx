import React, { useState, useEffect } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  is_active: string;
}

const EditUser: React.FC<{ user: User; onUpdate: () => void }> = ({
  user,
  onUpdate,
}) => {
  const [editedName, setEditedName] = useState(user.name);
  const [is_active, setis_active] = useState(user.is_active);

  const handleUpdateUser = async () => {
    try {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        console.error("Authentication token not found");
        return;
      }

      const headers = { authorization: authToken };

      const updatedData = {
        name: editedName,
        is_active: is_active,
      };

      await axios.put(
        `https://mock-api.arikmpt.com/api/category/${user.id}`,
        updatedData,
        {
          headers,
        }
      );

      onUpdate();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
      </div>
      <div>
        <label>is_active:</label>
        <input
          type="text"
          value={is_active}
          onChange={(e) => setis_active(e.target.value)}
        />
      </div>
      <button onClick={handleUpdateUser}>Update User</button>
    </div>
  );
};

const UserList: React.FC = () => {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.example.com/users");
        setUserList(response.data);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateList = async () => {
    try {
      const response = await axios.get("https://api.example.com/users");
      setUserList(response.data);
    } catch (error) {
      console.error("Error fetching updated user list:", error);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      {userList.map((user) => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>is_active: {user.is_active}</p>
          <EditUser user={user} onUpdate={handleUpdateList} />
        </div>
      ))}
    </div>
  );
};

export default UserList;
