// // import {Component} from 'react'

// // import Cookies from 'js-cookie'

// // import {Redirect} from 'react-router-dom'

// // import {Loader} from 'react-loader-spinner'

// // import Header from '../Header'

// // import SimilarJobs from '../SimilarJobs'

// // class JobItemDetails extends Component {
// //   state = {sj: [], jd: {}, lc: {}, sk: [], success: true, isLoading: true}

// //   componentDidMount() {
// //     this.fetchDetails()
// //   }

// //   unsuccess = () => {
// //     this.setState({success: false})
// //   }

// //   fetchDetails = async () => {
// //     const {match} = this.props
// //     const {params} = match
// //     console.log('running', params)
// //     const {id} = params
// //     const jwtToken = Cookies.get('jwt_token')
// //     const api = `https://apis.ccbp.in/jobs/${id}`
// //     const methods = {
// //       method: 'GET',
// //       headers: {
// //         Authorization: `Bearer ${jwtToken}`,
// //       },
// //     }
// //     const response = await fetch(api, methods)
// //     if (response.ok === true) {
// //       const data = await response.json()
// //       const updatedData = {
// //         jobDetails: data.job_details,
// //         similarJobs: data.similar_jobs,
// //       }
// //       const {jobDetails, similarJobs} = updatedData
// //       const jdetails = {
// //         companyLogoUrl: jobDetails.company_logo_url,
// //         companyWebsite: jobDetails.company_website_url,
// //         employmentType: jobDetails.employment_type,
// //         id: jobDetails.id,
// //         jobDescription: jobDetails.job_description,
// //         lifeAtCompany: jobDetails.life_at_company,
// //         location: jobDetails.location,
// //         skills: jobDetails.skills,
// //         packagePerAnnum: jobDetails.package_per_annum,
// //         rating: jobDetails.rating,
// //         title: jobDetails.title,
// //       }
// //       const lifeAtCompanyf = {
// //         lifeImg: jdetails.lifeAtCompany.image_url,
// //         description: jdetails.lifeAtCompany.description,
// //       }
// //       const skillsn = jdetails.skills.map(ele => ({
// //         name: ele.name,
// //         skillsImgUrl: ele.image_url,
// //       }))

// //       console.log('skillsn', jobDetails)
// //       const similarj = similarJobs.map(ele => {
// //         console.log(ele, 'ele')
// //         return {
// //           companyLogoUrl: ele.company_logo_url,
// //           employmentType: ele.employment_type,
// //           id: ele.id,
// //           jobDescription: ele.job_description,
// //           location: ele.location,
// //           title: ele.title,
// //           rating: ele.rating,
// //         }
// //       })

// //       console.log(similarj, 'kvbjhbj')
// //       this.setState({
// //         sj: [...similarj],
// //         jd: {...jdetails},
// //         lc: {...lifeAtCompanyf},
// //         sk: [...skillsn],
// //         isLoading: false,
// //       })
// //     } else {
// //       this.unsuccess()
// //     }
// //   }

// //   render() {
// //     const {sj, jd, lc, sk, success, isLoading} = this.state
// //     console.log('Running', sj)
// //     const {
// //       companyLogoUrl,
// //       companayWebsite,
// //       id,
// //       employmentType,
// //       jobDescription,
// //       title,
// //       rating,
// //       packagePerAnnum,
// //       location,
// //     } = jd

// //     console.log(title, location)
// //     const {lifeimg, description} = lc
// //     const jwtToken = Cookies.get('jwt_token')
// //     if (jwtToken === undefined) {
// //       return <Redirect to="/login" />
// //     }
// //     if (isLoading) {
// //       return (
// //         <div>
// //           <Loader color="green" width={40} height={67} />
// //         </div>
// //       )
// //     }

// //     if (!success) {
// //       return (
// //         <div>
// //           <img
// //             src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
// //             alt="failure view"
// //           />
// //           <h1>Oops! Something Went Wrong</h1>
// //           <p>We cannot seem to find the page you are looking for</p>
// //           <button type="button">Retry</button>
// //         </div>
// //       )
// //     }
// //     return (
// //       <div>
// //         <Header />
// //         <ul>
// //           <img src={companyLogoUrl} alt="job details company logo" />
// //           <p>{jobDescription}</p>
// //           <a href={companayWebsite} target="blank_page">
// //             Visit
// //           </a>
// //           <h1>{title}</h1>
// //           <img src={lifeimg} alt={id} />
// //           <p>{employmentType}</p>
// //           <p>{location}</p>
// //           <p>{rating}</p>
// //           <p>{location}</p>
// //           <h1>Description</h1>
// //           <h1>Life at Company</h1>
// //           <p>{description}</p>
// //           <p>{employmentType}</p>
// //           <ul>
// //             <h1>Skills</h1>
// //             {sk.map(ele => (
// //               <li key={ele.name}>
// //                 {console.log(ele.skillsImgUrl)}
// //                 <img src={ele.skillsImgUrl} alt={ele.name} />
// //                 <p>{ele.name}</p>
// //                 <button type="button">Retry</button>
// //               </li>
// //             ))}
// //           </ul>
// //           <p>{packagePerAnnum}</p>
// //         </ul>
// //         <ul>
// //           <h1>Similar Jobs</h1>
// //           {sj.map(ele => (
// //             <SimilarJobs similarJobDetails={ele} key={ele.id} />
// //           ))}
// //         </ul>
// //       </div>
// //     )
// //   }
// // }
// // export default JobItemDetails

// import {Component} from 'react'
// import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
// import {Loader} from 'react-loader-spinner'
// import Header from '../Header'
// import SimilarJobs from '../SimilarJobs'

// class JobItemDetails extends Component {
//   state = {sj: [], jd: {}, lc: {}, sk: [], success: true, isLoading: true}

//   componentDidMount() {
//     this.fetchDetails()
//   }

//   unsuccess = () => {
//     this.setState({success: false})
//   }

//   fetchDetails = async () => {
//     const {match} = this.props
//     const {params} = match
//     console.log('running', params)
//     const {id} = params
//     const jwtToken = Cookies.get('jwt_token')
//     const api = `https://apis.ccbp.in/jobs/${id}`
//     const methods = {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${jwtToken}`,
//       },
//     }
//     const response = await fetch(api, methods)
//     if (response.ok === true) {
//       const data = await response.json()
//       const updatedData = {
//         jobDetails: data.job_details,
//         similarJobs: data.similar_jobs,
//       }
//       const {jobDetails, similarJobs} = updatedData
//       const jdetails = {
//         companyLogoUrl: jobDetails.company_logo_url,
//         companyWebsite: jobDetails.company_website_url,
//         employmentType: jobDetails.employment_type,
//         id: jobDetails.id,
//         jobDescription: jobDetails.job_description,
//         lifeAtCompany: jobDetails.life_at_company,
//         location: jobDetails.location,
//         skills: jobDetails.skills,
//         packagePerAnnum: jobDetails.package_per_annum,
//         rating: jobDetails.rating,
//         title: jobDetails.title,
//       }
//       const lifeAtCompanyf = {
//         lifeImg: jdetails.lifeAtCompany.image_url,
//         description: jdetails.lifeAtCompany.description,
//       }
//       const skillsn = jdetails.skills.map(ele => ({
//         name: ele.name,
//         skillsImgUrl: ele.image_url,
//       }))

//       console.log('skillsn', jobDetails)
//       const similarj = similarJobs.map(ele => {
//         console.log(ele, 'ele')
//         return {
//           companyLogoUrl: ele.company_logo_url,
//           employmentType: ele.employment_type,
//           id: ele.id,
//           jobDescription: ele.job_description,
//           location: ele.location,
//           title: ele.title,
//           rating: ele.rating,
//         }
//       })

//       console.log(similarj, 'kvbjhbj')
//       this.setState({
//         sj: [...similarj],
//         jd: {...jdetails},
//         lc: {...lifeAtCompanyf},
//         sk: [...skillsn],
//         isLoading: false,
//       })
//     } else {
//       this.unsuccess()
//     }
//   }

//   render() {
//     const {sj, jd, lc, sk, success, isLoading} = this.state
//     console.log('Running', sj)
//     const {
//       companyLogoUrl,
//       companyWebsite,
//       id,
//       employmentType,
//       jobDescription,
//       title,
//       rating,
//       packagePerAnnum,
//       location,
//     } = jd

//     console.log(title, location)
//     const {lifeImg, description} = lc
//     const jwtToken = Cookies.get('jwt_token')
//     if (jwtToken === undefined) {
//       return <Redirect to="/login" />
//     }
//     if (isLoading) {
//       return (
//         <div>
//           <Loader color="green" width={40} height={67} />
//         </div>
//       )
//     }

//     if (!success) {
//       return (
//         <div>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
//             alt="failure view"
//           />
//           <h1>Oops! Something Went Wrong</h1>
//           <p>We cannot seem to find the page you are looking for</p>
//           <button type="button" onClick={this.fetchDetails}>
//             Retry
//           </button>
//         </div>
//       )
//     }
//     return (
//       <div>
//         <Header />
//         <ul>
//           <img src={companyLogoUrl} alt="job details company logo" />
//           <p>{jobDescription}</p>
//           <a href={companyWebsite} target="_blank" rel="noopener noreferrer">
//             Visit
//           </a>
//           <h1>{title}</h1>
//           <img src={lifeImg} alt={id} />
//           <p>{employmentType}</p>
//           <p>{location}</p>
//           <p>{rating}</p>
//           <h1>Description</h1>
//           <h1>Life at Company</h1>
//           <p>{description}</p>
//           <p>{employmentType}</p>
//           <ul>
//             <h1>Skills</h1>
//             {sk.map(ele => (
//               <li key={ele.name}>
//                 <img src={ele.skillsImgUrl} alt={ele.name} />
//                 <p>{ele.name}</p>
//               </li>
//             ))}
//           </ul>
//           <p>{packagePerAnnum}</p>
//         </ul>
//         <ul>
//           <h1>Similar Jobs</h1>
//           {sj.map(ele => (
//             <SimilarJobs similarJobDetails={ele} key={ele.id} />
//           ))}
//         </ul>
//       </div>
//     )
//   }
// }

// export default JobItemDetails

import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {Loader} from 'react-loader-spinner'
import Header from '../Header'
import SimilarJobs from '../SimilarJobs'

class JobItemDetails extends Component {
  state = {sj: [], jd: {}, lc: {}, sk: [], success: true, isLoading: true}

  componentDidMount() {
    this.fetchDetails()
  }

  unsuccess = () => {
    this.setState({success: false})
  }

  fetchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const api = `https://apis.ccbp.in/jobs/${id}`
    const methods = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(api, methods)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        jobDetails: data.job_details,
        similarJobs: data.similar_jobs,
      }
      const {jobDetails, similarJobs} = updatedData
      const jdetails = {
        companyLogoUrl: jobDetails.company_logo_url,
        companyWebsite: jobDetails.company_website_url,
        employmentType: jobDetails.employment_type,
        id: jobDetails.id,
        jobDescription: jobDetails.job_description,
        location: jobDetails.location,
        rating: jobDetails.rating,
        title: jobDetails.title,
      }
      const locDetails = {
        city: jobDetails.location.city,
        country: jobDetails.location.country,
      }

      this.setState({
        jd: jdetails,
        lc: locDetails,
        sk: similarJobs,
        isLoading: false,
      })
    } else {
      this.unsuccess()
    }
  }

  render() {
    const {isLoading, success, jd, lc, sk, sj} = this.state
    console.log(jd, lc, sk, sj)
    if (isLoading === true) {
      return <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    }
    if (success === false) {
      return <Redirect to="/not-found" />
    }
    return (
      <div>
        <Header />
        <div>
          <SimilarJobs similarJobDetails={sk} />
        </div>
      </div>
    )
  }
}

export default JobItemDetails
