import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Sidebar from 'components/Sidebar';
import Post from 'components/Post';

const postsData = [
  {
    id: 1,
    title: 'Senior Product Designer',
    text: 'Exciting news! I’m hiring mid-level and senior Product Designers to join my team at Acme, where we’re building the future of eCommerce.',
    list: [
      'Own a product area, work cross-platform',
      'Small, talented, tight-knit team',
      'SF, ATL or Remote'
    ]
  },
  {
    id: 2,
    title: 'Tech Lead',
    text: 'We are looking for an exceptional Tech Lead (React️ + Rust) to bring our development efforts to the next level',
    list: [
      'London or remote',
      'Early-stage product',
      'Massive impact and growth potential'
    ]
  },
  {
    id: 3,
    title: 'Product Marketing Designer / Developer',
    text: 'Some exciting news – we’re looking for a Product Marketing Designer to join the team! Love Acme’s style, working across multiple surfaces, and obsessing over brand identity?',
    list: [
      'London / Remote (EU)',
      'Early stage product + brand',
      'Massive impact'
    ]
  }
]

function Home() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="space-between" alignItems="center" sx={{mb: 3, pb: 4, borderBottom: '1px solid rgba(0, 0, 0, 0.14)'}}>
        <Grid item>
          <Typography variant="h4" component="h1">
            Latest Jobs
          </Typography>
        </Grid>
        <Grid item>
          <FormControl sx={{minWidth: 130}}>
            <InputLabel id="sort-label">Sort</InputLabel>
            <Select
              labelId="sort-label"
              id="sort"
              value='latest'
              label="Sort"
            >
              <MenuItem value='latest'>Latest</MenuItem>
              <MenuItem value='newest'>Newest</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={8}>
          {postsData.map(elem => <Post key={elem.id} title={elem.title} list={elem.list} text={elem.text} />)}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;