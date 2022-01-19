import React from "react";

import { StyledFooter, FooterNameStyles } from "./footer.styles";

const Footer = () => (
  <footer>
    <div class="footer-top relative padding-tb bg-ash relative">
      <div class="shape-images">
        <img src="assets/images/shape-img/01.png" alt="shape-images" />
      </div>
      <div class="container">
        <div class="section-wrapper row">
          <div class="col-xl-3 col-md-6">
            <div class="post-item">
              <div class="footer-logo">
                <img src="assets/images/logo/01.png" alt="footer-logo" />
              </div>
              <p>We serve the best products in the country.</p>
              <p>Amazing Customer Service and excellent products.</p>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="post-item">
              <div class="post-title">
                <h5>Keep In Touch</h5>
              </div>
              <ul class="lab-ul footer-location">
                <li>
                  <div class="icon-part">
                    <i class="icofont-phone"></i>
                  </div>
                  <div class="content-part">
                    <a href="tel: +717-686-0655">+717-686-0655</a>,
                    <a href="tel: +717-982-2038">+717-982-2038</a>
                  </div>
                </li>
                <li>
                  <div class="icon-part">
                    <i class="icofont-wall-clock"></i>
                  </div>
                  <div class="content-part">
                    <p>Mon - Fri 09:00 - 18:00</p>
                    <p>(except public holidays)</p>
                  </div>
                </li>
                <li>
                  <div class="icon-part">
                    <i class="icofont-location-pin"></i>
                  </div>
                  <div
                    class="content-part"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/maps?q=prabidhi%20labs&t=&z=7&ie=UTF8&iwloc=&output=embed"
                      )
                    }
                  >
                    <p>
                      1306 Longview Dr, Harrisburg
                      <br />
                      PA 17111, United States
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="post-item">
              <div class="post-title">
                <h5>Farm Product</h5>
              </div>
              <div class="lab-ul footer-post">
                <div class="media mb-3">
                  <div class="fp-thumb mr-3">
                    <img
                      src="assets/images/products/product/01.png"
                      alt="recent-post"
                    />
                  </div>
                  <div class="media-body">
                    <a href="#">
                      <h6 class="mt-0">Light Brown Eggs</h6>
                    </a>
                    <span class="price">$25.99</span>
                  </div>
                </div>
                <div class="media mb-3">
                  <div class="fp-thumb mr-3">
                    <img
                      src="assets/images/products/product/02.png"
                      alt="recent-post"
                    />
                  </div>
                  <div class="media-body">
                    <a href="#">
                      <h6 class="mt-0">Little Chicken Broiler</h6>
                    </a>
                    <span class="price">$25.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-6">
            <div class="post-item">
              <div class="post-title">
                <h5>Instagram Feed</h5>
              </div>
              <div class="lab-ul footer-gellary">
                <figure class="figure">
                  <a
                    href="assets/images/gallery/01.jpg"
                    data-rel="lightcase:myCollection:slideshow"
                  >
                    <img
                      src="assets/images/gallery/01.jpg"
                      class="img-fluid rounded"
                      alt="footer-gellary"
                    />
                  </a>
                </figure>
                <figure class="figure">
                  <a
                    href="assets/images/gallery/02.jpg"
                    data-rel="lightcase:myCollection:slideshow"
                  >
                    <img
                      src="assets/images/gallery/02.jpg"
                      class="img-fluid rounded"
                      alt="footer-gellary"
                    />
                  </a>
                </figure>
                <figure class="figure">
                  <a
                    href="assets/images/gallery/03.jpg"
                    data-rel="lightcase:myCollection:slideshow"
                  >
                    <img
                      src="assets/images/gallery/03.jpg"
                      class="img-fluid rounded"
                      alt="footer-gellary"
                    />
                  </a>
                </figure>
                <figure class="figure">
                  <a
                    href="assets/images/gallery/04.jpg"
                    data-rel="lightcase:myCollection:slideshow"
                  >
                    <img
                      src="assets/images/gallery/04.jpg"
                      class="img-fluid rounded"
                      alt="footer-gellary"
                    />
                  </a>
                </figure>
                <figure class="figure">
                  <a
                    href="assets/images/gallery/05.jpg"
                    data-rel="lightcase:myCollection:slideshow"
                  >
                    <img
                      src="assets/images/gallery/05.jpg"
                      class="img-fluid rounded"
                      alt="footer-gellary"
                    />
                  </a>
                </figure>
                <figure class="figure">
                  <a
                    href="assets/images/gallery/06.jpg"
                    data-rel="lightcase:myCollection:slideshow"
                  >
                    <img
                      src="assets/images/gallery/06.jpg"
                      class="img-fluid rounded"
                      alt="footer-gellary"
                    />
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
