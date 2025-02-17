// import './App.css'

// import {Switch, Route} from 'react-router-dom'

// import LoginForm from './components/LoginForm'

// import Jobs from './components/Jobs'

// import Home from './components/Home'

// import NotFound from './components/NotFound'

// import JobItemDetails from './components/JobItemDetails'

// // These are the lists used in the application. You can move them to any component needed.
// const employmentTypesList = [
//   {
//     label: 'Full Time',
//     employmentTypeId: 'FULLTIME',
//   },
//   {
//     label: 'Part Time',
//     employmentTypeId: 'PARTTIME',
//   },
//   {
//     label: 'Freelance',
//     employmentTypeId: 'FREELANCE',
//   },
//   {
//     label: 'Internship',
//     employmentTypeId: 'INTERNSHIP',
//   },
// ]

// const salaryRangesList = [
//   {
//     salaryRangeId: '1000000',
//     label: '10 LPA and above',
//   },
//   {
//     salaryRangeId: '2000000',
//     label: '20 LPA and above',
//   },
//   {
//     salaryRangeId: '3000000',
//     label: '30 LPA and above',
//   },
//   {
//     salaryRangeId: '4000000',
//     label: '40 LPA and above',
//   },
// ]
// const App = () => (
//   <>
//     <Switch>
//       <Route exact path="/login" component={LoginForm} />
//       <Route exact path="/" component={Home} />
//       <Route
//         exact
//         path="/jobs"
//         render={props => (
//           <Jobs
//             {...props}
//             employmentTypesList={employmentTypesList}
//             salaryRangesList={salaryRangesList}
//           />
//         )}
// //       />
// //       <Route exact path="/jobs/:id" component={JobItemDetails} />
// //       <Route component={NotFound} />
// //     </Switch>
// //   </>
// // )
// // export default App
// import './App.css'
// import {Switch, Route} from 'react-router-dom'
// import LoginForm from './components/LoginForm'
// import Jobs from './components/Jobs'
// import Home from './components/Home'
// import NotFound from './components/NotFound'
// import JobItemDetails from './components/JobItemDetails'

// // These are the lists used in the application. You can move them to any component needed.
// const employmentTypesList = [
//   {label: 'Full Time', employmentTypeId: 'FULLTIME'},
//   {label: 'Part Time', employmentTypeId: 'PARTTIME'},
//   {label: 'Freelance', employmentTypeId: 'FREELANCE'},
//   {label: 'Internship', employmentTypeId: 'INTERNSHIP'},
// ]

// const salaryRangesList = [
//   {salaryRangeId: '1000000', label: '10 LPA and above'},
//   {salaryRangeId: '2000000', label: '20 LPA and above'},
//   {salaryRangeId: '3000000', label: '30 LPA and above'},
//   {salaryRangeId: '4000000', label: '40 LPA and above'},
// ]

// const App = () => (
//   <>
//     <Switch>
//       <Route exact path="/login" component={LoginForm} />
//       <Route exact path="/" component={Home} />
//       <Route
//         exact
//         path="/jobs"
//         render={props => (
//           <Jobs
//             {...props}
//             employmentTypesList={employmentTypesList}
//             salaryRangesList={salaryRangesList}
//           />
//         )}
//       />
//       <Route exact path="/jobs/:id" component={JobItemDetails} />
//       <Route component={NotFound} />
//     </Switch>
//   </>
// )

// export default App

import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Jobs from './components/Jobs'
import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/jobs" component={Jobs} />
        <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App
