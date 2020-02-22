import React from "react";
// import './footer.component.scss'
import './footer.scss'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';


function Footer() {
  const github = 'https://github.com/luicsistem/petwalker';
  const facebook = '';
  const instagram = '';

  return (
    <footer className="footer">

      <div className="row">

          <div className="col-md-4">
            <h3 className="text-danger">About PetWalker</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>

          <div className="col-md-4">
            <h3 className="text-danger">Subscribe</h3>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
       
          </div>

          <div className="footer-widget">
            <h3 className="text-danger">Contact Info</h3>
            <div className="footer-contact-info-wrap">
                <ul className="footer-contact-info-list">
                    <li>
                        <i className="fa fa-map-marker-alt"></i>
                        <span>Calle   Boston 220 Las Vegas </span>
                    </li>
                    <li>
                        <i className="fa fa-phone"></i>
                        <span>51 - 123 456 78 9</span>
                    </li>
                    <li>
                        <i className="fa fa-envelope"></i>
                        <span>petwalker@gmail.com</span>
                    </li>
                </ul>
            </div>
          </div>


      </div>


      <div>
      <ul>
        <li><a href={facebook} target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href={instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href={github} target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
      </ul>
      <p className="copyright">Copyright 2020 | <b>Petwalker</b></p>

      </div>
    </footer>
  )
}

export {
  Footer
}