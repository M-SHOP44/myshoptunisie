import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Divider from '@mui/material/Divider';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { BasketContext } from '../context/BasketContext';
import "../App.css";
import { useState } from 'react';


export default function FolderList(title,image,price) {
    const { products , setProducts } = React.useContext(BasketContext);
    const [value, onChange] = useState(0);

  return (
    <>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem>
              <ListItemAvatar>
                  
              </ListItemAvatar>
              <ListItemText primary="Photos"  />
              <div className='counter'>
                
              </div>
              <IconButton aria-label="delete" size="medium">
        <DeleteIcon fontSize="inherit" />
        </IconButton>
        </ListItem>
        <div className='row'>
        <Typography variant='h7' sx={{ml: 35}}>Total : {price} </Typography>
        
        </div>
      </List>

      <Divider />
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem>
              <ListItemAvatar>
                  
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
      </List>
      </>
  );
}
