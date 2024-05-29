import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./Global";

function Edit() {
  const params = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    address: {
      street: "",
      city: "",
      zipcode: "",
    },
    phoneNumber: "",
    birthday: "",
    age: "",
    website: "",
    company: {
      name: "",
      role: "",
      experience: "",
      about: "",
    },
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(
          `${API}/${params.id}`
        );
        const userData = response.data; // Existing user data fetched from API
        setFormData(userData); // Populate the form data with existing user data
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevFormData) => ({
        ...prevFormData,
        [parent]: {
          ...prevFormData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${API}/${params.id}`,
        formData
      );
      console.log("Data sent successfully!", response.data);
      alert("Used Data Successfully Edited");
      navigate('/dashboard')
      setFormData('');
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="container-xl px-4 mt-4 ">
      <div className="row">
        <div className="col-xl-8">
          <div className="card mb-4">
            <div className="card-header">Create Account Details</div>
            <div className="card-body">
              <form className="create">
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">
                    Username (how your name will appear to other users on the
                    site)
                  </label>
                  <input
                    className="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    onChange={handleChange}
                    name="username"
                    value={formData.username}
                  />
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputFullName">
                      Full Name
                    </label>
                    <input
                      className="form-control"
                      id="inputFullName"
                      type="text"
                      placeholder="Enter your full name"
                      onChange={handleChange}
                      name="name"
                      value={formData.name}
                    />
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputEmail">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="inputEmail"
                      type="email"
                      placeholder="name@example.com"
                      onChange={handleChange}
                      name="email"
                      value={formData.email}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputWebsite">
                      Website
                    </label>
                    <input
                      className="form-control"
                      id="inputWebsite"
                      type="text"
                      placeholder="Enter your website"
                      onChange={handleChange}
                      name="website"
                      value={formData.website}
                    />
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      onChange={handleChange}
                      name="phoneNumber"
                      value={formData.phoneNumber}
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="small mb-1" htmlFor="inputBirthday">
                      Birthday
                    </label>
                    <input
                      className="form-control"
                      id="inputBirthday"
                      type="date"
                      name="birthday"
                      onChange={handleChange}
                      value={formData.birthday}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="small mb-1" htmlFor="inputBirthday">
                      Age
                    </label>
                    <input
                      className="form-control"
                      id="inputBirthday"
                      type="number"
                      name="age"
                      placeholder="Enter Age"
                      onChange={handleChange}
                      value={formData.age}
                    />
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-4">
                    <label className="small mb-1" htmlFor="inputStreet">
                      Street
                    </label>
                    <input
                      className="form-control"
                      id="inputStreet"
                      type="text"
                      placeholder="Enter your street"
                      onChange={handleChange}
                      name="address.street" // Corrected name attribute
                      value={formData.address.street}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="small mb-1" htmlFor="inputCity">
                      City
                    </label>
                    <input
                      className="form-control"
                      id="inputCity"
                      type="text"
                      placeholder="Enter your city"
                      onChange={handleChange}
                      name="address.city" // Corrected name attribute
                      value={formData.address.city}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="small mb-1" htmlFor="inputZip">
                      Zip-code
                    </label>
                    <input
                      className="form-control"
                      id="inputZip"
                      type="text"
                      placeholder="Enter your zipcode"
                      onChange={handleChange}
                      name="address.zipcode" // Corrected name attribute
                      value={formData.address.zipcode}
                    />
                  </div>
                </div>

                <div className="row gx-3 mb-3">
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputOrgName">
                      Organization name (Company Name)
                    </label>
                    <input
                      className="form-control"
                      id="inputOrgName"
                      type="text"
                      placeholder="Enter your organization name"
                      onChange={handleChange}
                      name="company.name" // Corrected name attribute
                      value={formData.company.name}
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="small mb-1" htmlFor="inputCatchPhrase">
                      Job role
                    </label>
                    <input
                      className="form-control"
                      id="inputCatchPhrase"
                      type="text"
                      placeholder="Enter your catch phrase"
                      onChange={handleChange}
                      name="company.role"
                      value={formData.company.role}
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="small mb-1" htmlFor="inputCatchPhrase">
                      Experience
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="In years"
                      onChange={handleChange}
                      name="company.experience"
                      value={formData.company.experience}
                    />
                  </div>
                </div>
                <div className="row gx-3 mb-3">
                  <div className="col">
                    <label className="small mb-1" htmlFor="inputAbout">
                      About user
                    </label>
                    <textarea
                      className="form-control"
                      id="inputAbout"
                      placeholder="Enter abount User"
                      style={{
                        height: "100px",
                        width: "100%",
                      }} // Set the width here
                      onChange={handleChange}
                      name="company.about" // Corrected name attribute
                      value={formData.company.about}
                    >
                      Enter about user
                    </textarea>
                  </div>
                </div>
                <button className="btn btn-success" type="submit" onClick={handleSubmit}>
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Edit;