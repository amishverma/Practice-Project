import React,{useState, useTransition} from "react";

import styles from "./Form.module.css";

const Form = (props) => {
const [userName,setUserName]=useState("")
const [userAge,setUserAge]=useState("")

 const nameHandler=(e)=>{
    console.log(e.target.value)
    setUserName(e.target.value)
 }
 const ageHandler=(e)=>{
    console.log(e.target.value)
    setUserAge(e.target.value)
 }

const submitHandler=(e)=>{
    e.preventDefault()
    const userData={
        name:userName,
        age:userAge
    }

    props.saveData(userData)
    setUserName("")
    setUserAge("")
}
  return (
    <form onSubmit={submitHandler}>
      <div className={styles["form-wrapper"]}>
        <div className={styles["name-wrapper"]}>
          <label className={styles.label}>
            UserName
            <input type="text" value={userName} id={styles.name} onChange={nameHandler} />
          </label>
        </div>

        <div className={styles["age-wrapper"]}>
          <label className="age">
            Age (Years old)
            <input type="number" value={userAge} id={styles.age} onChange={ageHandler} />
          </label>
        </div>
        <button type="submit" className={styles.btn}>Add user</button>
      </div>
    </form>
  );
};

export default Form;
