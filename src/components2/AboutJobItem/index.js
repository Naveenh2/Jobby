import {Component} from Cookies
import Cookies from 'js-cookie'
import MdLocationOn from 'react-icons/md'
import {AiFillStar} from 'ereact-icons/ai'
import {BiLink} from 'react-icons/bi'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SimilarJobs from '../SimilarJobs'
import './index.css'
const apiStatusContacts={
    initial:'INITIAL',
    success:'SUCCESS',
    failure:'FAILURE',
    inProgress:'IN_PROGRESS'
}
 class AboutJobItem extends Component{
    state={jobDetails:[]
,similarJobData:[],
apiStatus:apiStatusContacts.initial
}
componentDidMount(){
    this.getJobData()
}
getJobData=async ()=>{
const {match}=this.props
const {params}=match;
const {id}=params
this.setState({apiStatus:apiStatusContacts.inProgress})
const jwtToken=Cookies.get('jwt_token')
const jobUrl=`${id}`
const optionsJobData={
    method:'POST',
    headers:{Authorization:`Bearer ${jwtToken}`}

}
const response=await fetch(jobUrl,optionsJobData)
if(response.ok){
    const data=await response.json()
    const updatedJobDetailsData=data.job_details.map(ele=>({
        companyLogoUrl=ele.company_logo_url,
        companyWebsiteUrl=ele.company_website_url,
        employmentType:ele.employment_type,
        id=ele.id,
        jobDescription:ele.job_description,
        lifeAtCompoany:{
            description:ele.life_at_company.description,
            imageUlr:ele.life_at_company.image_url,
        },
        location:ele.location,
        packagePerAnnum:ele.package_per_annum,
        skills:ele.skills.map(ele=>({
            imageUrl:ele.image_url,
            name:ele.name
        })),
        title:ele.tile,
    }))
    const updatedSimilarJobDetails=data.similar_jobs.map(ele=>({
         companyLogo:ele.company_logo,
         id:ele.id,
         jobDescription:ele.job_description,
         employment_type:ele.employmentType,
         location:ele.location,
         rating:ele.rating,
         title:ele.title,
    }))
    this.setState({
        apiStatus:apiStatusContacts.success,
        jobDataDetails:updatedSimilarJobDetails,
        similarJobData:updatedJobDetailsData,
    })
}else{
    this.setState({
        apiStatus:apiStatusContacts.failure,
    })
}
}
renderJobDetailsSuccessView=()=>{
    const {jobDetails,similarJobData}=this.state
    if(jobDetails.length>=1){
        const {
            companyLogoUrl,
            companyWebsiteUrl,
            employmentType,
            id,
            jobDescription,
            lifeAtCompoany,
            rating,
            skills,
            title
        }=jobDetails
        return (
            <>
            <div calssName="job-item-container">
            <div className="first-part-container">
            <img className="company_logo"
            src={companyLogoUrl}
            alt="job details company logo"/>
            <div calssName="title-rating-container">
            <h1 className="title-heading">{title}</h1>
            <AiFillStar className="sta-icon"/>
            <p className="rating-text">{rating}</p>
            </div>
            </div>
            </div>
            <div className="location-package-container">
            <div className="location-icon-location-container">
            <MdLocationOn className="location-icon"/>
            <p className="location">{location}</p>
            <div>
            <div>
            <div className="employment_type_icon-employment-type">
            <p className="job-type">{location}</p>
            </div>
            <div>
            <p className="job-type">{employmentType}</p>
            </div>
            </div>
            <div className="packlage-container">
            <p className="package">{packagePerAnnum}</p>
            </div>
            </div>
            <hr/>
            <div className="second-part-container">
            <div calssName="description-visit-container">
            <h1 className="description-visit-container">Description</h1>
            <a className="visit-anchor" href={companyWebsiteUrl}>Visit<BiLiExternal/>
             </a>
            </div>
            <p className="descriptionn-area">{jobDescription}</p>
            </div>
            <h1>Skills</h1>
            <ul calssName="ul-job-details-container">
            {skills.map(ele=>{
                <li className="li-job-details-container" key={ele.name}>
                <img className="skill-img"
                src={ele.imageUlr}
                alt={ele.name}
                />
                <p>{ele.name}</p>
                </li>
            })}
            </ul>
            <div className="company-life-img-container">
            <div className="life-heading-para-container">
            <h1>Life at Company</h1>
            <p>{lifeAtCompoany.description}</p>
            </div>
            <img src={lifeAtCompoany.imageUlr} alt="life at company"/>
            </div>
            </div>
            <h1 className="similar-jobs-heading">Similar Jobs</h1>
            <ul>{similarJobData.map(ele=>(
            <SimilarJobs key={ele.id}
            similarJobData={ele}
            employmentType={employmentType}/>
        ))}
            </ul>
            </div>
            </>
        )
    }
    return null
}
   onRetryJobDetailsAgain=()=>{
    this.getJobData()
   }
   renderJobFailureView=()=>(
    <div>
    <img src="" alt=""/>
    <h1>Oops! Something Went Wrong</h1>
    <p>we cannot seem to find the page you are looking for</p>
    <div>
    <button className="btn-container"
    type="button"
    onClick={this.onRetryJobDetailsAgain}> Retry
    </button></div>
    </div>
   )
   renderJoboadingView=()=>{
    const {apiStaus}=this.state
    switch (apiStaus){
        case apiStatusContacts.success:
        return this.renderJobDetailsView()
        case apiStatusContacts.failure:
        return this.renderJobFailureView()
        default :
        return null
    }
   }
   render(){
    return (
        <div>
        <Header/>
        <div calssName="jobdetails-view-container">
        {this.renderJobDetails()}</div>
        </div>
    )
   }
 }
 export default AboutJobItem