import React, { useState } from 'react'
import Sidebar from '../../../components/sidenav'
import starIcon from '../../../assets/Star.png'
import LSPAbout from '../LSP_About/LSPAbout'
import Feedback from '../../../components/Feedback/Feedback'
import lawyer01 from "../../../assets/lawyer01.jpeg"
import location from '../../../assets/location.gif'
import Sidecard from './Sidecard'
import lawyerprofile9 from "../../../assets/lawyerprofile9.jpeg"
import jsPDF from 'jspdf';

const Profile = () => {

    const lawyers = {
        "lawyer_name": "Amit Sharma",
        "vidhik_id": "V123456",
        "lawyer_password": "amit123",
        "bar_council_no": "BCN123",
        "age": 30,
        "email": "amit.sharma@example.com",
        "photo_url": lawyerprofile9,
        "phone_no": "1234567890",
        "aadhar_no": "123456789012",
        "gender": "Male",
        "avg_price_range_per_hearing": [100, 300],
        "no_of_past_cases_fought": 50,
        "no_of_past_cases_won": 30,
        "rating": 4.5,
        "speciality": ["Criminal Defense", "Family Law"],
        "lawyer_location": "Cityville",
        "languages_known": ["English", "Spanish"],
        "experience_in_years": 10,
        "endorsements": ["Entity123"],
        "cases_involved": ["Case123", "Case456"],
        "lawyer_type": ["Advocate"],
        "additional_ids": ["AIBE123", "OS456", "ST789", "StateName"],
        "bio": "With a decade of legal expertise, I am passionate about upholding justice and providing effective legal solutions. Specializing in Criminal Defense and Family Law, I have successfully handled numerous cases, earning the trust of clients and colleagues alike. My commitment to excellence is reflected in my impressive track record of 30 wins out of 50 past cases. I believe in continuous learning and hold a Bachelor of Laws (LLB) from City University and a Master of Laws (LLM) from State University. Fluent in English and Spanish, I am dedicated to serving the legal needs of the community in and around Cityville.",
        "skills": ["Litigation", "Negotiation", "Legal Research"],
        "education": [
          {
            "degree": "Bachelor of Laws (LLB)",
            "university": "City University",
            "city": "Cityville",
            "start_year": 2008,
            "end_year": 2012
          },
          {
            "degree": "Master of Laws (LLM)",
            "university": "State University",
            "city": "Stateville",
            "start_year": 2012,
            "end_year": 2014
          }
        ]
      };
      

    const [tab, settab] = useState('about')

    const handleDownloadReport = () => {
        // Create a new instance of jsPDF with A4 dimensions
        const doc = new jsPDF({
          orientation: 'portrait', // 'portrait' for vertical, 'landscape' for horizontal
          unit: 'mm',
          format: 'a4',
        });
      
        // Add a new page (A4 size)
        doc.addPage();
      
        // Define the content to be added to the PDF
        const content = document.getElementById('pdf-content');
      
        // Generate the PDF by adding the content from your component
        doc.html(content, {
          callback: function (doc) {
            // Save the PDF with a filename (e.g., 'report.pdf')
            doc.save('report.pdf');
          },
        });
      };
      
    return (
        <div  className="  bg-[#F5F5F5] min-h-screen flex justify-center">
            <main id='pdf-content'>
                <section>
                    <div className='max-w-[1170px] px-5 mx-auto ml-10'>
                        <div className='grid md:grid-cols-3 gap-[50px]'>
                            <div className="md:col-span-2">
                                <div className="flex items-center gap-5 ">
                                    <figure className='min-w-[300px] min-h-[300px]  '>
                                        <img src={lawyerprofile9} alt="" className='w-full' />
                                    </figure>

                                    <div className=' min-h-[300px]'>
                                    <span className='bg-[#CCF0F3] text-irisBlueColor py-2 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded ml-2 '>{lawyers.lawyer_type}</span>

                                        
                                        <h3 className='text-headingColor text-[26px] leading-9 mt-5 font-bold'>{lawyers.lawyer_name}<span className='ml-4 font-light'>(Vidhik id:{lawyers.vidhik_id})</span></h3>
                                        <div className="flex items-center gap-[6px] mb-[25px]">
                                            <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                                                <img src={starIcon} alt="" />{lawyers.rating}
                                            </span>
                                            <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>(272)</span>
                                        </div>
                                        {
                                            lawyers.speciality.map((speciality, index) => (
                                                <span key={index} className='text-[18px] leading-5 lg:text-[18px] lg:py-2 lg:leading-7 font-[400] bg-[#CCF0F3] text-irisBlueColor w-fit mr-3 '>{speciality}</span>
                                            ))
                                        }
                                        <p className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor flex items-center mt-[15px]'><span><img src={location} alt="" className='bg-transparent' /></span> {lawyers.lawyer_location}</p>
                                        <p className='text-[14px] leading-5 lg:text-[18px] lg:leading-7 font-[400] text-textColor mt-5'>{lawyers.experience_in_years} years of experience</p>
                                        <p className='text-[14px] leading-5 lg:text-[18px] lg:leading-7 font-[400] text-textColor mt-5'>Age: {lawyers.age}</p>
                                    </div>
                                </div>
                                <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
                                    <button className={`${tab === 'about' && 'border-b border-solid border-[#0067FF]'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={() => { settab('about') }}>About</button>
                                    <button className={`${tab === 'feedback' && 'border-b border-solid border-[#0067FF]'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={() => { settab('feedback') }}>Feedback</button>

                                </div>
                                <div className='mt-[50px]'>
                                    {
                                        tab === 'about' && <LSPAbout lawyer={lawyers} />
                                    }
                                    {
                                        tab === 'feedback' && <Feedback />
                                    }
                                </div>

                            </div>
                            <Sidecard lawyer={lawyers} />
                            <button onClick={handleDownloadReport} style={{position:'absolute',top:'360px',right:'290px'}} className="btn px-2  rounded-md mt-4">Download Report</button>

                        </div>

                    </div>

                </section>
            </main>
        </div>
    )
}

export default Profile