import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  const handleMissionClick = () => {
    navigate('/mission');
  };

  const handleValuesClick = () => {
    navigate('/values');
  };

  const handleVisionClick = () => {
    navigate('/vision');
  };

  const handleTeamMemberClick = (memberId) => {
    navigate(`/team/${memberId}`);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div>
        {/* Header */}
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <div 
            className="text-[#111418] flex size-12 shrink-0 items-center cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">About Us</h2>
        </div>

        {/* Who We Are Section */}
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Who We Are</h2>
        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Youcef Belouz is a leading e-learning platform dedicated to empowering individuals and organizations with the knowledge and skills to excel in project management and
          agile methodologies. Our comprehensive courses, expert instructors, and interactive learning experiences ensure that our students are well-equipped to tackle the
          challenges of today's dynamic business environment.
        </p>

        {/* Letter from the Founder */}
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Letter from the Founder</h2>
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
            <div className="flex gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{
                  backgroundImage: `url("/youcef-belouz.jpg.png")`
                }}
              ></div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em]">Youcef Belouz</p>
                <p className="text-[#637688] text-base font-normal leading-normal">Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
          At Youcef Belouz, we believe that effective project management and agile practices are essential for success in any industry. Our mission is to provide accessible,
          high-quality education that transforms careers and drives organizational growth. We are committed to fostering a community of lifelong learners who are passionate about
          continuous improvement and innovation.
        </p>

        {/* Mission, Values, Vision Buttons */}
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 max-w-[480px] flex-col items-stretch px-4 py-3">
            <button 
              onClick={handleMissionClick}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em] w-full"
            >
              <span className="truncate">Mission</span>
            </button>
            <button 
              onClick={handleValuesClick}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em] w-full"
            >
              <span className="truncate">Values</span>
            </button>
            <button 
              onClick={handleVisionClick}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f2f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em] w-full"
            >
              <span className="truncate">Vision</span>
            </button>
          </div>
        </div>

        {/* Our Team Section */}
        <h2 className="text-[#111418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Team</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 text-center">
            <div className="px-4">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  backgroundImage: `url("/youcef-belouz.jpg.png")`
                }}
                onClick={() => handleTeamMemberClick('1')}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <div className="px-4">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEf7NK0HC6lFFZk1DpHokLKJV2UN6DqAIN2wEHJFxHu1NxH3xjNVdM8yc0zYzIQt4a6zihIzZi2Q4e_iqstFuCanZgBarDiCJuS_jHgV_DBPh0P4288XijfS5AjHGwuc2BxQrtSjSSisx4I6Ht6arNp0t0FxWqDwhgm4u-qcvj8DEXUQL9flv2sxj9kxTzxRCZDIhnY26wis-rffwBDf-bHQtp0t-mUlaOHXENdt2gwFPhmxkB1tFVCDqr3tQ4UVoUMY3B0Y5h76E")`
                }}
                onClick={() => handleTeamMemberClick('2')}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <div className="px-4">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDEf7NK0HC6lFFZk1DpHokLKJV2UN6DqAIN2wEHJFxHu1NxH3xjNVdM8yc0zYzIQt4a6zihIzZi2Q4e_iqstFuCanZgBarDiCJuS_jHgV_DBPh0P4288XijfS5AjHGwuc2BxQrtSjSSisx4I6Ht6arNp0t0FxWqDwhgm4u-qcvj8DEXUQL9flv2sxj9kxTzxRCZDIhnY26wis-rffwBDf-bHQtp0t-mUlaOHXENdt2gwFPhmxkB1tFVCDqr3tQ4UVoUMY3B0Y5h76E")`
                }}
                onClick={() => handleTeamMemberClick('3')}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <div className="px-4">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBsThJ5lcIe89N6geUvdRZxvYVzTe-6LSwGwkqb6l09YPS6J8vv8468ktl62ZsLKVzkDrc0mk0ZWiKwwlG6ub-6NCY6Zzl-7zGw1bJeH4Fec96Xka5nRTj-pmjoPB9dQwK3m0lfjEv4zBvK1TUt9KaWYlYMSK5uHMgp32edI5e0X1LujNGfVA-QceYT4hXHbKCi09902eoToUMO9sLuva39h4U06LrFGpD4DPTk-XAQUZs-km3D_qBD3svni2EPc8HsysA1D0fR96c")`
                }}
                onClick={() => handleTeamMemberClick('4')}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <div className="px-4">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaRHaiVcMstqTd0WupNiTHTAKw-dIR-Gf89uySDpN7MrOIRvMQ1gxPck_6z08MQ0L7JYK_i1pxjvwJxN8Ask1oxl0hjre6v_s25XpszBMSLsrbHdCFfAZWWgi2MNzWxPwdGqW9vTSc4KwmebjlGkAXbWrO5vJdzv2LhudIlhBk8w5S0rVvMSYmERMEQseFnLaVSQPHuAhxkqqZzdyJ-uh6Z1hFbbzYy2oJBelJeZEU2ROo_dr28BwZ1aKQWuiGCo8lmlTwn6H01F4")`
                }}
                onClick={() => handleTeamMemberClick('5')}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-center">
            <div className="px-4">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVgW6p2tslRNFrMMFD7OSt1Hbn5SIEAnoyD6qD1HoV4CudCc2a3D_7Y8UymYJ6C7X33fH9Kl5UsoOoAEh-YfkJWAoMk3BV4YDNuYMH02kDCVbb-mCWOYoA3yaSt705wtHKZzPgnUEU2fPQ66SbeVyIVkMvy9folKjyAGn9N--pxhriUvoQMn-0VOP1-ErJ7_tc2f3FAo7PNc2KnYj5Xo9lPgwd5HcVYxJa63w5f41SLQB-FFcmVeEBna66SVZdpo7Km0mnOUbs4Kw")`
                }}
                onClick={() => handleTeamMemberClick('6')}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div>
        <div className="flex gap-2 border-t border-[#f0f2f4] bg-white px-4 pb-3 pt-2">
          <Link to="/" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637688]">
            <div className="text-[#637688] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
            <p className="text-[#637688] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
          </Link>
          <Link to="/courses" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637688]">
            <div className="text-[#637688] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
              </svg>
            </div>
            <p className="text-[#637688] text-xs font-medium leading-normal tracking-[0.015em]">Courses</p>
          </Link>
          <Link to="/resources" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637688]">
            <div className="text-[#637688] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,56H216V168H40Zm32,32a8,8,0,0,1,8-8H80a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8Zm0,56a8,8,0,0,1,8-8H80a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8Zm88-56a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8Zm0,56a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8Z"></path>
              </svg>
            </div>
            <p className="text-[#637688] text-xs font-medium leading-normal tracking-[0.015em]">Resources</p>
          </Link>
          <Link to="/about" className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#111518]">
            <div className="text-[#111518] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
              </svg>
            </div>
            <p className="text-[#111518] text-xs font-medium leading-normal tracking-[0.015em]">About Us</p>
          </Link>
          <Link to="/contact" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637688]">
            <div className="text-[#637688] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
              </svg>
            </div>
            <p className="text-[#637688] text-xs font-medium leading-normal tracking-[0.015em]">Contact</p>
          </Link>
        </div>
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
};

export default AboutPage; 