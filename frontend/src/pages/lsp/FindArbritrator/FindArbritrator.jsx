import React, { useEffect, useState } from 'react'
import CustomStepper from '../../../components/CustomStepper/CustomStepper'
import { arbitrators } from '../../../database'
import LSPCard from '../../../components/LSPCard/LSPCard'
import LSPFilter from '../../../components/LSPFilter/LSPFilter'
import { lawyers } from '../../../database'

const FindArbritrator = () => {
    const [filteredLawyers, setFilteredLawyers] = useState(lawyers);

  const handleFilterChange = (filters) => {
    // Apply filters to the lawyers array
    const updatedLawyers = lawyers.filter((lawyer) => {
      let isMatch = true;
  
      if (filters.court && !lawyer.practicing_court.includes(filters.court)) {
        isMatch = false;
      }
  
      if (filters.starRating && lawyer.rating !== parseInt(filters.starRating)) {
        isMatch = false;
      }
  
      if (filters.caseType && !lawyer.speciality.includes(filters.caseType)) {
        isMatch = false;
      }
  
      if (filters.languages.length > 0 && !lawyer.languages_known.includes(lawyer.language)) {
        isMatch = false;
      }
  
      if (filters.locations.length > 0 && !lawyer.lawyer_location.includes(lawyer.location)) {
        isMatch = false;
      }
  
      // Add more criteria as needed
  
      return isMatch;
    });
  
    // Update the filteredLawyers state
    setFilteredLawyers(updatedLawyers);
  };

  useEffect(() => {
    console.log(filteredLawyers);
  }
  , [filteredLawyers]);

    return (
        <div>
            <CustomStepper />
            <div className='flex justify-between'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[30px]  lg:mt-[55px] '>
                    {
                        arbitrators.map(arbitrators => (
                            <LSPCard person={arbitrators} key={arbitrators.id} />
                        ))
                    }
                </div>
                <div>
                    <LSPFilter onFilterChange={handleFilterChange} setFilteredLawyers={setFilteredLawyers} />
                </div>

            </div>


        </div>
    )
}

export default FindArbritrator