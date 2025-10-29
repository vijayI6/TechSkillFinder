import { useState } from 'react'
import StudentSearch from './components/StudentSearch'
import Academics from './components/academics';

function App() {
  return (
    <div>
      <h1>Studnet Skill Finder </h1>
      <StudentSearch></StudentSearch>
      <Academics></Academics>

    </div>
  )
}

export default App
