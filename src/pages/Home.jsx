import React from 'react'
import Hero from '../components/Hero'
import Review from '../components/Review'
import Features from '../components/Features'
export default function Home() {

  const featureData = [
    { title: "Feature 1", content: "Description of feature 1." },
    { title: "Feature 2", content: "Description of feature 2." },
    { title: "Feature 3", content: "Description of feature 3." },
];


  return (
    <>
      <Hero />
     <Features/>
      <Review/>
    </>
  )
}
