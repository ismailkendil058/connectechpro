import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [language, setLanguage] = useState('English');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div>
        {/* Header */}
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <div 
            className="text-[#131416] flex size-12 shrink-0 items-center cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-[#131416] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Contact Us</h2>
        </div>

        {/* Contact Form */}
        <h1 className="text-[#131416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Get in Touch</h1>
        <p className="text-[#131416] text-base font-normal leading-normal pb-3 pt-1 px-4">
          We're here to help! Whether you have questions about our courses, need assistance with enrollment, or want to discuss custom training solutions, please reach out. We
          offer multiple ways to connect, ensuring you can easily get the support you need.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131416] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f3] focus:border-none h-14 placeholder:text-[#6b7580] p-4 text-base font-normal leading-normal"
              />
            </label>
          </div>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131416] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f3] focus:border-none h-14 placeholder:text-[#6b7580] p-4 text-base font-normal leading-normal"
              />
            </label>
          </div>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131416] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f3] focus:border-none h-14 placeholder:text-[#6b7580] p-4 text-base font-normal leading-normal"
              />
            </label>
          </div>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131416] focus:outline-0 focus:ring-0 border-none bg-[#f1f2f3] focus:border-none min-h-36 placeholder:text-[#6b7580] p-4 text-base font-normal leading-normal"
              ></textarea>
            </label>
          </div>

          <div className="flex px-4 py-3">
            <button
              type="submit"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#b8cee4] text-[#131416] text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Send Message</span>
            </button>
          </div>
        </form>

        {/* Other Ways to Connect */}
        <h2 className="text-[#131416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Other Ways to Connect</h2>
        
        <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between cursor-pointer hover:bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="text-[#131416] flex items-center justify-center rounded-lg bg-[#f1f2f3] shrink-0 size-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
              </svg>
            </div>
            <p className="text-[#131416] text-base font-normal leading-normal flex-1 truncate">WhatsApp</p>
          </div>
          <div className="shrink-0">
            <div className="text-[#131416] flex size-7 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between cursor-pointer hover:bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="text-[#131416] flex items-center justify-center rounded-lg bg-[#f1f2f3] shrink-0 size-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
              </svg>
            </div>
            <p className="text-[#131416] text-base font-normal leading-normal flex-1 truncate">Schedule a Consultation</p>
          </div>
          <div className="shrink-0">
            <div className="text-[#131416] flex size-7 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Language Selection */}
        <h2 className="text-[#131416] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Language</h2>
        <div className="flex flex-wrap gap-3 p-4">
          <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dee0e3] px-4 h-11 text-[#131416] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#b8cee4] relative cursor-pointer">
            English
            <input 
              type="radio" 
              className="invisible absolute" 
              name="language" 
              value="English"
              checked={language === 'English'}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </label>
          <label className="text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dee0e3] px-4 h-11 text-[#131416] has-[:checked]:border-[3px] has-[:checked]:px-3.5 has-[:checked]:border-[#b8cee4] relative cursor-pointer">
            French
            <input 
              type="radio" 
              className="invisible absolute" 
              name="language" 
              value="French"
              checked={language === 'French'}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </label>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div>
        <div className="flex gap-2 border-t border-[#f1f2f3] bg-white px-4 pb-3 pt-2">
          <Link to="/" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#6b7580]">
            <div className="text-[#6b7580] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
            <p className="text-[#6b7580] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
          </Link>
          <Link to="/courses" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#6b7580]">
            <div className="text-[#6b7580] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
              </svg>
            </div>
            <p className="text-[#6b7580] text-xs font-medium leading-normal tracking-[0.015em]">Courses</p>
          </Link>
          <Link to="/resources" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#6b7680]">
            <div className="text-[#6b7680] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,56H216V168H40Zm32,32a8,8,0,0,1,8-8H80a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8Zm0,56a8,8,0,0,1,8-8H80a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8Zm88-56a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8Zm0,56a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8Z"></path>
              </svg>
            </div>
            <p className="text-[#6b7680] text-xs font-medium leading-normal tracking-[0.015em]">Resources</p>
          </Link>
          <Link to="/about" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#6b7580]">
            <div className="text-[#6b7580] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
              </svg>
            </div>
            <p className="text-[#6b7580] text-xs font-medium leading-normal tracking-[0.015em]">About Us</p>
          </Link>
          <Link to="/contact" className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#131416]">
            <div className="text-[#131416] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
              </svg>
            </div>
            <p className="text-[#131416] text-xs font-medium leading-normal tracking-[0.015em]">Contact</p>
          </Link>
        </div>
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
};

export default ContactPage; 