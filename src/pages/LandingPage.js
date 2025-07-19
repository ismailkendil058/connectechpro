import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const LandingPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden">
      <div>
        {/* Header */}
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <div className="text-[#111418] flex size-12 shrink-0 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          </div>
          <div className="flex w-12 items-center justify-end">
            <Logo size="small" className="text-right" />
          </div>
        </div>

        {/* Hero Section */}
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div className="hero-bg bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-lg min-h-80">
              <div className="flex p-4">
                <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                  Master Project Management with PMI-Authorized Training
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
            <Link to="/courses" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1672ce] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">Browse Courses</span>
            </Link>
          </div>
        </div>

        {/* Book Call Button */}
        <div className="flex px-4 py-3 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f0f2f4] text-[#111418] text-sm font-bold leading-normal tracking-[0.015em]">
            <span className="truncate">Book a Free Call</span>
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-4 p-4">
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f0f2f4]">
            <p className="text-[#111418] text-base font-medium leading-normal">Students Certified</p>
            <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">500+</p>
          </div>
          <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f0f2f4]">
            <p className="text-[#111418] text-base font-medium leading-normal">Coaching Hours</p>
            <p className="text-[#111418] tracking-light text-2xl font-bold leading-tight">10K+</p>
          </div>
        </div>

        {/* Explore Certifications */}
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Explore Certifications</h2>
        <div className="flex overflow-y-auto scrollbar-hide">
          <div className="flex items-stretch p-4 gap-3">
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <a href="https://www.credly.com/badges/3285b911-6ecb-4745-bcdd-e486cb193cd0/public_url" target="_blank" rel="noopener noreferrer" className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col cursor-pointer hover:scale-105 transition-transform duration-200">
                <img src="/atp.png" alt="PMI-ATP Certification" className="w-full h-full object-cover rounded-lg" />
              </a>
              <p className="text-[#111418] text-base font-medium leading-normal">PMI-ATP</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">What Our Students Say</h2>
        <div className="flex overflow-y-auto scrollbar-hide">
          <div className="flex items-stretch p-4 gap-3">
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div className="testimonial-sarah w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">Sarah Chen</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">"This course transformed my career. The instructors were knowledgeable and supportive."</p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div className="testimonial-david w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">David Lee</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">"The Agile certification program was exactly what I needed to advance my skills."</p>
              </div>
            </div>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
              <div className="testimonial-maria w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"></div>
              <div>
                <p className="text-[#111418] text-base font-medium leading-normal">Maria Rodriguez</p>
                <p className="text-[#637588] text-sm font-normal leading-normal">"I highly recommend this training for anyone serious about project management."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Clients */}
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Enterprise Clients</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg">
              <img src="/b.png" alt="Enterprise Client B" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg">
              <img src="/d.png" alt="Enterprise Client D" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg">
              <img src="/e.png" alt="Enterprise Client E" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div>
        <div className="flex gap-2 border-t border-[#f0f2f4] bg-white px-4 pb-3 pt-2">
          <Link to="/" className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#111418]">
            <div className="text-[#111418] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
            <p className="text-[#111418] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
          </Link>
          <Link to="/courses" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637588]">
            <div className="text-[#637588] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
              </svg>
            </div>
            <p className="text-[#637588] text-xs font-medium leading-normal tracking-[0.015em]">Courses</p>
          </Link>
          <Link to="/resources" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637588]">
            <div className="text-[#637588] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,56H216V168H40Zm32,32a8,8,0,0,1,8-8H80a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8Zm0,56a8,8,0,0,1,8-8H80a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8Zm88-56a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8Zm0,56a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8Z"></path>
              </svg>
            </div>
            <p className="text-[#637588] text-xs font-medium leading-normal tracking-[0.015em]">Resources</p>
          </Link>
          <Link to="/about" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637588]">
            <div className="text-[#637588] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
              </svg>
            </div>
            <p className="text-[#637588] text-xs font-medium leading-normal tracking-[0.015em]">About Us</p>
          </Link>
          <Link to="/contact" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637588]">
            <div className="text-[#637588] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
              </svg>
            </div>
            <p className="text-[#637588] text-xs font-medium leading-normal tracking-[0.015em]">Contact</p>
          </Link>
        </div>
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
};

export default LandingPage; 