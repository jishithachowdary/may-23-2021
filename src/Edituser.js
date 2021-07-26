import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function Edituser() {
  // const [state, setState] = useState({
  //   id: '',
  //   name: '',
  //   username: '',
  //   phone: '',
  //   email: ''
  // });
  const [posts, setState] = useState([]);

  const params = useParams();
  console.log(params);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('pp');
    updatePost();
  };

  const updatePost = async () => {
    // const { data } = await axios.put(`${API_URL}/${id}`, {
    //   name,
    //   username,
    //   phone,
    //   email
    // });
    // console.log('pp');
    // console.log(data);
    // const posts = [...posts];
    // const postIndex = posts.findIndex(post => post.id === id);
    // posts[postIndex] = data;
  };

  const getPosts = async () => {
    const { data } = await axios.get(API_URL);
    console.log(data);
    setState(data);
    console.log(params.id);
    const postIndex = posts.findIndex(post => post.id === params.id);
    console.log(postIndex);
    // const user = posts.filter(post => post.id === params.id);
    // setState({ id: user.id });
    // setState({ name: user.name });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>Edit user</h1>
      <Form>
        <>
          <FormGroup onSubmit={handleSubmit}>
            <label>Id : </label>
            <input
              name="id"
              type="text"
              onChange={({ target: { value } }) => setState({ id: value })}
              value={params.id}
              disabled
            />
          </FormGroup>
          <br />
        </>
        <FormGroup>
          <label>NAME : </label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={({ target: { value } }) => setState({ name: value })}
          />
        </FormGroup>
        <br />
        {/* <FormGroup>
          <label>User Name : </label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={({ target: { value } }) => setState({ username: value })}
          />
        </FormGroup> */}
        <br />
        {/* <div>
          <label>Email : </label>
          <input
            name="email"
            type="text"
            value={email}
            onChange={({ target: { value } }) => setState({ email: value })}
          />
        </div> */}
        <br />
        <FormGroup>
          <Button type="submit">Update Post</Button>
        </FormGroup>
        <br />
      </Form>
    </div>
  );
}
