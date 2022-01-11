import UserHomepage from "../UserHomepage";

export default function Homescreen() {
  return (
    <div>
      {/* <!-- desktop menu start here --> */}
      <header class="header-section">
        <div class="header-top">
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-5 col-12">
                <div class="logo py-2">
                  <a href="#">
                    <b>Brook Meadow farm</b>
                  </a>
                </div>
              </div>
              <div class="col-lg-7 col-12">
                <div class="ht-left">
                  <ul class="lab-ul d-flex flex-wrap justify-content-end">
                    <li class="d-flex flex-wrap align-items-center">
                      <div class="ht-add-thumb mr-2">
                        <img src="assets/images/header/01.png" alt="address" />
                      </div>
                      <div class="ht-add-content">
                        <span>1306 Longview Dr, Harrisburg</span>
                        <span class="d-block text-bold">
                          PA 17111, United States
                        </span>
                      </div>
                    </li>

                    <li class="d-flex flex-wrap align-items-center">
                      <div class="ht-add-thumb mr-2">
                        <img src="assets/images/header/03.png" alt="call" />
                      </div>
                      <div class="ht-add-content">
                        <span>Make Call </span>
                        <span class="d-block text-bold">+1 717-982-2038</span>
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
      <section class="about-section relative pt-20">
        <div class="container">
          <div class="row align-items-center mb-15">
            <div class="col-lg-6 col-12">
              <div class="about-thumb">
                <img src="assets/images/about/01.png" alt="about-thumb" />
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="about-wrapper p-0">
                <div class="about-title">
                  <h2>
                    <span class="d-lg-block ">
                      {" "}
                      <b>Welcome to Brookmeadow Farms</b>
                    </span>
                  </h2>
                  <p>Our Weekly Opening time</p>
                </div>
                <div class="about-content">
                  <ul class="lab-ul list-group">
                    <li class="list-group-item py-1 px-0 border-none">
                      <i class="icofont-close-squared mr-2 color-theme"></i>
                      <b>Monday: </b>
                      <span>Closed</span>
                    </li>
                    <li class="list-group-item py-1 px-0 border-none">
                      <i class="icofont-close-squared mr-2 color-theme"></i>
                      <b>Tuesday: </b>
                      <span>Closed</span>
                    </li>
                    <li class="list-group-item py-1 px-0 border-none">
                      <i class="icofont-tick-boxed mr-2 color-theme"></i>
                      <b>Wednesday: </b>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li class="list-group-item py-1 px-0 border-none">
                      <i class="icofont-tick-boxed mr-2 color-theme"></i>
                      <b>Thursday: </b>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li class="list-group-item py-1 px-0 border-none">
                      <i class="icofont-tick-boxed mr-2 color-theme"></i>
                      <b>Friday: </b>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li class="list-group-item py-1 px-0 border-none">
                      <i class="icofont-tick-boxed mr-2 color-theme"></i>
                      <b>Saturday: </b>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li class="list-group-item py-1 px-0 border-none">
                      <i class="icofont-tick-boxed mr-2 color-theme"></i>
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
      <footer>
        <div class="footer-top relative padding-tb bg-ash relative">
          <div class="shape-images">
            <img src="assets/images/shape-img/01.png" alt="shape-images" />
          </div>
          <div class="container">
            <div class="section-wrapper row justify-center ">
              <div class="col-xl-3 col-md-2">
                <div class="post-item">
                  <div class="footer-logo">
                    <b>Brook Meadow farm</b>
                  </div>
                  <p>
                    Meadow Brook Farms is a producer/dealer of high quality hay
                    and straw for all types of horses, livestock and soil
                    stabilizing construction projects.
                  </p>
                  <p>
                    Our primary focus is eastern Pennsylvania, New Jersey and
                    overseas export is accommodated.
                  </p>
                </div>
              </div>
              <div class="col-xl-3 col-md-2">
                <div class="post-item">
                  <div class="post-title">
                    <b>Keep In Touch</b>
                  </div>
                  <ul class="lab-ul footer-location">
                    <li>
                      <div class="icon-part">
                        <i class="icofont-phone"></i>
                      </div>
                      <div class="content-part">
                        <p>+1 717-982-2038</p>
                        <p>+1 717-982-2038</p>
                      </div>
                    </li>
                    <li>
                      <div class="icon-part">
                        <i class="icofont-wall-clock"></i>
                      </div>
                      <div class="content-part">
                        <p>Wed - Sunday 09:00 - 5:00</p>
                        <p>(except public holidays)</p>
                      </div>
                    </li>
                    <li>
                      <div class="icon-part">
                        <i class="icofont-location-pin"></i>
                      </div>
                      <div class="content-part">
                        <p>
                          1306 Longview Dr, Harrisburg, <br />
                          PA 17111, United States
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer section End here --> */}
    </div>
  );
}
