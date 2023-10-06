import React from 'react'
import heroImg from "../../assets/heroImg.png";
import { Card } from '@material-tailwind/react';
import shield from "../../assets/shield.png";
import phone from "../../assets/Phone.png";
import password from "../../assets/Password.png";


const Hero = () => {
    return (
        <section className='hero__section pt-[60px] 2xl:h-[800px]'>
            <div className="container">
                <div className="flex flex-col mx-[10%] lg:flex-row gap-[100px] items-center justify-between  ">
                    <div className=''>
                        <div className='lg:w-[690px]'>
                            <h1 className='text-[36px] heading leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] '>
                                Find the right lawyer for your needs,<br />at the right price.
                            </h1>
                            <p className='text__para'>
                            Discover the perfect lawyer for your case with our secure and trusted platform. Our 256-bit encrypted system ensures your information is safe. Join over 10K clients who have found convenient legal solutions, available 24/7.                            </p>

                            <Card className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] border-none shadow-none'>
                                <Card className='w-1/3 flex flex-col items-center justify-center'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <img src={password} alt="" className='h-[50px] w-[50px]' />
                                        <h2 className='heading text-[20px]'>Secured</h2>
                                    </div>

                                    <p className='text__para'>256 bit encryted</p>
                                </Card>

                                <Card className='w-1/3 flex flex-col items-center justify-center'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <img src={shield} alt="" className='h-[50px] w-[50px]' />
                                        <h2 className='heading text-[20px]' >Trusted</h2>
                                    </div>

                                    <p className='text__para'>4.8k Users</p>
                                </Card>
                                <Card className='w-1/3 flex flex-col items-center justify-center'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <img src={phone} alt="" className='h-[50px] w-[50px]' />
                                        <h2 className='heading text-[20px]'>Convenient</h2>
                                    </div>

                                    <p className='text__para'>Calls 24 x 7</p>
                                </Card>
                            </Card>
                        </div>
                        <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center  justify-between lg:gap-[30px]'>
                            <div>
                                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>1K +</h2>
                                <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                                <p className='text__para'>Lawyers</p>
                            </div>
                            <div>
                                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>10K +</h2>
                                <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                                <p className='text__para'>Clients</p>
                            </div>
                            <div>
                                <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>1K +</h2>
                                <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                                <p className='text__para'>Cases Tracked</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[30px] justify-end'>
                        <div>
                            <img className="w-full " src={heroImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero