import React from 'react'
import { Paper } from '@mui/material';
import star from "../../assets/Star.png"
import avatar01 from "../../assets/avatar01.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import linkedin from "../../assets/linkedin.png"

const LSPCard = ({lawyer}) => {
    // const lawyer = {
    //     "lawyer_name": "John Doe",
    //     "vidhik_id": "V123456",
    //     "lawyer_password": "john123",
    //     "bar_council_no": "BCN123",
    //     "age": 30,
    //     "email": "john.doe@example.com",
    //     "photo_url": "https://images.app.goo.gl/GFHRkXec7FBceS6P9",
    //     "phone_no": "1234567890",
    //     "aadhar_no": "123456789012",
    //     "gender": "Male",
    //     "avg_price_range_per_hearing": [100, 300],
    //     "no_of_past_cases_fought": 50,
    //     "no_of_past_cases_won": 30,
    //     "rating": 4.5,
    //     "speciality": ["Criminal Defense", "Family Law"],
    //     // "practicing_court": ["Supreme Court", "High Court"],
    //     "lawyer_location": "Cityville",
    //     "languages_known": ["English", "Spanish"],
    //     "experience_in_years": 10,
    //     "endorsements": ["Entity123"],
    //     "cases_involved": ["Case123", "Case456"],
    //     "lawyer_type": ["Advocate"],
    //     "additional_ids": ["AIBE123", "OS456", "ST789", "StateName"],
    //     "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam modi nihil rem repellendus odit obcaecati debitis, nobis, laborum autem excepturi praesentium quos. Error aspernatur cum facilis aperiam ex voluptas alias!",
    //     "skills": ["Litigation", "Negotiation", "Legal Research"],
    //     "education": [
    //         {
    //             "degree": "Bachelor of Laws (LLB)",
    //             "university": "City University",
    //             "city": "Cityville",
    //             "start_year": 2008,
    //             "end_year": 2012
    //         },
    //         {
    //             "degree": "Master of Laws (LLM)",
    //             "university": "State University",
    //             "city": "Stateville",
    //             "start_year": 2012,
    //             "end_year": 2014
    //         }
    //     ]
    // };

    return (
        <Paper className='w-[400px] h-fit pb-5 border border-solid border-black shadow-panelShadow'>
            <div className='flex justify-between pt-4 px-2 items-center '>
                <div className='flex'>
                    {
                        Array.from({ length: lawyer.rating }).map((_, index) => (
                            <span key={index}><img src={star} alt="" /></span>
                        ))
                    }
                </div>
                <div className='bg-green-700 rounded-lg p-2 text-white'>
                    Open to work
                </div>
            </div>
            <center className='mt-[-20px]'>
                <img src={avatar01} alt="" width={80} />
                <h3 className='cardheading'>{lawyer.lawyer_name}</h3>

                <div className='flex justify-center  mt-2'>
                    {
                        lawyer.speciality.map((speciality, index) => (
                            <span key={index} className='leading-5 lg:text-[15px] px-1 py-[5px] lg:leading-7 font-[400] bg-[#CCF0F3] text-irisBlueColor w-fit mr-3 rounded-lg '>{speciality}</span>
                        ))
                    }
                </div>
                <h3 className='text__para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis </h3>
                <div className='flex justify-between items-center px-20 mt-5'>
                    <img src={instagram} alt="" className='h-[44px] w-[44px] cursor-pointer' />
                    <img src={linkedin} alt="" className='h-[44px] w-[44p] cursor-pointer' />
                    <img src={twitter} alt="" className='h-[44px] w-[44px] cursor-pointer' />
                    <img src={facebook} alt="" className='h-[44px] w-[44px] cursor-pointer' />
                </div>
                <div className='flex justify-between gap-2 items-center px-10 mt-10'>
                    <button className="border border-solid border-btnColor px-4 py-2 rounded-md font-semibold w-40">Message</button>
                    <button className='btn w-40'>Connect</button>
                </div>
            </center>

        </Paper>
    )
}

export default LSPCard;