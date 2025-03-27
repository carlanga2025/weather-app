import { useEffect, useState } from 'react'
import Form from './Form'
import Info from './Info'
import styles from './weather.module.css'
import Loanding from './Loanding'


const Weather = () => {

  const [weather, setWeather] = useState(null)
  useEffect(() => {
    loadInfo()
  }, [])

  useEffect(() => {
    document.title = `Weather in ${weather?.location.name}`
  },[weather])

 const REACT_APP_KEY="b606baef395b424e80934303250801"
 const REACT_APP_URL="https://api.weatherapi.com/v1/current.json?aqi=no"

  async function loadInfo(city="london") {
    try {
      const request = await fetch(`${REACT_APP_URL}&key=${REACT_APP_KEY}&q=${city}`)
      const json = await request.json()    
      
      setTimeout(() => {
      setWeather(json);
      }, 2000);

       console.log(json);  

    } catch (error) {
      console.error(error);
      
    }    
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city)
  }

  return (
  <div className={styles.weatherContainer}>
    <Form onChangeCity={handleChangeCity} />
    {weather ? <Info weather={weather} /> : <Loanding />}  
  </div>
  )
}

export default Weather