import React from "react";
import BasicModal from "../../../components/Modal";

const Sidecard = ({lawyer}) => {
    return (
        <div className='shadow-panelShadow p-3 lg:p-5 rounded-md lg:h-[40vh]  '>
            <div className="flex items-center justify-between">
                <p className="text__para mt-0 font-semibold">Avg Hearing Price </p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                   {lawyer.avg_price_range_per_hearing.map((price, index) => (
                       <span key={index}> ${index==0 ? (price + '-'):(price)}</span>
                   ))}
                </span>
            
            </div>
            <span className="text-[12px] leading-5 text-gray-500">(Variable upon discussion)</span>
            <div className='mt-[30px]'>
                <p className="text__para mt-0 font-semibold text-headingColor">
                    Available Time Slots:
                </p>
                <ul className="mt-3">
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">Sunday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30PM</p>

                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">Tuesday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30PM</p>

                    </li>
                    <li className="flex items-center justify-between mb-2">
                        <p className="text-[15px] leading-6 text-textColor font-semibold">Wednesday</p>
                        <p className="text-[15px] leading-6 text-textColor font-semibold">4:00 PM - 9:30PM</p>

                    </li>
                </ul>
            </div>
            <div className="btn px-2 w-[80%] ml-7 text-center rounded-md"><BasicModal /></div>
               
            {/* <button className="btn px-2 w-full rounded-md mt-4">ek aur socho</button> */}
        </div>
    )
}

export default Sidecard