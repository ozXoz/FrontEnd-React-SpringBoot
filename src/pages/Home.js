import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [editUserId, setEditUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/alluser");
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/user/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleView = (id) => {
    navigate(`/detailsuser/${id}`);
  };

  const styles = {
    container: {
      margin: "1.5em",
      padding: ".1vh",
      maxWidth: "100em",
    },
    table: {
      width: "100%",
      border: ".3vh solid #EFE6E8",
      margin: ".5em",
    },
    button: {
      margin: ".5vh",
    },
    col: {
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <div className="py-4">
        <table style={styles.table}>
          <thead
            style={{
              margin: "5px",
              color: "black",
            }}
          >
            <tr style={styles.col}>
              <th scope="col">#</th>
              <th>Name</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                style={{
                  border: ".0.99vh solid #010B0E",
                  padding: ".1vh",
                  textAlign: "center",
                }}
                key={user.id}
              >
                <th scope="row">{index + 1}</th>
                <td
                  style={{
                    border: ".1vh solid blue",
                    padding: ".5vh",
                  }}
                >
                  {user.name}
                </td>
                <td
                  style={{
                    border: ".1vh dashed green",
                    padding: ".5vh",
                  }}
                >
                  {user.email}
                </td>
                <td
                  style={{
                    border: ".1vh solid blue",
                    padding: ".5vh",
                  }}
                >
                  {user.username}
                </td>
                <td
                  style={{
                    border: ".1vh dashed green",
                    padding: ".5vh",
                  }}
                >
                  <button
                    style={styles.button}
                    className="btn btn-warning"
                    onClick={() => handleView(user.id)}
                  >
                    View
                  </button>
                  <Link
                    style={styles.button}
                    className="btn btn-primary"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    style={styles.button}
                    className="btn btn-danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
