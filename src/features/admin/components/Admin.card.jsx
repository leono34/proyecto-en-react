import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

class MediaCard extends React.Component {
  // let classes = useStyles();
  render() {
    return (
      <Card className="w-50 p-3" >
        <CardActionArea>
          <CardMedia
            className="h-50"
            image="./images/pelusa.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
              </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
              </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
            </Button>
          <Button size="small" color="primary">
            Learn More
            </Button>
        </CardActions>
      </Card>
    );
  }
}

export {
  MediaCard
}


class Formulario extends React.Component {

  render() {

    return (

      <form className="mb-5">

        <div className="form-group">
          <label htmlFor="nya" className="negrita">Nombres y Apellidos</label>
          <input type="text" className="form-control" id="nya" required />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="negrita">Email</label>
          <input type="email" className="form-control" id="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="asunto" className="negrita">Asunto</label>
          <input type="text" className="form-control" id="asunto" required />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje" className="negrita">Mensaje</label>
          <textarea className="form-control" id="mensaje" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>

      </form>

    )

  }

}

export {
  Formulario
}

function Avatar(props){
  return (
    <img className="rounded-circle" width="80" height="80"
      src={props.url}
      alt={props.alt}/>
  )
}

export {
  Avatar
}