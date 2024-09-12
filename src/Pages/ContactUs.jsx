import React , {useRef, useState} from "react";
import BackTop from "../Components/BackTop";
import { Bounce, toast, ToastContainer } from "react-toastify";
import emailjs from '@emailjs/browser'
import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const notifyError = ()=> toast.error('Error of send', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
    });
    
  const form = useRef();

  const navigate= useNavigate()

  const goToSuccess = () =>{
    navigate('/success-email');
  }
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    description: '',
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address (e.g., name@gmail.com)';
      }
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Validate description
    if (formData.description.trim().length < 20) {
      newErrors.description = 'Description must be at least 20 characters long';
    }

    setErrors(newErrors);
    
    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };


  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (validateForm()) {

      
      // Form is valid
      emailjs.sendForm('service_3rt1bak', 'template_9s02qmv', form.current, {
        publicKey: '2X53uaQIWtewlAiTX',
      })
      .then(
        () => {
          goToSuccess();

        },
        (error) => {
          notifyError()

        },
      );
      setFormData({
        name: '',
        email: '',
        subject: '',
        description: '',
      })
    }else{

      
    }
  };

   // Handle form input change
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  return (
    <div className=" bg-bg-main ">
      <ToastContainer />
      <div className="w-full max-w-xx container mx-auto rounded-lg px-4 pt-20 pb-8">
        <h2 className="text-[32px] text-white font-semibold mb-6">
          Contact Us
        </h2>
        <form
         onSubmit={handleSubmit}
         ref={form}
         action=""
         >
      {/* Name */}
      <div className="mb-6">
        <label className="block text-white mb-2 text-base font-medium" htmlFor="name">
          Name
        </label>
        <input
          className={`w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            errors.name ? 'border-red-500' : ''
          }`}
          type="text"
          id="name"
          name="name"
          placeholder="Your Name or Organization"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="text-red-500 mt-1 text-sm">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-white mb-2 text-base font-medium" htmlFor="email">
          Email
        </label>
        <input
          className={`w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            errors.email ? 'border-red-500' : ''
          }`}
          type="text"
          id="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="text-red-500 mt-1 text-sm">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div className="mb-6">
        <label className="block text-white mb-2 text-base font-medium" htmlFor="subject">
          Subject
        </label>
        <input
          className={`w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            errors.subject ? 'border-red-500' : ''
          }`}
          type="text"
          id="subject"
          name="subject"
          placeholder="Contact or Event Subject"
          value={formData.subject}
          onChange={handleInputChange}
        />
        {errors.subject && <p className="text-red-500 mt-1 text-sm">{errors.subject}</p>}
      </div>

      {/* Event Description */}
      <div className="mb-6">
        <label className="block text-white mb-2 text-base font-medium" htmlFor="description">
          Event Description
        </label>
        <textarea
          className={`w-full px-4 py-3 bg-input text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 ${
            errors.description ? 'border-red-500' : ''
          }`}
          id="description"
          name="description"
          rows={7}
          placeholder="Please provide details about your event (e.g., date, time, location, type of event)"
          value={formData.description}
          onChange={handleInputChange}
        />
        {errors.description && (
          <p className="text-red-500 mt-1 text-sm">{errors.description}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end space-x-6">
        <button
          type="submit"
          className="w-full bg-main-color hover:bg-main-hover transition duration-300 ease-in-out text-white font-bold py-2 px-6 rounded-2xl"
          >
          Send
        </button>
      </div>
    </form>

      </div>
      <BackTop/>
    </div>
  );
}
