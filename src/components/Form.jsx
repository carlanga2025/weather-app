import { useState } from "react"
import styles from "./form.module.css"

const Form = ({onChangeCity}) => {

  const [city, setCity] = useState("")
  function onChange(e) {
    const value = e.target.value;
    if (value !== "")
    setCity(value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onChangeCity(city)

  }


  return (
    <form onSubmit={handleSubmit} className={styles.contenedor}>
      <input type="text" onChange={onChange} className={styles.input}/>
    </form>
  )
}

export default Form