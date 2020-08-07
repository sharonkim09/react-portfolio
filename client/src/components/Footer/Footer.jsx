import React from "react";
import "./style.css";
const Footer = () => {
  return (
    <footer className="black page-footer">
      <div className="footer-copyright center">
        <div className="container">
          <div className="row">
            <div className="col s3 l3">
              <a href="https://github.com/sharonkim09">
                <i className="fa fa-github iconsSocial" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col s3 l3">
              {/* <!-- Modal Trigger --> */}
              <a className="modal-trigger" href="#terms">
                <i
                  className="fa fa-address-card-o iconsSocial"
                  aria-hidden="true"
                ></i>
              </a>
              {/* <!-- Modal Structure --> */}
              <div id="terms" className="modal bottom-sheet">
                <div className="modal-content">
                  <p>Email: sharonkim1709@gmail.com</p>
                  <p>By phone: 404-998-6187</p>
                </div>

                <a
                  href="#!"
                  className="modal-close waves-effect waves-green btn-flat"
                >
                  Close
                </a>
              </div>
            </div>
            <div className="col s3 l3">
              <a

                href="https://www.linkedin.com/in/sharon-kim-7a2766196/"
              >
                <i
                  className="fa fa-linkedin iconsSocial"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="col s3 l3">
              <a
                href="https://drive.google.com/file/d/1L3pFTOkrX9oMZJQtplo4zwmJnHOMCgnL/view?usp=sharing"
              >
                <i
                  className="fa fa-file-pdf-o iconsSocial"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
