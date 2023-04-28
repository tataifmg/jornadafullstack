import React, {useRef, useState} from 'react'
import VideoFooter from './components/footer/VideoFooter'
import VideoSideBar from './components/sidebar/VideoSideBar'
import "./Video.css"

function Video({likes, messages, shares, name, description, music, url }) {

    const videoRef = useRef(null) 
    const [play, setPlay]= useState(false)

    function handdleStart(){

        if(!play){
            videoRef.current.play()
            setPlay(true)
        }else{
            videoRef.current.pause()
            setPlay(false)
        }
    }

    return (
        <div className='video'> 
            <video className='video_player'
                ref={videoRef}
                onClick={handdleStart}
                loop
                src= {url}>
            </video>
            <VideoSideBar likes={likes} messages={messages} shares={shares}/>
            <VideoFooter name={name} description={description} music={music}/>
        </div>
    )
}

export default Video