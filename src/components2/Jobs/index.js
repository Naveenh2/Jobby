import {Component} from 'react'

import {BsSearch} from 'react-icons/bs'

import Loader from 'react-loader-spinner'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'

import JobCard from '../JobCard'

import Profile from '../Profile'

// eslint-disable-next-line
import './index.css'

class Jobs extends Component {
  state = {joblist: [], input: '', isLoading: true, status: false}

  componentDidMount() {
    this.fetchData()
  }

  searchChanged = e => this.setState({input: e.target.value})

  dataFailure = () => {
    this.setState({status: true})
  }

  fetchData = async () => {
    this.setState({isLoading: false})
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const {input} = this.state
    const methods = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/jobs?search=${input}`,
      methods,
    )
    if (response.ok) {
      console.log('Running...')
      const apidata = await response.json()
      const {jobs} = apidata
      console.log(jobs, 'sfv')
      const list = jobs.map(job => ({
        companyLogoUrl: job.company_logo_url,
        employmentType: job.employment_type,
        id: job.id,
        jobDescription: job.job_description,
        location: job.location,
        packagePerAnnum: job.package_per_annum,
        rating: job.rating,
        title: job.title,
      }))
      console.log(jobs, 'jobs')
      this.setState({joblist: [...list]})
    } else {
      this.dataFailure()
    }
  }

  render() {
    const {employmentTypesList, salaryRangesList} = this.props
    console.log(employmentTypesList)
    const {joblist, isLoading, status, input} = this.state
    const filteredArray = joblist.filter(ele =>
      ele.title.toLowerCase().includes(input.toLowerCase()),
    )
    console.log(filteredArray, 'filtered')
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return status ? (
      <div className="color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
        />
        <h1>Opps! Something Went Wrong</h1>
        <p>We cannot seem to find the page you are looking for</p>
        <button type="button">Retry</button>
      </div>
    ) : (
      <div>
        <Header />
        <div className="containerjobs">
          <div className="leftpart">
            <div className="profile">
              <Profile />
            </div>
            <hr /> <h1>Type of Employment</h1>
            <ul className="group">
              {employmentTypesList.map(ele => (
                <li className="line">
                  <label htmlFor={ele.employmnetTypeId}>{ele.label}</label>
                  <input type="checkbox" id={ele.employmentTypeId} />
                </li>
              ))}
            </ul>
            <hr />
            <ul className="group">
              <h1>Salary Range</h1>
              {salaryRangesList.map(ele => (
                <li className="line">
                  <label htmlFor={ele.salaryRangeId}>{ele.label}</label>
                  <input type="radio" id={ele.salaryRangeId} />
                </li>
              ))}
            </ul>
          </div>
          <div className="rightpart">
            <input
              type="search"
              placeholder="Search"
              className="search"
              onChange={this.searchChanged}
            />
            <button type="button" data-testid="searchButton">
              <BsSearch className="search-icon" />
            </button>
            {isLoading && (
              <div data-testid="loader">
                <Loader type="TailSpin" color="green" width={66} height={67} />
              </div>
            )}
            {!isLoading && filteredArray.length > 0 && (
              <ul className="jobcard">
                {filteredArray.map(ele => {
                  console.log('running', ele)
                  return <JobCard jobDetails={ele} key={ele.id} />
                })}
              </ul>
            )}{' '}
            {!isLoading && filteredArray.length === 0 && (
              <div className="containerflex">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
                  alt="no jobs"
                />
                <h1>No Jobs Found</h1>
                <p>We could not see any jobs.Try another filter</p>
                <button type="button">Retry</button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default Jobs
