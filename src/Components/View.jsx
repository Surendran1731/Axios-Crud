import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API } from './Global';
import axios from 'axios';

function View() {
  const params = useParams();
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
    console.log('useEffect()');
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
  }, []);
  console.log(params);
  return (
    <div class="container" style={{ margin: "100px" }}>
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="about-text go-to">
            <h3 class="dark-color">About Me</h3>
            {formData.address && <p>{formData.company.about}</p>}
            <div class="row about-list">
              <div class="col-md-6">
                <div class="media">
                  <h5>Birthday</h5>
                  <p>{formData.birthday}</p>
                </div>
                {formData.address.city && (
                  <>
                    <div class="media">
                      <h5>Age</h5>
                      <p>{formData.age} Yr</p>
                    </div>
                  </>
                )}
                <div class="media">
                  <h5>Address</h5>
                  <p className="user-info">
                    {formData.address.street} {formData.address.suite} {formData.address.city}-
                    {formData.address.zipcode}
                  </p>
                </div>
                <div class="media">
                  <h5>Company name</h5>
                  <p>{formData.company.name}</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="media">
                  <h5>E-mail</h5>
                  <p>{formData.email}</p>
                </div>
                <div class="media">
                  <h5>Website</h5>
                  <p>{formData.website}</p>
                </div>
                <div class="media">
                  <h5>Phone</h5>
                  {formData.phoneNumber ? <p>{formData.phoneNumber}</p> : "nill"}
                </div>
                <div class="media">
                  <h5>Work Experience</h5>
                  {formData.company.experience ? <p>{formData.company.experience} yr</p> : "0"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
