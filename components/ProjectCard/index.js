import React, {useState} from 'react'
import styles from './ProjectCard.module.scss'
import {BiWorld} from '@react-icons/all-files/bi/BiWorld'
import {AiFillGithub} from '@react-icons/all-files/ai/AiFillGithub'
import {GrHeroku} from '@react-icons/all-files/gr/GrHeroku'
import styled, { css } from 'styled-components'

 
    const Card = styled.div`
            width: 300px;
            height: 520px;
            background-color: #fff;
            border-radius: 10px;
            border-style: solid;
            border-width: 0.1px;
            border-color: rgba(153,153,153,0.6);
            display: grid;
            grid-template-rows: auto 292px;
            overflow: hidden;
            transition: 0.5s ease;
            cursor: pointer;
            position: relative;
            transition: 0.5s;
            &:hover{
                transform: scale(1.05);
                box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
            }
        `
        const Social = styled.div`
            padding: 20px;
            position: absolute;
            background-color:transparent;
            top: 200%;
            left: 0;
            height: 100%;
            width: 100%;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 0;
            transition: 0.5s;
            &.action{
                top: 0;
                background-color: rgba(0,0,0,0.9);
            }
        `
        const SocialLinks = styled.div`
            margin-top: 20px;
            width: 100%;
            padding: 10px 30px;
            display: flex; 
            justify-content: center;
            text-align: center;
        `
    // const CardBack = styled.div`

    //     width: 300px;
    //     height: 520px;
    //     border-radius: 10px;
    //     border-style: solid;
    //     border-width: 0.1px;
    //     border-color: rgba(153,153,153,0.6);
    //     display: grid;
    //     grid-template-rows: auto 292px;
    //     overflow: hidden;
    //     transition: 0.5s ease;
    //     cursor: pointer;
    //     position: relative;
    //     transition: 0.5s;
    //     background-color: rgba(0,0,0,0.5);
    //     top: ${props => (props.hasClicked ? '-520px': '0px')};
    //     &:hover{
    //         transform: scale(1.05);
    //         box-shadow: 5px 5px 15px rgba(0,0,0,0.6);
    //     }
       
    // `
    const ImageBox = styled.div`
        width: 300px;
        position: relative;
        `
    const ImageProfile = styled.img`
        position: absolute;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        `
    const Bottom = styled.div`
        display: grid;
        justify-content: center;
        align-content: center;
        text-align: center;
        width: 300px;
        position: relative;
        background: linear-gradient(45deg, #bd8ca9 0%, #7930ee 100%);
        `
    const Title = styled.div`
        font-size: 26px;
        font-weight: bold;
        font-family: 'Abel', sans-serif;
        color: #fff;
    `
    const Description = styled.div`
        font-size: 1em;
        padding: 10px;
        color: #fff;
        font-family: 'Abel', sans-serif;
    `
    const TestText = styled.div`
        color: #fff;
        &.clicked{
            color: #9d93fe;
        }
    `
    const Button = styled.button`
        position: absolute;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
    `

    const HerokuLink = styled.div`
        fontSize: 2.3em;
        & + & {
            fontSize: 2.3em;
        }
    `
export default function ProjectCard(props) {
    const [isActive, setActive] = useState(false)
    const [clicked, setClicked] = useState(true)
    const active ={
        backgroundColor: 'rgba(0,0,0,0.5)'
    }

    return (
        <>

        <Card onClick={()=>setClicked(!clicked)}>        
        <Button onClick={()=>setClicked(!clicked)}>click</Button>
                <ImageBox >
                    <ImageProfile alt={props.altsource} src={props.imagesource} />
                </ImageBox>
                <Bottom>
                    <Title>
                        {props.title}
                    </Title>
                    {/* <TestText className={clicked ? 'clicked': ''} hasClicked={!clicked}>
                        test
                    </TestText> */}
                    <Description>
                        {props.description}
                    </Description>
                </Bottom>
                <Social className={clicked ? 'Social': 'Social action'}>
                    <p>Feel free to take a closer look: </p>
                    <SocialLinks>
                    {props.webLink ? <a href={props.webLink} target='_blank' rel="noopener noreferrer"><BiWorld/></a>:''}
                    {props.githubLink ? <a href={props.githubLink} target='_blank' rel="noopener noreferrer"><AiFillGithub/></a>:''}
                    {props.herokuLink ? <a href={props.herokuLink} target='_blank' rel="noopener noreferrer"><HerokuLink><GrHeroku/></HerokuLink></a>:''}
                    </SocialLinks>
                </Social>
        </Card>
               



  
                 
           
        
            

            {/* <div onClick={()=>setActive(!active)}  className={active ? 'card active' : 'card'}>
                <div className={styles.imagebox}>
                    <img className={styles.imageprofile} alt={props.altsource} src={props.imagesource} />
                </div>
                <div className={styles.bottom}>
                    <div className={active ? "styles.btnclose" : "styles.btn"}>
                        <span>{active ? 'Close': 'More'}</span>
                    </div>
                    <div className={styles.title}>{props.title}</div>
                    <div className={styles.description}>{props.description}</div>
                </div>
                <div className={styles.social}>
                    <div className="closer-text">Feel free to take a closer look:
                        <span className="social-links">
                            {props.webLink ? <div className={styles.links} href={props.weblink} target='_blank' rel="noopener noreferrer" style={{fontSize: '2.7em', color: '#fff', marginLeft: '15px', marginRight: '15px'}}><BiWorld/></div>:''}
                            {props.githubLink ? <div className={styles.links} href={props.githublink} target="_blank"  rel="noopener noreferrer" style={{fontSize: '2.5em', color: '#fff', marginLeft: '15px', marginRight: '15px'}} ><AiFillGithub /></div>:''}
                            {props.herokuLink ? <div className={styles.links} href={props.herokulink} target="_blank" rel="noopener noreferrer" style={{ marginTop: '3px', marginLeft: '15px', marginRight: '15px', fontSize: '2.3em', color: '#fff'}}><GrHeroku /></div>:''}
                        </span>
                    </div>
                </div>
            </div> */}
    
            </>
    )
}
    