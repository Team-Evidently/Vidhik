import * as React from 'react';

import { TextField, Typography, Paper, Box, Button, Container, Snackbar, OutlinedInput, MenuItem, InputLabel, FormControl, Input, Select, FormControlLabel, Checkbox } from '@mui/material';
import { DriveFolderUpload as DriveFolderUploadIcon, Visibility, VisibilityOff } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 700,
    bgcolor: 'background.paper',
    border: '1px solid',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

export default function ArbDocModal() {
    const [open, setOpen] = React.useState(false);
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [isDetailsAccepted, setIsDetailsAccepted] = React.useState(false);
    const [uploadedFile, setUploadedFile] = React.useState(null);

    // Add state for input fields
    const [name, setName] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [occupation, setOccupation] = React.useState('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSelectedFile(null);
    };

    const handleBoxClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        console.log(selectedFile);
        setSnackbarOpen(true);
        setOpen(false);
        // Handle the form data here with the input field values and the uploaded file
        const formData = {
            name,
            phoneNumber,
            email,
            gender,
            address,
            occupation,
            selectedFile,
        };
        console.log(formData);
        setUploadedFile(selectedFile); // Set the uploaded file state
        localStorage.setItem('arbDocFormData', JSON.stringify(formData));
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const handleCheckboxChange = (e) => {
        setIsDetailsAccepted(e.target.checked);
    };

    return (
        <div>
            <Container>
                <Box>
                    <Typography className='flex justify-center' variant="h6" component="h2" gutterBottom>
                        Upload Your Details
                    </Typography>

                    {/* Name and Phone Number */}
                    <div className="input-group mb-10">
                        <FormControl sx={{ mr: 2, width: 'calc(50% - 8px)' }}>
                            <InputLabel htmlFor="name-input">Name</InputLabel>
                            <OutlinedInput id="name-input" value={name} onChange={(e) => setName(e.target.value)} variant="outlined" />
                        </FormControl>
                        <FormControl sx={{ width: 'calc(50% - 8px)' }}>
                            <InputLabel htmlFor="phone-input">Phone Number</InputLabel>
                            <OutlinedInput id="phone-input" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} variant="outlined" />
                        </FormControl>
                    </div>

                    {/* Email and Gender */}
                    <div className="input-group mb-10">
                        <FormControl sx={{ mr: 2, width: 'calc(50% - 8px)' }}>
                            <InputLabel htmlFor="email-input">Email ID</InputLabel>
                            <OutlinedInput id="email-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                        </FormControl>
                        <FormControl sx={{ width: 'calc(50% - 8px)' }}>
                            <InputLabel htmlFor="gender-input">Gender</InputLabel>
                            <Select
                                id="gender-input"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                label="Gender"
                                variant="outlined"
                            >
                                <MenuItem value="">Select Gender</MenuItem>
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                                <MenuItem value="other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    {/* Address */}
                    <div className="input-group mb-10">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="address-input">Address</InputLabel>
                            <OutlinedInput id="address-input" value={address} onChange={(e) => setAddress(e.target.value)} variant="outlined" />
                        </FormControl>
                    </div>

                    {/* Occupation */}
                    <div className="input-group mb-10">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="occupation-input">Occupation</InputLabel>
                            <OutlinedInput id="occupation-input" value={occupation} onChange={(e) => setOccupation(e.target.value)} variant="outlined" />
                        </FormControl>
                    </div>

                    {/* File Input */}
                    <Typography variant="body2" color="text.secondary" gutterBottom className='mb-5'>
                        Attach a document or PDF containing the required information. The document should include details such as name, phone number, email, address, occupation, gender, nationality, etc.
                    </Typography>
                    <Box
                        onClick={handleBoxClick}
                        sx={{ border: '1px solid grey', width: '100%', marginTop: '30px', cursor: 'pointer' }}
                    >
                        <Paper
                            sx={{ border: '1px dashed grey', boxShadow: '2px 2px 3px 0px rgba(0,0,0,0.5), -2px -2px 3px 0px rgba(255,255,255,0.5)' }}
                            className='w-94 h-40 m-2 bg-blue-50 flex justify-center items-center flex-col'
                        >
                            <DriveFolderUploadIcon style={{ fontSize: 50 }} />
                            <Typography variant="h6" className='text-blue-900'>Drag and Drop</Typography>
                            <Typography variant="body2">Your documents here or browse to Upload</Typography>
                            <Typography variant="caption" color="text.secondary">Only pdf/jpg/jpeg's</Typography>
                            <input
                                id="fileInput"
                                type="file"
                                style={{ display: 'none' }}
                                onChange={handleFileChange}
                            />
                        </Paper>
                    </Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isDetailsAccepted}
                                onChange={handleCheckboxChange}
                                color="primary"
                            />
                        }
                        label="I accept that all the details are correct and true"
                    />
                    {uploadedFile && (
                        <Typography variant="subtitle1" className="cardheading">
                            File uploaded: {uploadedFile.name}
                        </Typography>
                    )}
                    <button
                        className={`btn mt-5 ml-5 mb-5 text-white py-2 rounded-md ${isDetailsAccepted ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 hover:bg-gray-500'}`}
                        type='submit'
                        onClick={handleUpload}
                        disabled={!isDetailsAccepted}
                    >
                        Upload
                    </button>
                </Box>
            </Container>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Document uploaded successfully"
            />
        </div>
    );
}
