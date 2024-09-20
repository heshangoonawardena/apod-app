import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
// import { tailChase } from "ldrs";
import 'ldrs/tailChase'

const App = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    async function fetchAPIData () {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`
      
      const today = (new Date()).toDateString()
      const localKey = `Nasa-${today}`
      if (localStorage.getItem(localKey)) { 
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData);
        console.log(`Fetched from cache today`);
        return
      }
      localStorage.clear()
      
      try {
        const response = await fetch(url)
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log(`Fetched from API today`);
      }
      catch (error) {
        console.error(error.message);
      }
    }
    fetchAPIData();
  }, [])
  
  const [showModal, setShowModal] = useState(false)

  const handleDisplayModal = () => {
    setShowModal(!showModal)
  }
  
  return (
    <div className="box-border relative flex min-h-screen p-0 m-0 text-white bg-slate-900">
      {data ? (
        <Main data={data} />
      ) : (
        <div className="flex items-center justify-center flex-1">
            <l-tail-chase size="50" speed="1.75" color="white"></l-tail-chase>
        </div>
      )}
      {showModal && <SideBar data={data} handleDisplayModal={handleDisplayModal} />}
      <Footer data={data} handleDisplayModal={handleDisplayModal} />
    </div>
  );
};

export default App;
