import React, { useEffect, useState } from 'react'
import CustomStepper from '../../../components/CustomStepper/CustomStepper'
import { arbitrators } from '../../../database'
import LSPCard from '../../../components/LSPCard/LSPCard'
import LSPFilter from '../../../components/LSPFilter/LSPFilter'
import { lawyers } from '../../../database'
import ArbritratorFilter from '../../../components/ArbritratorFilter/ArbritratorFilter'
import ArbDocModal from '../../../components/ArbDocModal/ArbDocModal'
import { Grid, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import { Button } from 'react-scroll'

const FindArbritrator = () => {
  const [filteredLawyers, setFilteredLawyers] = useState(lawyers);
  const [activeStep, setActiveStep] = useState(0);
  const [arbDocFormData, setArbDocFormData] = useState(null);


  const [selectedArbitrators, setSelectedArbitrators] = useState([]); //

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


  const handleSelect = (arbitrator) => {
    // Retrieve the current selected arbitrators from localStorage
    const selectedArbitrators = JSON.parse(localStorage.getItem("selectedArbritrators")) || [];

    // Check if the arbitrator is already selected
    const isSelected = selectedArbitrators.some((selected) => selected.id === arbitrator.id);

    // if (isSelected) {
    //   // If selected, remove from the selection
    //   const indexToRemove = selectedArbitrators.findIndex((selected) => selected.id === arbitrator.id);
    //   selectedArbitrators.splice(indexToRemove, 1);
    // } else {
    //   // If not selected, push into the selection
    //   selectedArbitrators.push(arbitrator);
    // }

    selectedArbitrators.push(arbitrator);
    setSelectedArbitrators(selectedArbitrators);

    // Update localStorage with the modified selection
    localStorage.setItem("selectedArbritrators", JSON.stringify(selectedArbitrators));

  };

  useEffect(() => {
    setSelectedArbitrators(JSON.parse(localStorage.getItem("selectedArbritrators")) || []);
  }, []);


  const handleUpdateStep = (newStep) => {
    // Update the active step in the state
    setActiveStep(newStep);
    localStorage.setItem("currentStep", activeStep + 1);
  };

  useEffect(() => {
    if (activeStep == 1) {
      const FormData = JSON.parse(localStorage.getItem("arbDocFormData")) || [];
      console.log(FormData);
      setArbDocFormData(FormData);
    }
  }
    , [activeStep]);

  const handleSubmit = () => {

    console.log("dsdas");
  };

  return (
    <div>
      <CustomStepper updateStep={handleUpdateStep} />
      <div className='flex justify-between'>
        {activeStep === 0 && (
          <>          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[30px]  lg:mt-[55px] '>
            {arbitrators.map((arbitrator) => (
              <LSPCard
                person={arbitrator}
                key={arbitrator.id}
                handleSelect={() => handleSelect(arbitrator)}
                selectedArbitrators={selectedArbitrators}
              />
            ))}
          </div>
            <div>
              <ArbritratorFilter onFilterChange={handleFilterChange} setFilteredLawyers={setFilteredLawyers} />
            </div>

          </>

        )}
        {activeStep === 1 && (
          <div className=" px-2 w-[80%] ml-7 text-center rounded-md"><ArbDocModal /></div>
        )}
        {activeStep === 2 && (
  <div>
    {localStorage.getItem("arbDocFormData") ? (
      <Paper elevation={3} style={{ padding: '20px', margin: '20px',width:'60vw' }}>
        <Typography variant="h5" gutterBottom>
          ArbDoc Form Data:
        </Typography>
        <LSPCard person={localStorage.getItem("selectedArbritrators")} />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <List>
              <ListItem>
                <h2 className='cardheading'> {`Name: ${arbDocFormData.name}`} </h2>
              </ListItem>
              <ListItem>
              <h2 className='cardheading'>{`Phone Number: ${arbDocFormData.phoneNumber}`}</h2>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <List>
              <ListItem>
              <h2 className='cardheading'>{`Email: ${arbDocFormData.email}`} </h2>
              </ListItem>
              <ListItem>
              <h2 className='cardheading'>{`Gender: ${arbDocFormData.gender}`}</h2>
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <List>
          <ListItem>
          <h2 className='cardheading'>{`Address: ${arbDocFormData.address}`} </h2>
          </ListItem>
          <ListItem>
          <h2 className='cardheading'>{`Occupation: ${arbDocFormData.occupation}`} </h2>
          </ListItem>
          {/* You can add other ListItems for additional properties */}
        </List>
        <button className='btn' onClick={handleSubmit}>
          Submit
        </button>
        </Paper>
 ) : (
      <Typography variant="body1" gutterBottom>
        ArbDoc Form Data not found in local storage.
      </Typography>
    )}
  </div>
)}

      </div>
    </div>
  );

}

export default FindArbritrator