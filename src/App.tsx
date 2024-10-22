import React, { FC, useState } from 'react'
// import reactlogo from './assets/images/react.svg'
// import './assets/styles/app.css'
import './assets/styles/app.scss'

const App: FC = () => {
  const [fullname] = useState('Quoc Khanh')
  console.log(fullname)
  return (
    <div>
        hello
      {/* <img src={reactlogo} alt="React Logo" width={100} height={100} /> */}
      <h1>{fullname}</h1>
      <h2>Bài viết được viết tại blog {process.env.HOST}</h2>
    </div>
  )
}

export default App