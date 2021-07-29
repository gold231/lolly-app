import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import Appstore from '../assets/img/appstore.png';
import Heart from '../assets/img/heart.png';
import Play from '../assets/img/play.png';
import '../assets/styles/_videopage.scss';

import axios from 'axios';

const detail = {
  firstName: '',
  dateOfBirth: '',
  profilePicture: '',
  location: '',
  bio: '',
  cloudflareId: '',
  videoWidth: '',
  videoHeight: '',
};

function Videopage() {
  let { id } = useParams();
  const [data, setData] = useState(detail);
  const [videoURL, setVideoURL] = useState('');
  const [age, setAge] = useState('');

  const [flag, setFlag] = useState(0);
  const [playFlag, setPlayFlag] = useState(false);
  const [playFlag2, setPlayFlag2] = useState(false);

  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  useEffect(() => {
    let headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': '*',
    };
    axios
      .get(`https://api.thelollyapp.com/v1/public/videos/${id}`, {
        headers: headers,
      })
      .then((res) => {
        setFlag(1);
        let arr = {
          firstName: res.data.data.user.firstName,
          dateOfBirth: res.data.data.user.dateOfBirth,
          profilePicture: res.data.data.user.profilePicture,
          location: res.data.data.user.location || 'No Location',
          caption: res.data.data.caption,
          cloudflareId: res.data.data.cloudflareId,
          videoWidth: res.data.data.videoWidth,
          videoHeight: res.data.data.videoHeight,
        };
        console.log(arr);
        setData(arr);
        setVideoURL(
          `https://videodelivery.net/${res.data.data.cloudflareId}/downloads/default.mp4`
        );
        let birthYear = new Date(
          res.data.data.user.dateOfBirth * 1000
        ).getFullYear();
        let nowYear = new Date().getFullYear();
        setAge(nowYear - birthYear);
      })
      .catch((error) => {
        console.log(error);
        setFlag(2);
      });
  }, [id]);

  useEffect(() => {
    console.log('data====', data);
  }, [data]);

  const videoAct = (event) => {
    console.log('Video Act');
    //desktop
    let videoElement = videoRef.current;
    if (!videoElement.paused) {
      videoElement.pause();
      setPlayFlag(true);
    } else {
      videoElement.play();
      setPlayFlag(false);
    }

    //mobile
    let videoElement2 = videoRef2.current;
    if (!videoElement2.paused) {
      videoElement2.pause();
      setPlayFlag2(true);
    } else {
      videoElement2.play();
      setPlayFlag2(false);
    }
  };

  const handleVideoClick = (e) => {
    if (!e.target.paused) {
      console.log('Pausing');
      e.target.pause();
      setPlayFlag(true);
      setPlayFlag2(true);
    } else {
      console.log('Playing');
      e.target.play();
      setPlayFlag(false);
      setPlayFlag2(false);
    }
  };

  return (
    <div className='page'>
      {flag === 1 && (
        <>
          <div className='content'>
            <div className='video'>
              <video
                id='vid'
                // width='320'
                width={data.videoWidth}
                height='240'
                // height={data.videoHeight}
                autoPlay='autoPlay'
                loop='loop'
                key={videoURL}
                ref={videoRef}
                onClick={handleVideoClick}
              >
                <source src={videoURL} type='video/mp4' />
              </video>
              {playFlag && (
                <div className='play' onClick={(e) => videoAct(e)}>
                  <img src={Play} alt='play' width='50' />
                </div>
              )}
              <div className={`video-footer`}>
                <div className='video-footer-left'>
                  <img src={data.profilePicture} alt='avatar' />
                  <div className='userinfo'>
                    <h4>
                      {data.firstName} | {age} | {data.location}
                    </h4>
                    <p>{data.caption}</p>
                  </div>
                </div>
                <div className='video-footer-right'>
                  <img className='heart' src={Heart} alt='heart' />
                </div>
              </div>

              {/* <div class='video-footer'>
                <div class='row'>
                  <div class='col-md-2' style={{ border: '1px solid white' }}>
                    <img
                      src={data.profilePicture}
                      alt='avatar'
                      style={{ width: '50px' }}
                    />
                  </div>
                  <div class='col-md-8' style={{ border: '1px solid white' }}>
                    <h4>
                      {data.firstName} | {age} | {data.location}
                    </h4>
                    <p>{data.caption}</p>
                  </div>
                  <div class='col-md-2' style={{ border: '1px solid white' }}>
                    {' '}
                    <img src={Heart} alt='avatar' style={{ width: '50px' }} />
                  </div>
                </div>
              </div> */}
              {/* <div className='bottommark'>
                <img
                  className='avatar'
                  src={data.profilePicture}
                  alt='avatar'
                />
                <div className='userinfo'>
                  <h4>
                    {data.firstName} | {age} | {data.location}
                  </h4>
                  <p>{data.caption}</p>
                </div>
                <img className='heart' src={Heart} alt='heart' />
              </div> */}
            </div>

            <div className='user'>
              <img className='avatar' src={data.profilePicture} alt='avatar' />
              <p>{data.firstName} is on Lolly</p>
              <a href='https://apps.apple.com/us/app/lolly/id1525109653'>
                <img className='storeimg' src={Appstore} alt='appstore' />
              </a>
            </div>
          </div>

          <div className='mobile'>
            <div className='userinfo'>
              <img className='avatar' src={data.profilePicture} alt='avatar' />
              <span className='username'>{data.firstName} is on Lolly</span>
              <a href='https://apps.apple.com/us/app/lolly/id1525109653'>
                Open app
              </a>
            </div>
            <div className='video'>
              <video
                id='vid'
                width='320'
                width={data.videoWidth}
                height='240'
                // height={data.videoHeight}
                autoPlay='autoPlay'
                loop='loop'
                key={videoURL}
                ref={videoRef2}
                onClick={handleVideoClick}
              >
                <source src={videoURL} type='video/mp4' />
              </video>
              {playFlag2 && (
                <div className='play' onClick={(e) => videoAct(e)}>
                  <img src={Play} alt='play' width='50' />
                </div>
              )}
              <div className='video-footer'>
                <div className='video-footer-left'>
                  <img src={data.profilePicture} alt='avatar' />
                  <div className='userinfo'>
                    <h4>
                      {data.firstName} | {age} | {data.location}
                    </h4>
                    <p>{data.caption}</p>
                  </div>
                </div>
                <div className='video-footer-right'>
                  <img className='heart' src={Heart} alt='heart' />
                </div>
              </div>
              {/* <div className='bottommark'>
                <img
                  className='avatar'
                  src={data.profilePicture}
                  alt='avatar'
                />
                <div className='userinfo'>
                  <h4>
                    {data.firstName} | {age} | {data.location}
                  </h4>
                  <p>{data.caption}</p>
                </div>
                <img className='heart' src={Heart} alt='heart' />
              </div> */}
            </div>
          </div>
        </>
      )}
      {flag === 2 && (
        <div>
          <div className='pt-5'>
            <div className='flex-grow'>
              <div className='mx-auto text-white'>
                <div className='align-items-center d-flex flex-row'>
                  <div className='col-lg-6 error-page-divider text-lg-left pl-lg-4'>
                    <h2>SORRY!</h2>
                    <h3 className='font-weight-dark' style={{ color: 'black' }}>
                      The page you’re looking for was not found.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Videopage;
