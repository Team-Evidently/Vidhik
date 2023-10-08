import React from 'react'
import { formatDate } from '../../../utils/formatDate'
import { Card } from '@mui/material'
import CustomPie from "../../../components/Charts/CustomPie"
import { CustomLine } from '../../../components/Charts/Line';


const data = [24, 7, 3];
const LSPAbout = ({ lawyer }) => {

    return (
        <div>
            <div>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>About of <span className='text-irisBlueColor font-bold text-[24px] leading-9 '>{lawyer.lawyer_name}</span></h3>
                <p className="text__para">{lawyer.bio}</p>
            </div>
            <div>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold mt-5'>Details</h3>
                <ul className='pt-4 md:p-5'>
                    <h3 className='text-irisBlueColor'>Bar Council ID: <span className='text-[16px] leading-6 font-medium text-headingColor'>{lawyer.bar_council_no}</span></h3>
                    <h3 className='text-irisBlueColor'>Languages I speak:
                        <span>
                            {
                                lawyer.languages_known.map((language, index) => (
                                    <span key={index} className='text-[16px] leading-6 font-medium text-headingColor'>{language}</span>
                                ))
                            }
                        </span>
                    </h3>
                    <h3 className='text-irisBlueColor'>Skills:
                        <span>
                            {
                                lawyer.skills.map((language, index) => (
                                    <span key={index} className='text-[16px] leading-6 font-medium text-headingColor'>{language}</span>
                                ))
                            }
                        </span>
                    </h3>
                    <Card className='p-5 mt-5 h-[300px] w-[500px] flex justify-center items-center'>
                    <CustomPie data={data} />
                    </Card>
                    <Card className='p-5 mt-5 h-[300px] w-[500px]'>
                        <CustomLine />
                    </Card>
                </ul>
            </div>
            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
                <ul className='pt-4 md:p-5'>
                    {lawyer.education.map((education, index) => (
                        <li key={index} className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                            <div>
                                <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{`${education.start_year} - ${education.end_year}`}</span>
                                <p className='text-[16px] leading-6 font-medium text-textColor'>{education.degree}</p>
                            </div>
                            <p className='text-[16px] leading-5 font-medium text-textColor'>{`${education.university}, ${education.city}`}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    {lawyer.cases_involved.map((caseId, index) => (
                        <li key={index} className='p-4 rounded bg-[#fff9ea]'>
                            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                                {formatDate('12-04-2000')} - {formatDate('12-04-2002')}
                            </span>
                            {/* <p className='text-[16px] leading-6 font-medium text-textColor'>{getCaseTitle(caseId)}</p>
                            <p className='text-[16px] leading-5 font-medium text-textColor'>{getCaseLocation(caseId)}</p> */}
                            <p className='text-[16px] leading-6 font-medium text-textColor'>caseid</p>
                            <p className='text-[16px] leading-5 font-medium text-textColor'>case location</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default LSPAbout