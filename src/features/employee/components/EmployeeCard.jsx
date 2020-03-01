import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const EmployeeCard = ({ nombre, direccion, titulo, descripcion, rating, foto }) => {
  return (
    <div className="walkers d-flex shadow pt-3 " data-index="0">
      <div className="profile_picture p-3  ">
        <a href="//#endregio" ><img alt="woman" className="rounded-circle" width="90" height="90" src={foto} />
          <span className="name d-flex justify-content-center ">{nombre}</span></a> </div>
      <div className="content">
        <h3 className="card-title">
          <a href="{}"> {titulo}</a>
        </h3>
        <p className="card-text"> {descripcion}</p>
        <div className="pull-left">
          <p className="reviews">
            <a title="  " href="//#endregion"><strong>
              <i className="fa fa-comment-o"></i>
            </strong>
              <strong>{rating}</strong>&nbsp;
            
                        <span className="stars  text-warning " rel="tooltip" data-original-title="Valoración media">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />

              </span>
            </a></p>
        </div>
        <div className="public_address pull-right">
          <small>{direccion}</small>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>

  );
}

export default EmployeeCard;
// export {
//     EmployeeCard
//   }
