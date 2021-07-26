import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function Editprofile(props) {
  const params = useParams();
  console.log(props);
  const [posts, setState] = useState({});
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [userss, setUserss] = useState([]);

  const [user, setUser] = useState('');

  useEffect(() => {
    getDetails();
  }, []);
  const getDetails = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users?id=${params.id}`
    );
    setState(data[0]);
    console.log(data);
    setIsLoading(false);
    console.log(posts);
    setUser(posts);
  };

  const goBack = () => {
    props.history.goBack();
  };

  // UPDATE
  const updatePost = async () => {
    console.log('in');
    const { data } = await axios.put(`${API_URL}/${params.id}`, {
      name,
      username,
      email,
      phone
    });
    console.log(data);
  };

  const handleChange = event => {
    let { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <Form>
        <>
          <FormGroup>
            <label>Id : </label>
            <input name="id" type="text" value={params.id} disabled />
          </FormGroup>
          <br />
        </>
        <FormGroup>
          <label>NAME : </label>
          <input
            name="name"
            type="text"
            value={posts.name}
            onChange={handleChange}
          />
        </FormGroup>
        {/* <br />
        <FormGroup>
          <label>User Name : </label>
          <input
            name="username"
            type="text"
            value={posts.username}
            onChange={handleChange}
          />
        </FormGroup>
        <br />
        <div>
          <label>Email : </label>
          <input
            name="email"
            type="text"
            value={posts.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <FormGroup>
          <label>Phone Number : </label>
          <input
            name="username"
            type="text"
            value={posts.phone}
            onChange={handleChange}
          />
        </FormGroup>
        <br />*/}
        <FormGroup>
          <Button type="Button" onClick={updatePost}>
            Update Post
          </Button>
        </FormGroup>
        <br />
      </Form>
      <Button color="link" onClick={goBack}>
        Go Back
      </Button>
    </div>
  );
}
