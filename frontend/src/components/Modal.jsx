import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className='text-white' onClick={handleOpen}>Request an Appointment</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  sx={style}>
          <Typography className='flex justify-center' id="modal-modal-title" variant="h6" component="h2">
            Upload Your Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='flex flex-col items-center'>
            <TextField id="outlined-basic" label="Name" variant="outlined" className='w-96 '  sx={{ m: 2 }}/>
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" className='w-96' sx={{ m: 2 }}/>
            <TextField id="outlined-basic" label="Email ID" variant="outlined" className='w-96' sx={{ m: 2 }}/>
            <Box sx={{ border: '1px solid grey', width: '24rem', marginTop: '30px'}}>
            <Box sx={{ border: '1px dashed grey'}} className=' w-94 h-40 m-2 bg-blue-50 flex justify-center items-center flex-col'>
                <DriveFolderUploadIcon style={{ fontSize: 50 }}/>
                <h1 className='text-3xl text-blue-900'>Drag and Drop</h1>
                <h3>Your documents here or browse to Upload</h3>
                <h5 className='text-xs'>Only pdf/jpg/jpeg's</h5>
            </Box>
            </Box>
          <button className='bg-blue-900 mt-14 w-32 h-10 rounded-lg text-xl text-blue-50'>Upload</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
