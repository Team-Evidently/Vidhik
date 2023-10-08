import React, { useEffect, useState } from 'react'
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import StarRateIcon from '@mui/icons-material/StarRate';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useNavigate } from 'react-router-dom';
import { lawyers } from '../../database';
import { FormGroup, FormControlLabel, Checkbox, Typography } from '@mui/material';

const caseTypeOptions = [
    'All',
    'Criminal',
    'Family Dispute',
    'Civil',
    'Custody',
    'Murder',
    // Add more case type options as needed
];


const languageOptions = ['Hindi', 'English', 'Marathi', 'Tamil', 'Telugu'];
const locationOptions = ['Mumbai', 'Delhi', 'Bangalore', 'Kolkata'];

const LSPFilter = ({onFilterChange,setFilteredLawyers}) => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    //   const { userName, loyaltyScore } = props;
    const [filters, setFilters] = useState({
        court: "",
        starRating: "",
        caseType: "",
        avgfees: "",
        languages: [],
        locations: [], // Added fees filter
        // Add more filter criteria as needed
    });

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    // Calculate the range of lawyers to display on the current page
    //   const startIndex = (currentPage - 1) * LawyersPerPage;
    //   const endIndex = startIndex + LawyersPerPage;

    const startIndex = (currentPage - 1) * 1;
    const endIndex = startIndex + 1;



    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
        console.log(filters);
    };

    useEffect(() => {
        console.log(filters);
    }, [filters]);

    const filterLawyers = (lawyers) => {
        return lawyers.filter((lawyer) => {
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

            // if (filters.avgfees && lawyer.fees !== filters.avgfees) {
            //     isMatch = false;
            // }

            if (
                filters.languages.length > 0 &&
                !lawyer.languages_known.includes(lawyer.language)
            ) {
                isMatch = false;
            }
            if (
                filters.locations.length > 0 &&
                !lawyer.lawyer_location.includes(lawyer.location)
            ) {
                isMatch = false;
            }

            return isMatch;
        });
    };


    const handleFilterSubmit = (e) => {
        e.preventDefault();
        // Instead of filtering locally, call the onFilterChange prop
        onFilterChange(filters);
        
      };

      const lawyersToDisplay = filterLawyers(lawyers).slice(
        startIndex,
        endIndex
      );

      useEffect(() => {
        console.log(lawyersToDisplay);
        setFilteredLawyers(filterLawyers(lawyers));

        }, [filters, currentPage]);

    const handleCheckboxChange = (property, value) => {
        const updatedValues = [...filters[property]];

        if (updatedValues.includes(value)) {
            // If value is already selected, remove it
            updatedValues.splice(updatedValues.indexOf(value), 1);
        } else {
            // If value is not selected, add it
            updatedValues.push(value);
        }

        setFilters({
            ...filters,
            [property]: updatedValues,
        });
    };




    return (
        <div className='bg-[#D9D9D9] h-fit w-[500px] rounded-lg'>
            <center>
            <h3 className='heading mt-4 pt-4'>Filters</h3>
            </center>
            <div className='flex items-center justify-center'>
                <form className="mt-4 p-5  " onSubmit={handleFilterSubmit}>
                    <FormControl fullWidth variant="outlined" className=" my-5 " sx={{marginBottom:"20px"}}>
                        <InputLabel htmlFor="court" className='text-xl text-darkcolor'>Court Practicing In</InputLabel>
                        <Select
                            id="court"
                            name="court"
                            value={filters.court}
                            onChange={handleFilterChange}
                            label="Court Practicing In"
                        >
                            <MenuItem value="">All</MenuItem>

                            <MenuItem value="Supreme Court">Supreme Court</MenuItem>
                            <MenuItem value="High Court">High Court</MenuItem>
                            <MenuItem value="District Court">District Court</MenuItem>
                            <MenuItem value="Magistate Court">Magistate</MenuItem>
                            <MenuItem value="Family Court">Family Court</MenuItem>
                            <MenuItem value="Fast Track Court">Fast Track Court</MenuItem>
                            {/* Add more court options as needed */}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth variant="outlined" className="mb-2 my-5" sx={{marginBottom:"20px"}}>
                        <InputLabel htmlFor="starRating">Star Rating</InputLabel>
                        <Select
                            id="starRating"
                            name="starRating"
                            value={filters.starRating}
                            onChange={handleFilterChange}
                            label="Star Rating"
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="1">
                                <StarRateIcon color={"primary"} />
                            </MenuItem>
                            <MenuItem value="2">
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />

                            </MenuItem>
                            <MenuItem value="3">
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                            </MenuItem>
                            <MenuItem value="4">
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                            </MenuItem>
                            <MenuItem value="5">
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                            </MenuItem>
                            <MenuItem value="6">
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                            </MenuItem>
                            <MenuItem value="7">
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                                <StarRateIcon color="primary" />
                            </MenuItem>
                        </Select>
                    </FormControl>


                    <div className="mb-[20px] my-5" >
                    <h3 className='text__para text-black text-[24px] mb-5' gutterBottom>
                            Case Type
                        </h3>
                        <div className="flex flex-wrap">
                            {caseTypeOptions.map((option) => (
                                <div
                                    key={option}
                                    className={`case-type-option text-black font-medium border border-solid border-black ${filters.caseType === option
                                        ? 'bg-[#9ABFF1] '
                                        : 'bg-white'
                                        } rounded-lg px-4 py-2 mr-2 mb-2 cursor-pointer`}

                                    onClick={() => handleFilterChange({ target: { name: 'caseType', value: option === 'All' ? '' : option } })}


                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </div>
                    <FormControl fullWidth variant="outlined" className="mb-2 my-5" sx={{marginBottom:"20px"}}>
                    <h3 className='text__para text-black text-[24px]' gutterBottom>
                            Fees
                        </h3>
                        <Select
                            id="avgfees"
                            name="avgfees"
                            value={filters.avgfees}
                            onChange={handleFilterChange}
                            label="Fees"
                        >
                            <MenuItem value="">All</MenuItem>
                            <MenuItem value="10k-20k">10k-20k</MenuItem>
                            <MenuItem value="20k-30k">20k-30k</MenuItem>
                            <MenuItem value="30k-40k">30k-40k</MenuItem>
                            <MenuItem value="40k-50k">40k-50k</MenuItem>
                            <MenuItem value="50k-60k">50k-60k</MenuItem>
                            {/* Add more fees options as needed */}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth className="mb-2 my-5 " sx={{marginBottom:"20px"}}>
                        <h3 className='text__para text-black text-[28px]' gutterBottom>
                            Language
                        </h3>
                        <FormGroup>
                            {languageOptions.map((language) => (
                                <FormControlLabel
                                    key={language}
                                    control={
                                        <Checkbox
                                            checked={filters.languages.includes(language)}
                                            onChange={() => handleCheckboxChange('languages', language)}
                                            name={language}
                                        />
                                    }
                                    label={language}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <FormControl fullWidth className="mb-2 my-5 ">
                    <h3 className='text__para text-black text-[28px]' gutterBottom>
                            Location
                        </h3>
                        <FormGroup>
                            {locationOptions.map((location) => (
                                <FormControlLabel
                                    key={location}
                                    control={
                                        <Checkbox
                                            checked={filters.locations.includes(location)}
                                            onChange={() => handleCheckboxChange('locations', location)}
                                            name={location}
                                        />
                                    }
                                    label={location}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                    <center>
                    <button className='btn text-medium tracking-wide text-[20px]'>
                            Apply Filters
                    </button>
                    </center>
                </form>
            </div>

        </div>
    )
}

export default LSPFilter