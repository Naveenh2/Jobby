import {Redirect, Link} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  console.log('Running')
  return (
    <div>
      <Header />
      <div className="container1">
        <h1>Find the Job that Fits your Life</h1>
        <p>Millions of people are searching for jobs</p>
        <button className="blue" type="button">
          <Link to="/Jobs">Find Jobs</Link>
        </button>
      </div>
    </div>
  )
}
export default Home
