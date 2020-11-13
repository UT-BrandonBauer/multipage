import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

const profiles = [
    {
     name: "Brandon Bauer",
     major: "Computer Science & Engineering",
     graduation: "December 2020",
     bio: "This is a test",
     image: "https://bit.ly/2WNi2Ml"
    },
   
    {
     name: "Samantha Bowman",
     major: "Electrical Engineering and Computer Science & Engineering",
     graduation: "December 2020",
     bio: "This is a test",
     image: "https://bit.ly/2WNi2Ml"
    },
   
    {
     name: "Jason Dick",
     major: "Electrical Engineering",
     graduation: "December 2020",
     bio: "This is a test",
     image: "https://bit.ly/2WNi2Ml"
    },
   
    {
     name: "Mark Siefring",
     major: "Electrical Engineering",
     graduation: "December 2020",
     bio: "This is a test",
     image: "https://bit.ly/2WNi2Ml"
    }
]

function Posts(props) {
  return (
    <div style={{ marginTop: 10, padding: 10 }}>
      <Grid container spacing={20} justify="center">
        {profiles.map(profile => (
          <Grid item key={profile.name}>
            <Card>

            <CardHeader
              avatar={
                <Avatar aria-label="image" className={profile.image}>
                {profile.name.charAt(0)}
                </Avatar>
                }
                title={profile.name}
                subheader={profile.major}
            />

            <CardActionArea>

                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                    {profile.graduation}
                    </Typography>                 
              
                    <Typography variant="body2" color="textSecondary" component="p">
                     {profile.bio}
                    </Typography> 

                    <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={profile.image}
                  title="Contemplative Reptile"
                />

                </CardContent>
              </CardActionArea>
              
              <CardActions>
                <Button size="small" color="primary">
                  Email Profile
                </Button>
              </CardActions>
            </Card>
            <br></br>
          </Grid>
        ))}
        <br></br>
      </Grid>
    </div>
  );
}

export default Posts;