import './App.css';
import React,{useState}from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

const App=()=>{
  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)

    return (
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <div>
          <Routes>
            <Route exact path="/General" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key={'general'} country="in" category={'general'} />}></Route>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key={'general'} country="in" category={'general'} />}></Route>
            <Route exact path="/Business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key={'business'} country="in" category={'business'} />}></Route>
            <Route exact path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key={'entertainment'} country="in" category={'entertainment'} />}></Route>
            <Route exact path="/Health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key={'health'} country="in" category={'health'} />}></Route>
            <Route exact path="/Science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key={'science'} country="in" category={'science'} />}></Route>
            <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key={'sports'} country="in" category={'sports'} />}></Route>
            <Route exact path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key={'technology'} country="in" category={'technology'} />}></Route>
          </Routes>

        </div>
      </Router>
    )
}

export default App;