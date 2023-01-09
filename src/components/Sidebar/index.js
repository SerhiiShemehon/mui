import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Link from '@mui/material/Link';


const Sidebar = () => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <Box sx={{mb: 2}}>
        <TextField id="search" label="Search by title" variant="outlined" sx={{width: '100%', mb: 2}} />
        <TextField id="location" label="Location" variant="outlined" sx={{width: '100%', mb: 2}} />
        <Button variant="contained" sx={{width: '100%', mb: 2}}>ACTION</Button>
      </Box>
      <Box sx={{mb: 2}}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="label"
            name="radio-buttons-group"
          >
            <FormControlLabel value="label" control={<Radio />} label="Label" />
            <FormControlLabel value="open" control={<Radio />} label="Open" />
            <FormControlLabel value="archived" control={<Radio />} label="Archived" />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box sx={{mb: 2}}>
        <FormControl>
          <FormLabel component="legend">Contract type</FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox name="freelance" />} label="Freelance"/>
            <FormControlLabel control={<Checkbox name="full-time" />} label="Full-time"/>
            <FormControlLabel control={<Checkbox  name="internship" />} label="Internship"/>
            <FormControlLabel control={<Checkbox  name="part-time" />} label="Part-time"/>
          </FormGroup>
        </FormControl>
      </Box>
      <Box sx={{mb: 2}}>
        <FormControl>
          <FormLabel component="legend">Level</FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox name="any" />} label="Any"/>
            <FormControlLabel control={<Checkbox name="director" />} label="Director"/>
            <FormControlLabel control={<Checkbox  name="entry-level" />} label="Entry-level"/>
            <FormControlLabel control={<Checkbox  name="lead" />} label="Lead"/>
          </FormGroup>
        </FormControl>
      </Box>
      <Link href="#">Show more</Link>
    </Box>
  )
}

export default Sidebar;