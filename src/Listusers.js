import React, { useState, useEffect } from 'react';
import { Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function Listusers() {
  const [posts, setState] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  // READ
  const getPosts = async () => {
    const { data } = await axios.get(API_URL);
    setState(data);
  };

  // DELETE
  const deletePost = async id => {
    await axios.delete(`${API_URL}/${id}`);
    let post = [...posts];
    post = post.filter(post => post.id !== id);
    setState(post);
  };

  return (
    <div>
      <h1>Users</h1>
      <Table bordered>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th colspan="3">Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.username}</td>
                <td>{post.email}</td>
                <td>{post.phone}</td>
                <td>
                  <Link to={`/profile/${post.id}`}>Profile</Link>
                </td>
                <td>
                  <Link to={`/edit/${post.id}`}>EDIT</Link>
                </td>
                <td>
                  <Button color="danger" onClick={() => deletePost(post.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
