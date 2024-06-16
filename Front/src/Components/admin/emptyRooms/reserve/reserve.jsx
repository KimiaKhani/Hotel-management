import React from "react";
import TextInput from "./TextInput"; 
import axios from 'axios';
import { useState } from "react";

const INPUTS = [
  { label: "first name", placeholder: "first name", name: "first_name", className: "col-12 col-md-12" },
  { label: "last name", placeholder: "last name", name: "last_name", className: "col-12 col-md-12" },
  { label: "check in", placeholder: "check in", name: "check_in", className: "col-12 col-md-12" ,type: "date" },
  { label: "check out", placeholder: "check out", name: "check_out", className: "col-12 col-md-12",type: "date" },
  { label: "phone number", placeholder: "phone number", name: "email", className: "col-12 col-md-12" },
  {
    label: "National Code",
    placeholder: "National Code",
    name: "meli_code",
    className: "col-12 col-md-12", 

  },
];



const ReserveForm = ({id}) => {

  const [showAlert, setShowAlert] = useState(false)
  const [formData, setFormData] = useState({
    "room_id": id,
    "check_in": "2024-06-15T23:05:26.078Z",
    "check_out": "2024-06-15T23:05:26.078Z",
    "first_name": "",
    "last_name": "",
    "email": "",
    "meli_code": ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleClick = async () => {
    // console.log(formData);
    try {
      const response = await axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/reservations/',
        data: formData
      });
      if (response.status === 200) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
      } else {
        setShowAlert(false);
      }
    } catch (error) {
      console.log('Login failed:', error);
    }
    // console.log("clicked");
  };
    return (
      <div className="container py-4 col-md-8">
           {showAlert?
            (<div className="alert alert-success" role="alert" >
                Room reserved
              </div>) 
              : null}

        <h1 className="text-center mb-4 ">Add Room</h1>
        <div className="card round-5">
          <form className="card-body row g-3 ">
            {INPUTS.map((input) => (
              <TextInput key={input.name} {...input} value={formData[input.name]} onChange={handleChange} />
            ))}
            <div className="col-12 text-center mt-3">
              <button type="button" className="btn b w-50 w-md-auto " onClick={handleClick}>Reserve Room</button>
            </div>
          </form>
        </div>
      </div>
    );
    
};

export default ReserveForm;
