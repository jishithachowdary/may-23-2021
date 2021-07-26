import React, { useState, useEffect } from 'react';
import { Button, Table, Form, FormGroup } from 'reactstrap';
import axios from 'axios';
import './style.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function Createuser() {
  const [state, setState] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    phone: ''
  });
  const [posts, setPost] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitt');
    console.log(state.name);
    createPost();
  };

  const createPost = async () => {
    console.log('in');
    const { data } = await axios.post(API_URL, {
      name: state.name,
      username: state.username,
      email: state.email,
      phone: state.phone
    });
    const post = [...posts];
    post.push(data);
    setPost(post);
    console.log(posts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const { data } = await axios.get(API_URL);
    setPost(data);
    console.log(data);
  };

  return (
    <div>
      <h1>Create User</h1>
      <Form>
        <FormGroup>
          <label>Name : </label>
          <input
            name="name"
            type="text"
            value={state.name}
            onChange={({ target: { value } }) => setState({ name: value })}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <label>User Name : </label>
          <input
            name="username"
            type="text"
            value={state.username}
            onChange={({ target: { value } }) => setState({ username: value })}
          />
        </FormGroup>
        <br />
        <div>
          <label>Email : </label>
          <input
            name="email"
            type="text"
            value={state.email}
            onChange={({ target: { value } }) => setState({ email: value })}
          />
        </div>
        <br />
        <FormGroup>
          <label>Phone: </label>
          <input
            name="phone"
            type="text"
            value={state.phone}
            onChange={({ target: { value } }) => setState({ phone: value })}
          />
        </FormGroup>
        <br />
        <FormGroup>
          <Button type="button" onClick={handleSubmit}>
            Add Post
          </Button>
        </FormGroup>
        <br />
      </Form>
    </div>
  );
}
