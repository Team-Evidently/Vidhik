import React, { useState } from 'react'
import Sidebar from '../../../components/sidenav'
import starIcon from '../../../assets/Star.png'
import LSPAbout from '../LSP_About/LSPAbout'
import Feedback from '../../../components/Feedback/Feedback'
import lawyer01 from "../../../assets/lawyer01.jpeg"

const Profile = () => {

    const [tab, settab] = useState('about')
    return (
        <div className="bg-[#F5F5F5] min-h-screen flex">
            <main>
                <section>
                    <div className='max-w-[1170px] px-5 mx-auto'>
                        <div className='grid md:grid-cols-3 gap-[50px]'>
                            <div className="md:col-span-2">
                                <div className="flex items-center gap-5 ">
                                    <figure className='max-w-[200px] max-h-[200px]'>
                                        <img src={lawyer01} alt="" className='w-full' />
                                    </figure>


                                    <div>
                                        <span className='bg-[#CCF0F3] text-irisBlueColor py-2 px-6 lg:py-2 lg:px-6 text-[12pz] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>Surgeon</span>
                                        <h3 className='text-headingColor text-[22px] leading-9 mt-3 font-bold'>Karthikeya Mishra</h3>
                                        <div className="flex items-center gap-[6px]">
                                            <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                                                <img src={starIcon} alt="" />4.8
                                            </span>
                                            <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>(272)</span>
                                        </div>
                                        <p className='text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam modi nihil rem repellendus odit obcaecati debitis, nobis, laborum autem excepturi praesentium quos. Error aspernatur cum facilis aperiam ex voluptas alias!</p>
                                    </div>
                                </div>
                                <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
                                    <button className={`${tab === 'about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={() => { settab('about') }}>About</button>
                                    <button className={`${tab === 'feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`} onClick={() => { settab('feedback') }}>Feedback</button>

                                </div>
                                <div className='mt-[50px]'>
                                    {
                                        tab === 'about' && <LSPAbout />
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