import React from 'react';

const Login = (props) => {
  const handleOnClick = () => {
    props.history.push('/')
  }
  return (
  <>
    <h1>{props.match.params.id}</h1>
    <button onClick={handleOnClick}>Back to Landing Page</button>
  </>
)};

export default Login;