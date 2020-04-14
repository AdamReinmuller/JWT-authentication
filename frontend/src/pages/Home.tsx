import React, { FC } from 'react';
import { useGetAllUsersQuery } from 'src/generated/graphql';

type HomeProps = {};

const Home: FC<HomeProps> = ({}) => {
  const { loading, error, data } = useGetAllUsersQuery({ fetchPolicy: 'network-only' });

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div>users: </div>
      <ul>
        {data.getAllUsers.map((user) => {
          return (
            <li key={user.id}>
              id:{user.id}, email: {user.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
