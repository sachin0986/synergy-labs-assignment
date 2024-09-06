import React, { useEffect, useState } from "react";
import "./App.css";
import AddUser from "./Components/AddUser";
import User from "./Components/User";
import Footer from "./Components/Footer";
import UpdateUser from "./Components/UpdateUser";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showAddUser, setShowAddUser] = useState(false); // State to control AddUser form visibility

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (name, email, phone) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
        setShowAddUser(false); // Hide AddUser form after adding
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onUpdate = async (id, name, email, phone) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(
          users.map((user) => (user.id === id ? data : user)) // Update the user in the list
        );
        setEditingUser(null); // Reset editing state
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            users.filter((user) => {
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onEdit = (user) => {
    setEditingUser(user); // Set the user to be edited
  };

  const toggleAddUserForm = () => {
    setShowAddUser(!showAddUser); // Toggle visibility of AddUser form
  };

  return (
    <div className="App">
      <button onClick={toggleAddUserForm} className="toggle-add-user-btn">
        {showAddUser ? "Cancel" : "Add User"}
      </button>

      {showAddUser ? (
        <AddUser onAdd={onAdd} />
      ) : (
        <>
          {editingUser && <UpdateUser user={editingUser} onUpdate={onUpdate} />}
          <div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <User
                    id={user.id}
                    key={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    onEdit={onEdit} // Pass the onEdit function to the User component
                    onDelete={onDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;