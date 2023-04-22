import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function Users() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        resp.json().then((res) => {
          setUserList(res);
          localStorage.setItem("users", JSON.stringify(res));
        });
      })
      .catch(() => {
        setUserList(JSON.parse(localStorage.getItem("users")));
      });
  }, []);

  return (
    <div>
      <h1>User Component</h1>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Username</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((usr) => (
            <tr>
              <td>{usr.id}</td>
              <td>{usr.name}</td>
              <td>{usr.username}</td>
              <td>{usr.website}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
