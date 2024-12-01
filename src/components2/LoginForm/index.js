// // import {Component} from 'react'

// // import Cookies from 'js-cookie'

// // class LoginForm extends Component {
// //   state = {password: '', username: '', err: '', isErr: false}

// //   onSuccess = jwtToken => {
// //     Cookies.set('jwt_token', jwtToken, {expires: 3})
// //     const {history} = this.props
// //     history.push('/')
// //   }

// //   onFailure = err => {
// //     this.setState({err, isErr: true})
// //   }

// //   formSubmitted = async e => {
// //     e.preventDefault()
// //     const {username, password} = this.state
// //     const userDetails = {username, password}
// //     const options = {
// //       method: 'POST',
// //       body: JSON.stringify(userDetails),
// //     }
// //     const response = await fetch(`https://apis.ccbp.in/login`, options)
// //     const data = await response.json()
// //     if (response.ok) {
// //       this.onSuccess(data.jwt_token)
// //       console.log(data.jwt_token)
// //     } else {
// //       this.onFailure(data.err_msg)
// //       console.log(data.err_msg)
// //     }
// //   }

// //   password = e => {
// //     this.setState({password: e.target.value})
// //   }

// //   username = e => {
// //     this.setState({username: e.target.value})
// //   }

// //   render() {
// //     const {password, username, err, isErr} = this.state
// //     console.log('Running')

// //     return (
// //       <div className="container">
// //         <form className="form" onSubmit={this.formSubmitted}>
// //           <img
// //             src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
// //             alt="website logo"
// //           />
// //           <label htmlFor="username">USERNAME</label>
// //           <input
// //             type="text"
// //             value={username}
// //             id="username"
// //             onChange={this.username}
// //           />
// //           <label htmlFor="password">PASSWORD</label>
// //           <input
// //             type="password"
// //             value={password}
// //             id="password"
// //             onChange={this.password}
// //           />
// //           <button type="submit" className="blue">
// //             Login
// //           </button>
// //           {isErr && <p>{err}</p>}
// //         </form>
// //       </div>
// //     )
// //   }
// // }
// // export default LoginForm
// // src/components/Login/index.js

// import {Component} from 'react'

// import Cookies from 'js-cookie'

// import {Redirect} from 'react-router-dom'

// import './index.css'

// class Login extends Component {
//   state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

//   onChangeUsername = event => {
//     this.setState({username: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({password: event.target.value})
//   }

//   onSubmitSuccess = jwtToken => {
//     Cookies.set('jwt_token', jwtToken, {expires: 30})
//     const {history} = this.props
//     history.replace('/')
//   }

//   onSubmitFailure = errorMsg => {
//     this.setState({showSubmitError: true, errorMsg})
//   }

//   submitForm = async event => {
//     event.preventDefault()
//     const {username, password} = this.state
//     const userDetails = {username, password}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     if (response.ok === true) {
//       this.onSubmitSuccess(data.jwt_token)
//     } else {
//       this.onSubmitFailure(data.error_msg)
//     }
//   }

//   render() {
//     const {username, password, showSubmitError, errorMsg} = this.state
//     const jwtToken = Cookies.get('jwt_token')
//     if (jwtToken !== undefined) {
//       return <Redirect to="/" />
//     }
//     return (
//       <div className="container">
//         <form className="form" onSubmit={this.submitForm}>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
//             alt="website logo"
//             className="image"
//           />
//           <h1 className="login-heading">Login</h1>
//           <div className="input-container">
//             <label className="input-label" htmlFor="username">
//               USERNAME
//             </label>
//             <br />
//             <input
//               type="text"
//               id="username"
//               className="input"
//               value={username}
//               onChange={this.onChangeUsername}
//               placeholder="Username"
//             />
//             <br />
//           </div>
//           <div className="input-container">
//             <label className="input-label" htmlFor="password">
//               PASSWORD
//             </label>
//             <br />
//             <input
//               type="password"
//               id="password"
//               className="input"
//               value={password}
//               onChange={this.onChangePassword}
//               placeholder="Password"
//             />
//             <br />
//           </div>
//           {showSubmitError && <p className="error-message">*{errorMsg}</p>}
//           <button type="submit" className="button">
//             Login
//           </button>
//         </form>
//       </div>
//     )
//   }
// }

// export default Login

import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class Login extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="container">
        <form className="form" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="image"
          />
          <h1 className="login-heading">Login</h1>
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <br />
            <input
              type="text"
              id="username"
              className="input"
              value={username}
              onChange={this.onChangeUsername}
              placeholder="Username"
            />
            <br />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <br />
            <input
              type="password"
              id="password"
              className="input"
              value={password}
              onChange={this.onChangePassword}
              placeholder="Password"
            />
            <br />
          </div>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
