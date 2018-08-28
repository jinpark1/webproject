import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HomeIcon from '@material-ui/icons/Home';

import {Link} from 'react-router-dom'

export const mailFolderListItems = (
  <div>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
         <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/forum">
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="Forums" />
    </ListItem>
    <ListItem button component={Link} to="/trollbox">
      <ListItemIcon>
         <ChatBubbleIcon />
      </ListItemIcon>
      <ListItemText primary="Trollbox" />
    </ListItem>
  </div>
);
