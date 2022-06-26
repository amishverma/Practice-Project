import React from 'react'

import styles from "./Modal.module.css"
const Modal = (props) => {
    const clickHandler=(e)=>{
      props.modalValue(e.target.value)
      return e
    }
  return (
    <div className={styles.modal}>
      <div className={styles['modal-wrapper']}>
        <h3 className={styles.input}>Input invalid</h3>
        <p>Please enter the correct value. Check the usernme or age value or if age is not less than 0</p>
        <button onClick={clickHandler} className={styles.btn}>Cancel</button>
        </div>
      </div>
    
  )
}


export default Modal