import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function profile(props) {
  const params = useParams();
  console.log(props);
  const [posts, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
  };

  const goBack = () => {
    props.history.goBack();
  };
  return (
    <div>
      <h1>Profile</h1>
      <h3>ID : {posts.id}</h3>
      <h3>Name : {posts.name}</h3>
      <h3>UserName : {posts.username}</h3>
      <h3>Email: {posts.email}</h3>
      <h3>Phone : {posts.phone}</h3>
      <Button color="primary" size="sm" type="submit">
        <Link
          to={{
            pathname: `/editprofile/${params.id}`
          }}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          Edit
        </Link>
      </Button>
      <Button color="link" onClick={goBack}>
        Go Back
      </Button>
    </div>
  );
}
