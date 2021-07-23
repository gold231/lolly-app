import { useState, useEffect } from "react"
import Profile from "../assets/img/Profile.png"
import Appstore from "../assets/img/appstore.png"
import Heart from "../assets/img/heart.png"
import "../assets/styles/_videopage.scss"

import axios from "axios"

const detail = {
  firstName: "",
  dateOfBirth: "",
  profilePicture: "",
  location: "",
  bio: "",
  cloudflareId: "",
  videoWidth: "",
  videoHeight: ""
}

function Videopage() {
  const [data, setData] = useState(detail)
  const [videoURL, setVideoURL] = useState("")
  const [age, setAge] = useState("")

  useEffect(() => {
    let headers = {
      "content-type": "application/json",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*"
    }
    axios
      .get(
        "https://api.thelollyapp.com/v1/public/videos/60f21afa31d346000e60111a",
        { headers: headers }
      )
      .then((res) => {
        console.log(res)
        let arr = {
          firstName: res.data.data.user.firstName,
          dateOfBirth: res.data.data.user.dateOfBirth,
          profilePicture: res.data.data.user.profilePicture,
          location: res.data.data.user.location,
          bio: res.data.data.user.bio,
          cloudflareId: res.data.data.cloudflareId,
          videoWidth: res.data.data.videoWidth,
          videoHeight: res.data.data.videoHeight
        }
        setData(arr)
        setVideoURL(
          `https://videodelivery.net/${res.data.data.cloudflareId}/downloads/default.mp4`
        )
        let birthYear = new Date(res.data.data.user.dateOfBirth).getFullYear()
        let nowYear = new Date().getFullYear()
        setAge(nowYear - birthYear)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className="page">
      <div className="content">
        <div className="video">
          <a href={videoURL}>
            <video
              id="vid"
              width="320"
              height="240"
              autoPlay="autoPlay"
              loop="loop"
              key={videoURL}
            >
              <source src={videoURL} type="video/mp4" />
            </video>
          </a>
          <div className="bottommark">
            <img className="avatar" src={data.profilePicture} alt="avatar" />
            <div className="userinfo">
              <h4>
                {data.firstName} | {age} | {data.location}
              </h4>
              <p>{data.bio}</p>
            </div>
            <img className="heart" src={Heart} alt="heart" />
          </div>
        </div>

        <div className="user">
          <img className="avatar" src={data.profilePicture} alt="avatar" />
          <p>{data.firstName} is on Lolly</p>
          <a href="https://apps.apple.com/us/app/lolly/id1525109653">
            <img className="storeimg" src={Appstore} alt="appstore" />
          </a>
        </div>
      </div>
      <div className="mobile">
        <div className="userinfo">
          <img className="avatar" src={data.profilePicture} alt="avatar" />
          <span className="username">{data.firstName} is on Lolly</span>
          <a href="https://apps.apple.com/us/app/lolly/id1525109653">
            Open app
          </a>
        </div>
        <div className="video">
          <a href={videoURL}>
            <video
              id="vid"
              width="320"
              height="240"
              autoPlay="autoPlay"
              loop="loop"
              key={videoURL}
            >
              <source src={videoURL} type="video/mp4" />
            </video>
          </a>
          <div className="bottommark">
            <img className="avatar" src={data.profilePicture} alt="avatar" />
            <div className="userinfo">
              <h4>
                {data.firstName} | {age} | {data.location}
              </h4>
              <p>{data.bio}</p>
            </div>
            <img className="heart" src={Heart} alt="heart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videopage
