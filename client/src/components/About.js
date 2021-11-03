import React from 'react';
import shreyaans from '../assets/img/profile.jpg';
const About = () => {
  return (
    <>
      <div className="container shadow position-absolute top-50 start-50 translate-middle profile w-75">
        <form>
          <div className="row">
            <div className="col-md-4">
              <img
                src={shreyaans}
                alt="shreyaansjain"
                className="ms-3 mt-4 mb-4"
              />
            </div>
            <div className="col-md-6">
              <div className="mt-5">
                <h5>Shreyaans Jain</h5>
                <h6>Web Developer</h6>
                <p className="profile_rating mt-3 mb-5">
                  RANKINGS: <span>1/10</span>
                </p>
                <ul class="nav nav-tabs">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 edit">
              <input type="submit" value="Edit Profile" name="btn-edit" />
            </div>
          </div>
          <div className="row">
              {/* left side url */}
              <div className="col-md-4">
                  <div>
                      <p>WORK LINK</p>
                      <a href="" target="_shreyaans">Github</a> <br />
                      <a href="" target="_shreyaans">Linkedin</a> <br />
                      <a href="" target="_shreyaans">Twitter</a> <br />
                      <a href="" target="_shreyaans">Website</a> <br />
                  </div>
              </div>

              {/* right side data toggle */}
              <div className="col-md-8 ps-5">
                  div
              </div>

          </div>
        </form>
      </div>
    </>
  );
};

export default About;
