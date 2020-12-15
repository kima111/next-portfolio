import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <img width="200" height="200" src='/assets/images/profile.png'/>
      <Image width="200" height="200" src='/assets/images/profile.png'/>
    </>
  )
}
