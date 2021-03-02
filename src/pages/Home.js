import React from 'react'
import AnimalsTableCtrl from '../controllers/AnimalsTableCtrl'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
export default function Home() {
  return (
    <>
      {/* <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link> */}
      <NavBar/>
      <AnimalsTableCtrl />
    </>
  )
}
