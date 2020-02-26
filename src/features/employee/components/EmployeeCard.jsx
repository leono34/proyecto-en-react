import React from 'react';


const EmployeeCard = ({nombre, direccion, title, descripcion, rating, foto}) => {
    return ( 
        <div className="walkers d-flex shadow pt-3 " data-index="0">
        <div className="profile_picture p-3  ">
            <a href="//#endregio" ><img alt="woman" className="rounded-circle" width="90" height="90" src="" />
                <span class="name d-flex justify-content-center ">{ nombre }</span></a> </div>
        <div className="content">
            <h3 className="card-title">
                <a href="{}"> {title}</a>
            </h3>
            <p className="card-text"> { descripcion }</p>
            <div className="pull-left">
                <p className="reviews">
                     <a title="  " href="//#endregion"><strong> 
                            <i class="fa fa-comment-o"></i>
                        </strong>
                        <strong>{ rating }</strong>
                        opiniones
                        <span className="stars  text-warning " rel="tooltip" data-original-title="Valoración media">
                            <i className="  fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
    
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
