'use client';
import React, { useState } from "react";
import { Suspense } from 'react';
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from './page.module.css';
import Navbar from '../components/Navbar';

const guidelinesList = [
  "Innovative Structural Design: Pushing the Boundaries of Engineering",
  "Smart Cities: Integrating Technology with Urban Infrastructure",
  "Sustainable Construction: Green Solutions for Modern Challenges",
  "AI and Robotics in Civil Engineering Practices",
  "Advanced Materials: Revolutionizing Building Techniques",
  "Resilient Infrastructure: Adapting to Climate Change"
];

function RegisterForm() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || "Futuristic Civil Engineering Fest";
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    alternateNumber: "",
    instituteId: "",
    instituteName: "",
    paymentProof: null,
  });

  const [showImageUpload, setShowImageUpload] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePaymentClick = () => {
    setShowImageUpload(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, paymentProof: file }));
      setPaymentStatus(true);
      alert("Payment proof uploaded successfully!");
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.number) {
      alert("Please fill out all required fields!");
      return;
    }
    if (formData.number === formData.alternateNumber) {
      alert("Primary and alternate numbers should be different.");
      return;
    }
    if (!paymentStatus) {
      alert("Please upload payment proof before submitting.");
      return;
    }

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach((key) => submitData.append(key, formData[key]));

      const res = await axios.post(`/api/submit/${topic}`, submitData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 200) {
        alert("Form submitted successfully!");
        router.push("/Lecture");
      } else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.log("Error while submitting the form", error);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />
      <div className={styles.backgroundGrid}></div>
      <div className={styles.registrationWrapper}>
        {/* Guidelines Section */}
        <div className={styles.guidelinesSection}>
          <div className={styles.holographicOverlay}></div>
          <h2 className={styles.sectionHeader}>Event Guidelines</h2>
          
          <div className={styles.topicSection}>
            <div className={styles.blueprintImage}>
              <span>Blueprint</span>
            </div>
            <div className={styles.topicDetails}>
              <h3 className={styles.topicTitle}>{topic}</h3>
              <div className={styles.contactInfo}>
                <span>+91 9876543210</span>
                <span>+91 9876543211</span>
              </div>
            </div>
          </div>

          <ul className={styles.guidelinesList}>
            {guidelinesList.map((item, index) => (
              <li key={index} className={styles.guidelineItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Registration Form Section */}
        <div className={styles.registrationForm}>
          <h2 className={styles.sectionHeader}>Registration</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input 
                className={styles.formInput}
                placeholder="Name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
              />
              <input 
                className={styles.formInput}
                placeholder="Email" 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
              />
              <input 
                className={styles.formInput}
                placeholder="Mobile Number" 
                type="tel" 
                name="number" 
                value={formData.number} 
                onChange={handleChange} 
              />
              <input 
                className={styles.formInput}
                placeholder="Alternate Mobile Number" 
                type="tel" 
                name="alternateNumber" 
                value={formData.alternateNumber} 
                onChange={handleChange} 
              />
              <input 
                className={styles.formInput}
                placeholder="Institute ID" 
                name="instituteId" 
                value={formData.instituteId} 
                onChange={handleChange} 
              />
              <input 
                className={styles.formInput}
                placeholder="Institute Name" 
                name="instituteName" 
                value={formData.instituteName} 
                onChange={handleChange} 
              />

              {showImageUpload && (
                <div className="mt-4 text-center">
                  <Image 
                    src="/QR.jpg" 
                    width={200} 
                    height={200} 
                    alt="QR Code" 
                    className="mx-auto mb-4 rounded-lg" 
                  />
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    className={styles.formInput}
                  />
                </div>
              )}

              {!showImageUpload && (
                <button 
                  type="button" 
                  onClick={handlePaymentClick} 
                  className={styles.submitButton}
                >
                  Proceed to Payment
                </button>
              )}

              {paymentStatus && (
                <button 
                  type="submit" 
                  className={styles.submitButton}
                >
                  Submit Registration
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// This wrapper component handles the Suspense boundary
function RegFormPage() {
  return (
    <Suspense fallback={<div>Loading registration form...</div>}>
      <RegisterForm />
    </Suspense>
  );
}

export default RegFormPage;