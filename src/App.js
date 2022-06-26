import React, { useState } from "react";
import Form from "./Components/Users/Form";
import Modal from "./Components/Users/Modal";
import ShowUser from "./Components/Users/ShowUser";


const App = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const userData = (user) => {
    if (user.age < 0 || user.name === "" || user.age === "") {
      return   setShowModal(true);
    }
    setData((prevData) => {
      return [user, ...prevData];
    });
  };


  const closeModal=(el)=>{
    console.log(el)
   setShowModal(false)
  }
  return (
    <>
      <h1>Practice project</h1>
      <Form saveData={userData}></Form>
      <ShowUser items={data}></ShowUser>
      {showModal && <Modal modalValue={closeModal}  ></Modal>}

    </>
  );
};

export default App;
