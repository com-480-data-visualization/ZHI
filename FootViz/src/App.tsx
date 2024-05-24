import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { TabIntroduction } from "./TabIntroduction"
import { TabPlayersEvolution } from "./TabPlayersEvolution"
import { TabTeamStrategies } from "./TabTeamStrategies"

import { Header } from './components/Header';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{width: '80%'}}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
    backgroundColor: 'red'
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
        <Header />
        <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="FootViz Draft Application"
            sx={{ borderRight: 1, borderColor: 'divider', width:'230px',
              '&& .MuiTab-root': {
                alignItems: 'baseline',
                },
            }}
            selectionFollowsFocus={true}
          >
            <Tab label="Introduction" {...a11yProps(0)} />
            <Tab label="Players evolution" {...a11yProps(1)} />
            <Tab label="Teams strategies" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            <TabIntroduction />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <TabPlayersEvolution />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TabTeamStrategies />
          </TabPanel>

        </Box>
    </> 
  );
}