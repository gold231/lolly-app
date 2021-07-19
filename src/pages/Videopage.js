import Profile from "../assets/img/Profile.png"
import Appstore from "../assets/img/appstore.png"
import Heart from "../assets/img/heart.png"
import "../assets/styles/_videopage.scss"

function Videopage() {
  return (
    <div className="page">
      <div className="content">
        <div className="video">
          <a href="https://dms.licdn.com/playlist/C4D05AQGgNu1BmGvRwA/mp4-720p-30fp-crf28/0/1625659345852?e=1626645600&v=beta&t=1bDPMyUabNwXIQCX6uZ5FboiY8tRQI-9NZMEVoZvj1s">
            <video
              id="vid"
              width="320"
              height="240"
              autoPlay="autoPlay"
              loop="loop"
            >
              <source
                src="https://dms.licdn.com/playlist/C4D05AQGgNu1BmGvRwA/mp4-720p-30fp-crf28/0/1625659345852?e=1626645600&v=beta&t=1bDPMyUabNwXIQCX6uZ5FboiY8tRQI-9NZMEVoZvj1s"
                type="video/mp4"
              />
            </video>
          </a>
          <div className="bottommark">
            <img className="avatar" src={Profile} />
            <div className="userinfo">
              <h4>Kalani | 19 | Los Angeles, CA</h4>
              <p>Beatiful day! #gorgeous</p>
            </div>
            <img className="heart" src={Heart} />
          </div>
        </div>

        <div className="user">
          <img className="avatar" src={Profile} />
          <p>Kalani is on Lolly</p>
          <a href="https://apps.apple.com/us/app/lolly/id1525109653">
            <img className="storeimg" src={Appstore} />
          </a>
        </div>
      </div>
      <div className="mobile">
        <div className="userinfo">
          <img className="avatar" src={Profile} />
          <span className="username">Kalani is on Lolly</span>
          <a href="https://apps.apple.com/us/app/lolly/id1525109653">
            Open app
          </a>
        </div>
        <div className="video">
          <a href="https://dms.licdn.com/playlist/C4D05AQGgNu1BmGvRwA/mp4-720p-30fp-crf28/0/1625659345852?e=1626645600&v=beta&t=1bDPMyUabNwXIQCX6uZ5FboiY8tRQI-9NZMEVoZvj1s">
            <video
              id="vid"
              width="320"
              height="240"
              autoPlay="autoPlay"
              loop="loop"
            >
              <source
                src="https://dms.licdn.com/playlist/C4D05AQGgNu1BmGvRwA/mp4-720p-30fp-crf28/0/1625659345852?e=1626645600&v=beta&t=1bDPMyUabNwXIQCX6uZ5FboiY8tRQI-9NZMEVoZvj1s"
                type="video/mp4"
              />
            </video>
          </a>
          <div className="bottommark">
            <img className="avatar" src={Profile} />
            <div className="userinfo">
              <h4>Kalani | 19 | Los Angeles, CA</h4>
              <p>Beatiful day! #gorgeous</p>
            </div>
            <img className="heart" src={Heart} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videopage
