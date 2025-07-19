import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const TeamMemberPage = () => {
  const navigate = useNavigate();
  const { memberId } = useParams();

  // Team member data
  const teamMembers = {
    '1': {
      name: 'Youcef Belouz',
      title: 'CEO & Founder',
      subtitle: 'Project Management Expert',
      image: '/youcef-belouz.jpg.png',
      bio: 'Youcef is a seasoned project management professional with over 15 years of experience in leading complex projects across various industries. He is passionate about sharing his knowledge and helping others succeed in their careers.',
      linkedin: '#',
      twitter: '#'
    },
    '2': {
      name: 'Sarah Johnson',
      title: 'Head of Learning',
      subtitle: 'Educational Content Director',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSIhtobBbbzSvq_kOUzLrFdFhF7_fqHeVeC_jWr2IovAXm-OlWSCbjK_z1llBmEgcV5I1_jYEQ9VCWStZD-OoQ6e44YtfHFW-_NNei52eEx7iwSHOPRPI2BT5EA0f9kC16Oivl_JnBKndi9fPoso6N5mMErkpJgHO5q2NOnKjJKn9RjkhcUIRUmqi6JWr7k8Dd1TXBP59-Q-E4pLv5ibABEMAQooz-MSKAXuHYDslMSnMsRElZOybZn40-T7-Hel_jfK3OiUkCJpo',
      bio: 'Sarah leads our educational content strategy with over 10 years of experience in instructional design. She specializes in creating engaging learning experiences that maximize student success.',
      linkedin: '#',
      twitter: '#'
    },
    '3': {
      name: 'Michael Chen',
      title: 'Technical Lead',
      subtitle: 'Agile & Scrum Expert',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3mxeQUYHsUSUB8SmTXPDiCPH9ze9PWTgcmJs-qD-kkd-DGwpujQT9Y-ps0Y_zgHBDv5o4RHvcUmXkds1AsWsZB85rpFE1iNKjg6ZutKrp-JGdWkfeX0asagL0h0bzxPpL_SyNlLB3LxiAXnEijku9PoBBTPKfBdiA1fXXm62c6kLxdcDZN3GN3Hv-tXBJoYwEy6EbM3tMzZnZNtQ9Aa81B9XR8pqTU3-7PxORuznSWv8unbf8Js9jbNkXEYC5KpXvu2Fb6QwsYf4',
      bio: 'Michael is our technical lead with deep expertise in Agile methodologies and Scrum practices. He has successfully transformed numerous organizations through effective implementation of agile frameworks.',
      linkedin: '#',
      twitter: '#'
    },
    '4': {
      name: 'Emily Rodriguez',
      title: 'Senior Instructor',
      subtitle: 'Risk Management Specialist',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEf7NK0HC6lFFZk1DpHokLKJV2UN6DqAIN2wEHJFxHu1NxH3xjNVdM8yc0zYzIQt4a6zihIzZi2Q4e_iqstFuCanZgBarDiCJuS_jHgV_DBPh0P4288XijfS5AjHGwuc2BxQrtSjSSisx4I6Ht6arNp0t0FxWqDwhgm4u-qcvj8DEXUQL9flv2sxj9kxTzxRCZDIhnY26wis-rffwBDf-bHQtp0t-mUlaOHXENdt2gwFPhmxkB1tFVCDqr3tQ4UVoUMY3B0Y5h76E',
      bio: 'Emily specializes in project risk management and has helped countless organizations develop robust risk mitigation strategies. Her practical approach makes complex concepts accessible to all learners.',
      linkedin: '#',
      twitter: '#'
    },
    '5': {
      name: 'David Thompson',
      title: 'Lead Consultant',
      subtitle: 'Digital Transformation Expert',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsThJ5lcIe89N6geUvdRZxvYVzTe-6LSwGwkqb6l09YPS6J8vv8468ktl62ZsLKVzkDrc0mk0ZWiKwwlG6ub-6NCY6Zzl-7zGw1bJeH4Fec96Xka5nRTj-pmjoPB9dQwK3m0lfjEv4zBvK1TUt9KaWYlYMSK5uHMgp32edI5e0X1LujNGfVA-QceYT4hXHbKCi09902eoToUMO9sLuva39h4U06LrFGpD4DPTk-XAQUZs-km3D_qBD3svni2EPc8HsysA1D0fR96c',
      bio: 'David is a digital transformation expert who has guided organizations through complex technological changes. His expertise in change management and stakeholder engagement is invaluable to our students.',
      linkedin: '#',
      twitter: '#'
    },
    '6': {
      name: 'Lisa Wang',
      title: 'Senior Trainer',
      subtitle: 'Communication & Leadership Coach',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaRHaiVcMstqTd0WupNiTHTAKw-dIR-Gf89uySDpN7MrOIRvMQ1gxPck_6z08MQ0L7JYK_i1pxjvwJxN8Ask1oxl0hjre6v_s25XpszBMSLsrbHdCFfAZWWgi2MNzWxPwdGqW9vTSc4KwmebjlGkAXbWrO5vJdzv2LhudIlhBk8w5S0rVvMSYmERMEQseFnLaVSQPHuAhxkqqZzdyJ-uh6Z1hFbbzYy2oJBelJeZEU2ROo_dr28BwZ1aKQWuiGCo8lmlTwn6H01F4',
      bio: 'Lisa focuses on developing leadership skills and effective communication strategies. Her background in organizational psychology helps students build strong teams and navigate complex workplace dynamics.',
      linkedin: '#',
      twitter: '#'
    }
  };

  const member = teamMembers[memberId] || teamMembers['1'];

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
          <h2 className="text-[#131416] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">{member.name}</h2>
        </div>

        {/* Team Member Profile */}
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{
                  backgroundImage: `url("${member.image}")`
                }}
              ></div>
              <div className="flex flex-col items-center justify-center justify-center">
                <p className="text-[#131416] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">{member.name}</p>
                <p className="text-[#6b7680] text-base font-normal leading-normal text-center">{member.title}</p>
                <p className="text-[#6b7680] text-base font-normal leading-normal text-center">{member.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[#131416] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {member.bio}
        </p>

        {/* Social Links */}
        <h3 className="text-[#131416] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Connect with {member.name.split(' ')[0]}</h3>
        <div className="flex justify-center">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f1f2f3] text-[#131416] text-sm font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">LinkedIn</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f1f2f3] text-[#131416] text-sm font-bold leading-normal tracking-[0.015em] grow">
              <span className="truncate">Twitter</span>
            </button>
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

export default TeamMemberPage; 