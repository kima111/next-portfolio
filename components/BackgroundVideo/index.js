import React from 'react'
// import MainVideo from '/assets/videos/Seattle4.mp4'

export default function index(props) {
    return (
        <div>
                  <div>
            <video autoPlay muted loop style={{ position: 'absolute', top: '0', left: '0', width: '100vw'}}>
            <source src="/assets/videos/Seattle4.mp4" type="video/mp4" />
            </video>
            {props.children}
            </div>
        </div>
    )
}
