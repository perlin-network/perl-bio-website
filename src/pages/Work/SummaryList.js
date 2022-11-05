import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

export default function SummaryList({ data }) {
  return (
    <List>
      {data.map((item) => {
        const IconComponent = item.icon;
        return (
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <IconComponent />
            </ListItemIcon>
            <ListItemText
              primary={item.primaryText}
              primaryTypographyProps={{
                fontSize: 24,
                fontWeight: 700,
              }}
              secondary={item.secondaryText}
              secondaryTypographyProps={{
                color: 'text.primary',
                fontSize: 24,
                fontWeight: 500,
              }}
            />
          </ListItem>
        );
      })}
    </List>
  );
}
