import React from 'react';
import shreyaans from '../assets/img/profile.jpg';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const About = () => {
  return (
    <>
      <div className="container shadow position-absolute top-50 start-50 translate-middle profile w-75 h-63">
        <form>
          <div className="row">
            <div className="col-md-4">
              <img src={shreyaans} alt="shreyaansjain" className="ms-4 mt-5" />
            </div>
            <div className="col-md-6">
              <div className="mt-5">
                <h5>Shreyaans Jain</h5>
                <h6 className="fs-4 text-primary">Web Developer</h6>
                <p className="profile_rating mt-3 mb-5 text-secondary">
                  RANKINGS: <span>1/10</span>
                </p>
                <Tabs defaultActiveKey="first">
                  <Tab className="mt-4" eventKey="first" title="About">
                    <div className="row">
                      <div className="col-md-6">
                        <label>USER ID</label>
                      </div>
                      <div className="col-md-6 text-primary">
                        <p>99797978998</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6 text-primary">
                        <p>shreyaans</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6 text-primary">
                        <p>shryaansjain60@gmail.com</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6 text-primary">
                        <p>94878573958</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6 text-primary">
                        <p>Web Developer</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab className="mt-4" eventKey="second" title="Timeline">
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6 text-primary">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6 text-primary">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6 text-primary">
                        <p>5</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>English Level</label>
                      </div>
                      <div className="col-md-6 text-primary">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <label>Avalability</label>
                      </div>
                      <div className="col-md-6 text-primary">
                        <p>6 Months</p>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </div>
            <div className="col-md-2 edit">
              <input type="submit" value="Edit Profile" name="btn-edit" />
            </div>
          </div>
          <div className="row">
            {/* left side url */}
            <div className="col-md-4">
              <div className="mx-4 work_top">
                <p className="">WORK LINK</p>
                <a
                  className="text-decoration-none text-dark"
                  href="/"
                  target="_shreyaans"
                >
                  Github
                </a>{' '}
                <br />
                <a
                  className="text-decoration-none text-dark"
                  href="/"
                  target="_shreyaans"
                >
                  Linkedin
                </a>{' '}
                <br />
                <a
                  className="text-decoration-none text-dark"
                  href="/"
                  target="_shreyaans"
                >
                  Twitter
                </a>{' '}
                <br />
                <a
                  className="text-decoration-none text-dark"
                  href="/"
                  target="_shreyaans"
                >
                  Website
                </a>{' '}
                <br />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
