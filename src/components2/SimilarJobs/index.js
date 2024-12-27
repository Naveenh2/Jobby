// const SimilarJobs = props => {
//   const {similarJobDetails} = props

//   const {
//     employmentType,
//     id,
//     jobDescription,
//     title,
//     rating,
//     location,
//     companyLogoUrl,
//   } = similarJobDetails
//   return (
//     <div className="container4">
//       <h1>Description</h1>
//       <img src={companyLogoUrl} alt={id} />
//       <p>{location}</p>
//       <h1>{title}</h1>
//       <p>{rating}</p>
//       <p>{jobDescription}</p>
//       <p>{employmentType}</p>
//     </div>
//   )
// }
// export default SimilarJobs

import './index.css'

const SimilarJobs = props => {
  const {similarJobDetails} = props

  const {
    employmentType,
    id,
    jobDescription,
    title,
    rating,
    location,
    companyLogoUrl,
  } = similarJobDetails
  return (
    <div className='container4'>
      <h1>Description</h1>
      <img src={companyLogoUrl} alt={id} />
      <p>{location}</p>
      <h1>{title}</h1>
      <p>{rating}</p>
      <p>{jobDescription}</p>
      <p>{employmentType}</p>
    </div>
  )
}

export default SimilarJobs
