
import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=>  {
  let nextPage = 1;
  const apiKey = 'c1adb4d8e8c44de6a610318ad7c7e3ee'
  
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            color='#f11946'
            height={3}
            setProgress={progress}
          />
          <Routes>
          {/* <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" nextPage={nextPage} country="in" category="general"/></Route>  */}

            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="top" nextPage={nextPage} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" nextPage={nextPage} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" nextPage={nextPage} country="in" category="entertainment" />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" nextPage={nextPage} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" nextPage={nextPage} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" nextPage={nextPage} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" nextPage={nextPage} country="in" category="technology" />}></Route>

            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" nextPage={nextPage} country="in" category="general" />}></Route>

          </Routes>
        </BrowserRouter>

      </div>
    )
}

export default App
