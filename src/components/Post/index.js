import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';

import { ReactComponent as Person } from 'assets/icons/person-filled.svg'

const Post = ({
  title,
  text,
  list,
  handleAction,
  handleWatch
}) => {
  const List = () => {
    return list.map((elem, index) => <span key={index} style={{display: 'block'}}>• {elem}</span>)
  };
  return (
    <Card sx={{mb: 3}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#BDBDBD' }} aria-label="recipe">
            <Person />
          </Avatar>
        }
        title={title}
      />
      <CardContent>
        <Typography sx={{mb: 3}} variant="body2">{text}</Typography>
        <Typography variant="body2"><List /></Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAction}>ACTION</Button>
        <Button size="small" startIcon={<RemoveRedEye />}  onClick={handleWatch}>Watch</Button>
      </CardActions>
    </Card>
  )
}

export default Post;