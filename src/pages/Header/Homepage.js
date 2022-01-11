import UserHomepage from "../UserHomepage";

export default function Homescreen() {
  return (
    <div>
      {/* <!-- desktop menu start here --> */}
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-5 col-12">
                <div className="logo py-2">
                  <a href="#">
                    <b>Brook Meadow farm</b>
                  </a>
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <div className="ht-left">
                  <ul className="lab-ul d-flex flex-wrap justify-content-end">
                    <li className="d-flex flex-wrap align-items-center">
                      <div className="ht-add-thumb mr-2">
                        <img src="assets/images/header/01.png" alt="address" />
                      </div>
                      <div className="ht-add-content">
                        <span>1306 Longview Dr, Harrisburg</span>
                        <span className="d-block text-bold">
                          PA 17111, United States
                        </span>
                      </div>
                    </li>

                    <li className="d-flex flex-wrap align-items-center">
                      <div className="ht-add-thumb mr-2">
                        <img src="assets/images/header/03.png" alt="call" />
                      </div>
                      <div className="ht-add-content">
                        <span>Make Call </span>
                        <span className="d-block text-bold">
                          +1 717-982-2038
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- desktop menu end here --> */}
      {/* <!-- about section start here --> */}
      <section className="about-section relative pt-20">
        <div className="container">
          <div className="row align-items-center mb-15">
            <div className="col-lg-6 col-12">
              <div className="about-thumb">
                <img src="assets/images/about/01.png" alt="about-thumb" />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about-wrapper p-0">
                <div className="about-title">
                  <h2>
                    <span className="d-lg-block ">
                      {" "}
                      <b>Welcome to Brookmeadow Farms</b>
                    </span>
                  </h2>
                  <p>Our Weekly Opening time</p>
                </div>
                <div className="about-content">
                  <ul className="lab-ul list-group">
                    <li className="list-group-item py-1 px-0 border-none">
                      <i className="icofont-close-squared mr-2 color-theme"></i>
                      <b>Monday: </b>
                      <span>Closed</span>
                    </li>
                    <li className="list-group-item py-1 px-0 border-none">
                      <i className="icofont-close-squared mr-2 color-theme"></i>
                      <b>Tuesday: </b>
                      <span>Closed</span>
                    </li>
                    <li className="list-group-item py-1 px-0 border-none">
                      <i className="icofont-tick-boxed mr-2 color-theme"></i>
                      <b>Wednesday: </b>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="list-group-item py-1 px-0 border-none">
                      <i className="icofont-tick-boxed mr-2 color-theme"></i>
                      <b>Thursday: </b>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="list-group-item py-1 px-0 border-none">
                      <i className="icofont-tick-boxed mr-2 color-theme"></i>
                      <b>Friday: </b>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="list-group-item py-1 px-0 border-none">
                      <i className="icofont-tick-boxed mr-2 color-theme"></i>
                      <b>Saturday: </b>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="list-group-item py-1 px-0 border-none">
                      <i className="icofont-tick-boxed mr-2 color-theme"></i>
                      <b>Sunday: </b>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about section ending here --> */}
      {/* <!-- Products section start here --> */}
      <UserHomepage />
      {/* Product Section End Here */}

      {/* <!-- footer section start here --> */}

      {/* <!-- footer section End here --> */}
    </div>
  );
}
