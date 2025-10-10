import React from 'react'
import { useParams,useLocation } from 'react-router'

export default function UserDetails() {
    const {id} = useParams();   // get values from the URL path that are defined as parameters(gets id from the URL).
    const location = useLocation(); // It gives you information about the current route/location in your app
    const user = location.state; // This is usually the full user object passed when navigating from your User list page.
  return  (
    <>
      <p>User Id from URL: {id}</p>

      {user ? (
        <>
          <p>First Name: {user.firstName}</p>
          <p>Email: {user.email}</p>
          <p>Country: {user.country}</p>
        </>
      ) : (
        <p >
          ⚠  
        </p>
      )}
    </>
  );
}
