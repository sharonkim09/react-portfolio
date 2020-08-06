import React from "react";

const Footer = () => {
  return (
    <footer className="black page-footer">
      <div className="footer-copyright center">
        <div className="container">
          <div className="row">
            <div className="col s3 l3">
              <p>
              <a target="_blank" href="https://github.com/sharonkim09"><i className="fa fa-github" aria-hidden="true"></i></a>
              </p>
            </div>
            <div className="col s3 l3">
              <p>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </p>
            </div>
            <div className="col s3 l3">
              <p>
              <a target="_blank" href="https://www.linkedin.com/in/sharon-kim-7a2766196/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </p>
            </div>
            <div className="col s3 l3">
              <p>
              <a target="_blank" href="https://drive.google.com/file/d/1L3pFTOkrX9oMZJQtplo4zwmJnHOMCgnL/view?usp=sharing"><i className="fa fa-address-card" aria-hidden="true"></i></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
