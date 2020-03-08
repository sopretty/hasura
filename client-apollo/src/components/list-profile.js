import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ProfileComponent from './profile'

const Profile = gql`
  {
    profile {
      id,
      name
    }
  }
`;

const ListProfile = () :React.Component => {

  const { loading, data }= useQuery(Profile)

  console.log('1',loading)
    return (
      <div>
        <div>
          {!loading && data.profile && data.profile.map(profile => (
            <ProfileComponent>{profile.name}</ProfileComponent>
          ))}
          {loading && (<div>LoaDinG...</div>)}
        </div>
      </div>
    )
  }

export default ListProfile