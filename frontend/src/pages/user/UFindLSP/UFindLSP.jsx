import React, { useEffect, useState } from 'react'
import ULSPCard from '../../../components/LSPCard/ULSPCard'
import { lawyers } from '../../../database'
import LSPFilter from '../../../components/LSPFilter/LSPFilter'
import UMaps from '../UMaps/UMaps'
// import { Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';
import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

const UFindLSP = () => {
  const [filteredLawyers, setFilteredLawyers] = useState(lawyers);
  const [searchOption, setSearchOption] = useState('maps');

  const handleSearchOptionChange = (event) => {
    setSearchOption(event.target.value);
  };

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
    <div className='px-4'>
      <h3 className='heading'>{searchOption == 'maps' ? 'Search by Maps' : 'Find Lawyers For Your Need'}</h3>

      <ToggleButtonGroup
        value={searchOption}
        exclusive
        onChange={handleSearchOptionChange}
        aria-label="search option"
        sx={{ margin: '10px 0', borderRadius: '8px' }} // Add custom styles here
      >
        <ToggleButton
          value="maps"
          aria-label="Search by Maps"
          sx={{
            backgroundColor: searchOption === 'maps' ? '#2196f3' : '#fff',
            color: searchOption === 'maps' ? '#fff' : '#2196f3',
            '&:hover': {
              backgroundColor: '#1565c0',
              color: '#fff',
            },
          }}
        >
          Search by Maps
        </ToggleButton>
        <ToggleButton
          value="filter"
          aria-label="Search by Filter"
          sx={{
            backgroundColor: searchOption === 'filter' ? '#2196f3' : '#fff',
            color: searchOption === 'filter' ? '#fff' : '#2196f3',
            '&:hover': {
              backgroundColor: '#1565c0',
              color: '#fff',
            },
          }}
        >
          Search by Filter
        </ToggleButton>
      </ToggleButtonGroup>

      {searchOption === 'maps' && <UMaps />}

      {searchOption === 'filter' && (
        <div className='flex justify-between px-10'>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[30px]  lg:mt-[55px] '>
            {filteredLawyers.map((lawyer) => (
              <ULSPCard person={lawyer} key={lawyer.id} />
            ))}
          </div>
          <div>
            <LSPFilter onFilterChange={handleFilterChange} setFilteredLawyers={setFilteredLawyers} />
          </div>
        </div>
      )}
    </div>
  )
}

export default UFindLSP