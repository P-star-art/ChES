import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "../../assets/images/CHES-LOGO-1.png";
import NearMeIcon from "@material-ui/icons/NearMe";

const useStyles = makeStyles({
  root: {
    maxWidth: "85%",
    margin: "auto",
    marginTop: "150px",
    marginBottom: "100px",
  },
  root1: {
    maxWidth: "85%",
    margin: "auto",
    marginTop: "10px",
    marginBottom: "10px",
  },
  media: {
    height: "70%",
    width: "80%",
    margin: "auto",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea style={{ textAlign: "center" }}>
          <img
            className={classes.media}
            src={logo}
            alt="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="body" color="textSecondary" component="h6">
              Chemical Engineering Society (ChES) is a student chapter of the
              chemical engineering department, SVNIT. The faction provides a
              platform for the chemical engineering community of SVNIT where
              they can discuss, plan, execute and debug their problems among
              their peers. Events and seminars conducted by ChES focus on both
              the building the public understanding of technical issues and the
              individual curiosity of the enthusiasts.
            </Typography>
            <br />
            <Typography variant="body" color="textSecondary" component="h6">
              Dr. Meghal Desai is currently the faculty advisor of the student
              chapter. Affiliated to the American Institute of Chemical
              Engineering (AIChE), ChES aims of spreading knowledge and
              experience to the future chemical engineers about chemical
              engineering education and application.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root1}>
        <h4 style={{ textAlign: "center", marginTop: "5px" }}>Our Mission</h4>

        <CardActionArea>
          <CardContent>
            <Typography variant="body" color="textSecondary" component="li">
              Promote excellence in chemical engineering education and practice.
            </Typography>
            <br />
            <Typography variant="body" color="textSecondary" component="li">
              Advance the development and exchange of relevant knowledge and
              ideas.
            </Typography>
            <br />
            <Typography variant="body" color="textSecondary" component="li">
              Facilitate public understanding of technical issues.
            </Typography>
            <br />
            <Typography variant="body" color="textSecondary" component="li">
              Integrate the upliftment of society by providing awareness about
              different technical situations.
            </Typography>
            <br />
            <Typography variant="body" color="textSecondary" component="li">
              Anticipate, recognize, and evaluate hazardous conditions and
              practices affecting people, property and the environment, develop
              and evaluate appropriate strategies for the same.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
