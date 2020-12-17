
import Image from 'next/image'
import HeroVideo from '../components/BackgroundVideo/index.js'
import ProjectCard from '../components/ProjectCard/index.js'
import styled from 'styled-components'



const Wrap = styled.div`
    position: absolute;
    left: 74vw;
    top: 33.2vw;
    width: 25vw;
`
const VideoWrap = styled.div`
    position: relative;
`

const PImage = styled(Image)`
    width: 25vw;
`

export default function Home() {
  
  return (
    <>
    <VideoWrap><HeroVideo /></VideoWrap>
    <p className="paragraph-header">Hello, and welcome to my site</p>
     <p className="profile-description">
                I am a Full Stack Web Developer in the Seattle area who enjoys working both on front end design, and back end architecture. I have come to a great appreciation for all the aspects
                that go into designing and developing a website. Whether it's making sure the user has a wonderful experience, or implementing effective algorithms, to optimizing database architecures,
                I believe the greatest products merge both the arts and sciences. This is why I have invested myself into pursuing and acclimating to greater heights within both fields,
                or in other words, the entire stack.
            </p><p className="profile-description">hello</p>
      <img style={{position: 'absolute', left: '74vw', top:'33.2vw', width: '25vw'}} src='/assets/images/profile.png'/>
      {/* <Image width="300" height="300" src='/assets/images/profile.png'/> */}
      <ProjectCard altsource="Care Hawaii Project Image" imagesource='/assets/images/Projects/Care_Hawaii.PNG' herokuLink="https://care-hawaii.herokuapp.com/" title="Care Hawaii" description="Created a website for Care Hawaii. Care Hawaii is an organization that helps provide outpatient mental health services to Hawaii's children, adolescents and adults. Created as a full stack application that works with other providers."/>
    </>
  )
}
