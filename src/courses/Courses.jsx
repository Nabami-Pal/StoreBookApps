import React from 'react'
import Navber from '../components/Navber'
import Footer from '../components/Footer'
import Course from '../components/Course'
function Courses() {
  return (
    <div>
      <Navber />
      <div className='min-h-screen'>
      <Course />

      </div>
      <Footer />
    </div>
  )
}

export default Courses
