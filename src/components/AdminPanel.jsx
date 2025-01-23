import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost/Tienda-2/back-end/api/users/login.php",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data);
      } catch (error) {
        console.error(
          "Error al obtener usuarios:",
          error.response?.data || error
        );
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Panel de Administración</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nombre} - {user.email} - {user.rol}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
