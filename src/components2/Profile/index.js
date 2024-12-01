// import {Component} from 'react'

// import {Redirect} from 'react-router-dom'

// import Cookies from 'js-cookie'

// import Loader from 'react-loader-spinner'

// import './index.css'

// class Profile extends Component {
//   state = {failed: false, updatedProfile: {}, isLoading: true}

//   componentDidMount() {
//     this.profiledata()
//   }

//   onFailure = () => {
//     this.setState({failed: true})
//   }

//   profiledata = async () => {
//     const jwtToken = Cookies.get('jwt_token')

//     const methods = {
//       method: 'GET',

//       headers: {
//         Authorization: `Bearer ${jwtToken}`,
//       },
//     }

//     const response = await fetch('https://apis.ccbp.in/profile', methods)

//     if (response.ok) {
//       const data = await response.json() // Extract the data here
//       const updatedProfile1 = {
//         profileImgUrl: data.profile_details.profile_image_url,
//         shortBio: data.profile_details.short_bio,
//         name: data.profile_details.name,
//       }
//       console.log(updatedProfile1, '.....')
//       this.setState({updatedProfile: updatedProfile1, isLoading: false})

//       console.log(data, 'profile')
//     } else {
//       this.onFailure()
//     }
//   }

//   render() {
//     const {updatedProfile, isLoading, failed} = this.state
//     const {profileImgUrl, shortBio, name} = updatedProfile
//     const jwtToken = Cookies.get('jwt_token')
//     if (jwtToken === undefined) {
//       return <Redirect to="/login" />
//     }
//     if (isLoading) {
//       return (
//         <div data-testid="loader">
//           <Loader color="green" type="ThreeDots" height={50} width={55} />
//         </div>
//       )
//     }
//     if (failed) {
//       return (
//         <div>
//           <button type="button" onClick={this.profiledata}>
//             Retry
//           </button>
//         </div>
//       )
//     }
//     return (
//       <div className="profile">
//         <img src={profileImgUrl} alt="profile" />
//         <h1>{name}</h1>
//         <p>{shortBio}</p>
//       </div>
//     )
//   }
// }
// export default Profile

import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import './index.css'

class Profile extends Component {
  state = {failed: false, updatedProfile: {}, isLoading: true}

  componentDidMount() {
    this.profiledata()
  }

  onFailure = () => {
    this.setState({failed: true})
  }

  profiledata = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const methods = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch('https://apis.ccbp.in/profile', methods)

    if (response.ok) {
      const data = await response.json()
      const updatedProfile1 = {
        profileImgUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
        name: data.profile_details.name,
      }
      this.setState({updatedProfile: updatedProfile1, isLoading: false})
    } else {
      this.onFailure()
    }
  }

  render() {
    const {updatedProfile, isLoading, failed} = this.state
    const {profileImgUrl, shortBio, name} = updatedProfile
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    if (isLoading) {
      return (
        <div data-testid="loader">
          <Loader color="green" type="ThreeDots" height={50} width={55} />
        </div>
      )
    }
    if (failed) {
      return (
        <div>
          <button type="button" onClick={this.profiledata}>
            Retry
          </button>
        </div>
      )
    }
    return (
      <div className="profile">
        <img src={profileImgUrl} alt="profile" />
        <h1>{name}</h1>
        <p>{shortBio}</p>
      </div>
    )
  }
}

export default Profile
