import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const Profile = gql`
  {
    profile(where: {id: { _eq: 1}}) {
    id
    name
  }
  }
`;

const ProfileComponent = ():React.Component => {

  const { loading, data }= useQuery(Profile)
  console.log('2',loading, data)
    return (
      <div>
        <div>
          {!loading && data.profile && data.profile.map(profile => (
            <div key={profile.name}>{profile.name}</div>
          ))}
          {loading && (<div>LoaDinG...</div>)}
        </div>
      </div>
    )
  }

export default ProfileComponent