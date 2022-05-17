import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { ReactComponent as Opportunity01 } from '../../assets/services/opportunity-01.svg';
import { ReactComponent as Opportunity02 } from '../../assets/services/opportunity-02.svg';
import { ReactComponent as Opportunity03 } from '../../assets/services/opportunity-03.svg';
import { ReactComponent as Opportunity04 } from '../../assets/services/opportunity-04.svg';

const list = [
  {
    text: 'Lead community engagement & consultation',
    icon: <Opportunity01 />,
  },
  {
    text: 'Undertake comprehensive needs assessment',
    icon: <Opportunity02 />,
  },
  {
    text: 'Develop inclusive forestry management planning',
    icon: <Opportunity03 />,
  },
  {
    text: 'Enabling new sustainable  livelihoods for local communities',
    icon: <Opportunity04 />,
  },
];

function OpportunityList() {
  return (
    <List>
      {list.map((item, index) => (
        <ListItem
          key={item.text}
          sx={{
            py: 1,
            pl: {
              md: index * 4,
            },
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText
            primaryTypographyProps={{
              pl: (theme) => theme.spacing(2),
              maxWidth: { md: 300 },
              color: 'white',
            }}
          >
            {item.text}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}

export default OpportunityList;
