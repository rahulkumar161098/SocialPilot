// import * as React from 'react';
// // import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import DialogTitle from '@mui/material/DialogTitle';
// import Dialog from '@mui/material/Dialog';
// import PersonIcon from '@mui/icons-material/Person';
// import AddIcon from '@mui/icons-material/Add';
// // import Typography from '@mui/material/Typography';
// import { blue } from '@mui/material/colors';
// import {
//   Box,
//   Grid,
//   Typography,
//   TextField,
//   Button,
//   Paper,
// } from "@mui/material";

// const emails = ['username@gmail.com', 'user02@gmail.com'];

// export interface SimpleDialogProps {
//   open: boolean;
//   selectedValue: string;
//   onClose: (value: string) => void;
// }

// function SimpleDialog(props: SimpleDialogProps) {
//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const handleListItemClick = (value: string) => {
//     onClose(value);
//   };

//   return (
//     // <Dialog onClose={handleClose} open={open}>
//     //   <DialogTitle>Set backup account</DialogTitle>
//     //   <List sx={{ pt: 0 }}>
//     //     {emails.map((email) => (
//     //       <ListItem disablePadding key={email}>
//     //         <ListItemButton onClick={() => handleListItemClick(email)}>
//     //           <ListItemAvatar>
//     //             <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
//     //               <PersonIcon />
//     //             </Avatar>
//     //           </ListItemAvatar>
//     //           <ListItemText primary={email} />
//     //         </ListItemButton>
//     //       </ListItem>
//     //     ))}
//     //     <ListItem disablePadding>
//     //       <ListItemButton
//     //         autoFocus
//     //         onClick={() => handleListItemClick('addAccount')}
//     //       >
//     //         <ListItemAvatar>
//     //           <Avatar>
//     //             <AddIcon />
//     //           </Avatar>
//     //         </ListItemAvatar>
//     //         <ListItemText primary="Add account" />
//     //       </ListItemButton>
//     //     </ListItem>
//     //   </List>
//     // </Dialog>
//     <Dialog onClose={handleClose} open={open}>
//     <Box
//       sx={{
//         height: "auto",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: " #f70d0d",
//         p: 2,
//       }}
//     >
//       <Paper
//         elevation={6}
//         sx={{
//           width: "900px",
//           borderRadius: 3,
//           overflow: "hidden",
//         }}
//       >
//         <Grid container>
//           {/* Left Section */}
//           <Grid 
//             sx={{
//               background: "linear-gradient(135deg, #23214B, #2E2A72)",
//               color: "#fff",
//               p: 5,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//             }}
//           >
//             <Typography variant="h4" fontWeight="bold" gutterBottom>
//               Welcome Back!
//             </Typography>

//             <Typography variant="body1" sx={{ opacity: 0.8, mb: 4 }}>
//               Manage Your Social Media with Ease
//             </Typography>

//             {/* Illustration Placeholder */}
//             <Box
//               component="img"
//               src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//               alt="Illustration"
//               sx={{
//                 width: "70%",
//                 maxWidth: 250,
//               }}
//             />
//           </Grid>

//           {/* Right Section */}
//           <Grid
//             sx={{
//               p: 5,
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//             }}
//           >
//             <Typography variant="h5" fontWeight="bold" mb={3}>
//               Login
//             </Typography>

//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//             />

//             <TextField
//               label="Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//             />

//             <Button
//               variant="contained"
//               fullWidth
//               sx={{
//                 mt: 3,
//                 py: 1.3,
//                 fontWeight: "bold",
//                 borderRadius: 2,
//                 background: "linear-gradient(90deg, #60A5FA, #6D5DF6)",
//                 textTransform: "none",
//                 "&:hover": {
//                   background: "linear-gradient(90deg, #5B4FE1, #1E40AF)",
//                 },
//               }}
//             >
//               Login
//             </Button>
//           </Grid>
//         </Grid>
//       </Paper>
//     </Box>
//     </Dialog>
//   );
// }

// export default SimpleDialog;
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function SimpleDialog(props: any) {
  console.log("SimpleDialog props:", props);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {props.title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, vel?
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}

export default SimpleDialog;