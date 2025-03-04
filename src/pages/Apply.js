import React, { useState } from "react";
import { useParams } from "react-router-dom";
import emailjs from "emailjs-com";
import '../components/Apply.css';

const Apply = () => {
  const { jobId } = useParams();
  const [hasExperience, setHasExperience] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    workExperience: "",
    companyName: "",
    position: "",
    waecResult: null,
    resume: null,
    motivation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare email data
    const emailParams = {
      to_email: "glorylightfc@gmail.com",
      subject: `New Job Application - Job ID ${jobId}`,
      message: `
        Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Qualification: ${formData.qualification}
        Work Experience: ${hasExperience ? `${formData.companyName} (${formData.position})` : "No experience"}
        Motivation: ${formData.motivation}
      `,
    };

    // Send application to company email
    emailjs
      .send("service_nkjf1yn", "template_29k881t", emailParams, "F6-ru3QuqvqGjvnmu")
      .then(() => {
        alert("Application submitted successfully!");
      })
      .catch((err) => console.error("Email sending failed:", err));

    // Send automatic response to user
    emailjs.send("service_nkjf1yn", "template_l0k00pr", {
      to_email: formData.email,
      subject: "Application Received",
      message: `Dear ${formData.fullName},\n\nThank you for applying for the job. We will review your application and get back to you soon!\n\nBest regards,\nGlory Light FC`,
    });
  };

  return (
    <div className="apply-page">
      <h1>Apply: {jobId}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <input type="text" name="qualification" placeholder="Highest Educational Qualification" onChange={handleChange} required />

        {/* <label>Upload WAEC Result</label>
        <input type="file" name="waecResult" onChange={handleFileChange} required /> */}

        <label>Upload Resume</label>
        <input type="file" name="resume" onChange={handleFileChange} required />

        <label>Do you have work experience?</label>
        <div className="radio-group">
          <input type="radio" name="hasExperience" value="yes" onChange={() => setHasExperience(true)} /> Yes
          <input type="radio" name="hasExperience" value="no" onChange={() => setHasExperience(false)} /> No
        </div>

        {hasExperience && (
          <>
            <input type="text" name="companyName" placeholder="Company Name" onChange={handleChange} />
            <input type="text" name="position" placeholder="Position Held" onChange={handleChange} />
          </>
        )}

        <textarea name="motivation" placeholder="Why do you want to work with us?" onChange={handleChange} required></textarea>

        <button className="submit-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default Apply;
