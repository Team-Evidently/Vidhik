import React, { useState } from 'react'
import Sidebar from '../../../components/sidenav'
import starIcon from '../../../assets/Star.png'
import LSPAbout from '../LSP_About/LSPAbout'
import Feedback from '../../../components/Feedback/Feedback'
import lawyer01 from "../../../assets/lawyer01.jpeg"

const Profile = () => {

    const lawyers = {
        "lawyer_name": "John Doe",
        "vidhik_id": "V123456",
        "lawyer_password": "john123",
        "bar_council_no": "BCN123",
        "email": "john.doe@example.com",
        "photo_url": "https://images.app.goo.gl/GFHRkXec7FBceS6P9",
        "phone_no": "1234567890",
        "aadhar_no": "123456789012",
        "gender": "Male",
        "avg_price_range_per_hearing": [100, 300],
        "no_of_past_cases_fought": 50,
        "no_of_past_cases_won": 30,
        "rating": 4.5,
        "speciality": ["Criminal Defense", "Family Law"],
        "practicing_court": ["Supreme Court", "High Court"],
        "lawyer_location": "Cityville",
        "languages_known": ["English", "Spanish"],
        "experience_in_years": 10,
        "endorsements": ["Entity123"],
        "cases_involved": ["Case123", "Case456"],
        "lawyer_type": ["Advocate"],
        "additional_ids": ["AIBE123", "OS456", "ST789", "StateName"],
        "bio":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam modi nihil rem repellendus odit obcaecati debitis, nobis, laborum autem excepturi praesentium quos. Error aspernatur cum facilis aperiam ex voluptas alias!",
      };

    const [tab, settab] = useState('about')
    return (
        <div className="bg-[#F5F5F5] min-h-screen flex">
            <main>
                <section>
                    <div className='max-w-[1170px] px-5 mx-auto ml-10'>
                        <div className='grid md:grid-cols-3 gap-[50px]'>
                            <div className="md:col-span-2">
                                <div className="flex items-center gap-5 ">
                                    <figure className='max-w-[200px] max-h-[200px]'>
                                        <img src={lawyer01} alt="" className='w-full' />
                                    </figure>
                                    <div>
                                        {
                                            lawyers.speciality.map((speciality, index) => (
                                                <span key={index} className='bg-[#CCF0F3] text-irisBlueColor py-2 px-6 lg:py-2 lg:px-6 text-[12pz] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded ml-2'>{speciality}</span>
                                            ))
                                        }
                                        <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>{lawyers.lawyer_name}</h3>
                                        <div className="flex items-center gap-[6px]">
                                            <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                                                <img src={starIcon} alt="" />{lawyers.rating}
                                            </span>
                                            <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>(272)</span>
                                        </div>
                                        <p className='text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>{lawyers.bio}</p>
                                    </div>
                                </div>
                                <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
                                    <button className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={() => { settab('about') }}>About</button>
                                    <button className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={() => { settab('feedback') }}>Feedback</button>

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
                            {/* <SidePanel /> */}
                        </div>

                    </div>

                </section>
            </main>
        </div>
    )
}

export default Profile