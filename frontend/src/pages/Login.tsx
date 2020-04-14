import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useLoginUserMutation } from 'src/generated/graphql';

const Login: FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginUserMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log('form submitted');
        const response = await login({
          variables: {
            email,
            password,
          },
        });
        console.log(response);
        history.push('/');
      }}
    >
      <div>
        <input value={email} type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input
          value={password}
          type='password'
          minLength={8}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type='submit'>login</button>
    </form>
  );
};

export default Login;
