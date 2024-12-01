import './index.css'

import Cookies from 'js-cookie'

import {Link, Redirect} from 'react-router-dom'

import {BsStarFill, BsGeoAlt} from 'react-icons/bs'

const JobCard = props => {
  const {jobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobDetails

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  console.log('Running', title)
  return (
    <Link to={`jobs/${id}`}>
      <div>
        <div className="card">
          <div className="mentions1">
            <img src={companyLogoUrl} alt="company logo" />
            <div>
              <h1>{title}</h1>
              <BsStarFill />
              <p>{rating}</p>
            </div>
          </div>
          <div>
            <div className="mentions">
              <div>
                <p>{location}</p>
                <BsGeoAlt />
              </div>
              <div>
                <h1>name</h1>
              </div>
              <p>{employmentType}</p>
              <p>Breefcase</p>
            </div>
            <p>{packagePerAnnum}</p>
          </div>
          <hr />
          <h1>Description</h1>
          <p>{jobDescription}</p>
        </div>
      </div>
    </Link>
  )
}
export default JobCard
