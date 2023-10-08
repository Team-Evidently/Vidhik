import * as React from 'react';
import { TextField, Typography, Paper, Box, Button, Container, Snackbar, OutlinedInput, MenuItem, InputLabel, FormControl, Input, Select } from '@mui/material';
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

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        // Clear selected file on modal close
        setSelectedFile(null);
    };

    const handleBoxClick = () => {
        // Trigger file input click
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (e) => {
        // Handle selected files
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = () => {
        // Upload selected file
        console.log(selectedFile);
        // Show Snackbar on successful upload
        setSnackbarOpen(true);
        setOpen(false);
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <div>
            <Container>
                <Box >
                    <Typography className='flex justify-center' variant="h6" component="h2" gutterBottom>
                        Upload Your Details
                    </Typography>

                    {/* Name and Phone Number */}
                    <div className="input-group mb-10">
                        <FormControl sx={{ mr: 2, width: 'calc(50% - 8px)' }}>
                            <InputLabel htmlFor="name-input">Name</InputLabel>
                            <OutlinedInput id="name-input" variant="outlined" sx={neumorphicStyle} />
                        </FormControl>
                        <FormControl sx={{ width: 'calc(50% - 8px)' }}>
                            <InputLabel htmlFor="phone-input">Phone Number</InputLabel>
                            <OutlinedInput id="phone-input" type="tel" variant="outlined" sx={neumorphicStyle} />
                        </FormControl>
                    </div>

                    {/* Email and Gender */}
                    <div className="input-group mb-10">
                        <FormControl sx={{ mr: 2, width: 'calc(50% - 8px)' }}>
                            <InputLabel htmlFor="email-input">Email ID</InputLabel>
                            <OutlinedInput id="email-input" type="email" variant="outlined" sx={neumorphicStyle} />
                        </FormControl>
                        <FormControl sx={{ width: 'calc(50% - 8px)' }}>
                            <InputLabel htmlFor="gender-input">Gender</InputLabel>
                            <OutlinedInput id="gender-input" variant="outlined" sx={neumorphicStyle} />
                        </FormControl>
                    </div>

                    {/* Address */}
                    <div className="input-group mb-10">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="address-input">Address</InputLabel>
                            <OutlinedInput id="address-input" variant="outlined" sx={neumorphicStyle} />
                        </FormControl>
                    </div>

                    {/* Occupation */}
                    <div className="input-group mb-10">
                        <FormControl fullWidth>
                            <InputLabel htmlFor="occupation-input">Occupation</InputLabel>
                            <OutlinedInput id="occupation-input" variant="outlined" sx={neumorphicStyle} />
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
                            sx={{ border: '1px dashed grey', ...neumorphicStyle }}
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
                    {selectedFile && (
                        <Typography variant="subtitle1" className="cardheading">
                            File name: {selectedFile.name}
                        </Typography>
                    )}
                    <button
                      
                        className='bg-blue-900 mt-5 w-32 h-10 rounded-lg text-xl text-blue-50'
                        type='submit'
                        onClick={handleUpload}
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

const neumorphicStyle = {
    boxShadow: '2px 2px 3px 0px rgba(0,0,0,0.5), -2px -2px 3px 0px rgba(255,255,255,0.5)',
};