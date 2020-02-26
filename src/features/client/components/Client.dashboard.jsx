import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 270,
  },
  media: {
    height: 170,
  },
});

function MediaCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Chocolate
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          Editar
        </Button>
        <Button size="large" color="primary">
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
}


class Dueño extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dueño">
        <div className="row">
          <div className="col-md-12">
            <div className="row separar">
              <div className="col-md-3 cuerpohe">
                <div className="row">
                  <div className="col-md-12 cuerpo">
                    <input className="imagen" type="button" />
                    <img src="" alt="" />
                    <p>Nombre del Dueño </p>
                  </div>
                  <div className="col-md-12 nombre">
                    <p> Edita tu Perfil </p>
                  </div>
                </div>
              </div>
              <div className="col-md-8 card">
                <div className="card-invitacion">
                  <h5>Recomienda a un amigo, Gana S/20</h5>
                  <p>Por cada amigo que reserve su estadia ,le daremos un credito de S/20 para su proxima
                        reserva. </p>
                  <Button size="small" color="secondary">
                    Invita a un amigo 
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-8">
                <div className="row">
                  <div className="mediacard_clase">
                  <MediaCard/>
                </div> 
                  <div  className="boton_nuevo">
                 <Button size="large" color="secondary">
                    Añadir Mascota 
                  </Button>    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {
  Dueño
}
