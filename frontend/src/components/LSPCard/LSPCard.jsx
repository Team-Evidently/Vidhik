import React, { useEffect } from 'react';
import { Paper } from '@mui/material';
import star from '../../assets/Star.png';
import avatar01 from '../../assets/avatar01.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import { useNavigate } from 'react-router-dom';

const LSPCard = ({ person, handleSelect = () => { }, selectedArbitrators = [] }) => {
  const navigate = useNavigate ();
  const isLawyer = person.lawyer_name != null;
  const isArbitrator = person.arbitrator_name != null;


  if (!isLawyer && !isArbitrator) {
    return <div />;
  }

  const handleClick = () => {
    console.log("sskdksjd");
    navigate(`/client/profile/${person.id}`);
  };


  const title = isLawyer ? person.lawyer_name : person.arbitrator_name;
  const profession = isLawyer ? 'Lawyer' : person.profession;
  const speciality = isLawyer ? person.speciality : [];

  return (
    <Paper className=' w-[400px] h-fit pb-5 border border-solid border-black ' sx={{
      backgroundColor: selectedArbitrators.some((selected) => selected.vidhik_id === person.vidhik_id)
        ? '#90EE90'
        : '#E5F6F4',

    }} >
      <div className='flex justify-between pt-4 px-2 items-center '>
        <div className='flex'>
          {Array.from({ length: person.rating }).map((_, index) => (
            <span key={index}><img src={star} alt="" /></span>
          ))}
        </div>
        <div className='bg-green-700 rounded-lg p-2 text-white'>
          Open to work
        </div>
      </div>
      <center className='mt-[-20px]'>
        <img
          src={person.photo_url}
          alt=""
          width={80}
          style={{
            width: '80px',  // Set the desired width
            height: '80px', // Set the desired height
            objectFit: 'cover', // Crop the image to cover the specified dimensions
            objectPosition: 'center', // Center the image within the container
            borderRadius: '50%', // Optional: Apply border-radius for a circular image
          }}
        />

        <h3 className='cardheading'>{title}</h3>

        <div className='flex justify-center mt-2'>
          {speciality.map((speciality, index) => (
            <span key={index} className='leading-5 lg:text-[15px] px-1 py-[5px] lg:leading-7 font-[400] bg-[#CCF0F3] text-irisBlueColor w-fit mr-3 rounded-lg '>{speciality}</span>
          ))}
          {
            isArbitrator && profession && <span className='leading-5 lg:text-[15px] px-1 py-[5px] lg:leading-7 font-[400] bg-[#CCF0F3] text-irisBlueColor w-fit mr-3 rounded-lg '>{profession}</span>
          }
        </div>

        <h3 className='text__para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis </h3>
        <div className='flex justify-between items-center px-20 mt-5'>
          <img src={instagram} alt="" className='h-[44px] w-[44px] cursor-pointer' />
          <img src={linkedin} alt="" className='h-[44px] w-[44p] cursor-pointer' />
          <img src={twitter} alt="" className='h-[44px] w-[44px] cursor-pointer' />
          <img src={facebook} alt="" className='h-[44px] w-[44px] cursor-pointer' />
        </div>
        {
          isArbitrator ? (
            <button className='btn w-40' onClick={handleSelect}>
              {selectedArbitrators.some((selected) => selected.vidhik_id === person.vidhik_id) ? 'Selected' : 'Select'}
            </button>

          ) : (
            <div className='flex justify-between gap-2 items-center px-10 mt-10'>
              <button className="border border-solid border-btnColor px-4 py-2 rounded-md font-semibold w-40">Message</button>
              <button className='btn w-40' onClick={handleClick}>Connect</button>
            </div>
          )

        }

      </center>

    </Paper>
  );
};

export default LSPCard;
