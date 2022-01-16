import { useState, useEffect } from "react";
import GetAllFarmHouse from "../actions/farmhouse-actions";
import Footer from "../components/Footer/footer";

export default function NewHomepage() {
  const [farmHouses, setFarmHouses] = useState([]);

  async function mount() {
    GetAllFarmHouse()
      .orderBy("name", "asc")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setFarmHouses([doc.data(), ...farmHouses]);
        });
      });
    console.log(farmHouses[0].products);
  }
  useEffect(() => {
    mount();
  }, []);
  return (
    <div>
      {/* <!--search area--> */}
      <div class="search-input">
        <div class="search-close">
          <i class="icofont-close-circled"></i>
        </div>
        <form>
          <input type="text" name="text" placeholder="Search Heare" />
          <button class="search-btn" type="submit">
            <i class="icofont-search-2"></i>
          </button>
        </form>
      </div>
      {/* Desktop Menu Start */}
      <header class="header-section">
        <div class="header-top">
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-5 col-12">
                <div class="logo py-2">
                  <a href="index.html">
                    <b style={{ fontSize: 30 }}>Brook Meadow farm</b>
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
                        <img src="assets/images/header/02.png" alt="email" />
                      </div>
                      <div class="ht-add-content">
                        <span>Send Mail </span>
                        <span class="d-block text-bold">
                          brookmeadowsfarms@gmail.com
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
        <div class="header-bottom bg-theme">
          <div class="header-area">
            <div class="container">
              <div class="primary-menu">
                <div class="main-area w-100">
                  <div class="main-menu d-flex flex-wrap align-items-center justify-content-between w-100">
                    <div class="logo">
                      <a href="index.html">
                        <img src="assets/images/logo/02.png" alt="logo" />
                      </a>
                    </div>
                    <ul class="lab-ul">
                      <li class="active">
                        <a href="index.html">Home</a>
                        <ul class="lab-ul">
                          <li>
                            <a href="index.html" class="active">
                              Home Page
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>

                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Desktop Menu End */}
      {/* <!-- Banner Section Start Here --> */}

      {/* <!-- Banner Section Ending Here --> */}
      {/* <!-- about section start here --> */}
      <section class="about-section relative padding-tb">
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
                    <span class="d-lg-block"> Welcome to Our BrookMeadow </span>
                    Farm.
                  </h2>
                  <p>Our Weekly Opening time</p>
                </div>
                <div class="about-content">
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
      {/* <!-- product category section start here --> */}
      <section class="product-section relative padding-tb bg-ash">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-header">
                <h3 style={{ fontSize: 40, fontWeight: "bold" }}>
                  Available Products
                </h3>
                <p>Products available with us.</p>
              </div>
            </div>
            <div class="col-12">
              <div class="section-wrapper">
                <div class="row justify-content-center">
                  {farmHouses &&
                    farmHouses.map((farmHouse, index) => {
                      {
                        return (
                          farmHouse.products &&
                          farmHouse.products.map((product) => (
                            <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
                              <div class="card mb-4 text-center bg-ash border-none relative">
                                <div class="addcart-overlay">
                                  <div class="addcart-content">
                                    <a href="#" class="lab-btn d-inline-b">
                                      Buy Now
                                    </a>
                                  </div>
                                </div>
                                <img
                                  src={product.imageSrc}
                                  class="card-img-top mb-2"
                                  style={{ height: 300 }}
                                  alt="product"
                                />
                                <div class="card-body">
                                  <a href="#">
                                    <h6 class="card-title">{product.name}</h6>
                                  </a>
                                  <h6 class="product-price">
                                    <span class="d-price">
                                      $ {product.price}
                                    </span>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          ))
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- product category section ending here --> */}
      {/* <!-- service section start here --> */}
      <section class="service-section padding-tb">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-header">
                <h3 style={{ fontSize: 40, fontWeight: "bold" }}>
                  BrookMeadow Farm Services
                </h3>
                <p></p>
              </div>
            </div>
            <div class="col-12">
              <div class="service-content">
                <div class="row">
                  <div class="col-lg-4 col-md-6">
                    <div class="lab-item service-item">
                      <div class="lab-inner p-4 mb-4 text-left">
                        <div class="service-top d-flex align-items-center mb-4">
                          <div class="st-thumb mr-3">
                            <img
                              src="assets/images/service/01.png"
                              alt="service image"
                            />
                          </div>
                          <div class="st-content mt-2">
                            <a href="#">
                              <h6>Alternative egg</h6>
                            </a>
                          </div>
                        </div>
                        <div class="service-bottom">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="lab-item service-item">
                      <div class="lab-inner p-4 mb-4 text-left">
                        <div class="service-top d-flex align-items-center mb-4">
                          <div class="st-thumb mr-3">
                            <img
                              src="assets/images/service/02.png"
                              alt="service image"
                            />
                          </div>
                          <div class="st-content mt-2">
                            <a href="#">
                              <h6>Poultry Cages</h6>
                            </a>
                          </div>
                        </div>
                        <div class="service-bottom">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="lab-item service-item">
                      <div class="lab-inner p-4 mb-4 text-left">
                        <div class="service-top d-flex align-items-center mb-4">
                          <div class="st-thumb mr-3">
                            <img
                              src="assets/images/service/03.png"
                              alt="service image"
                            />
                          </div>
                          <div class="st-content mt-2">
                            <a href="#">
                              <h6>Breeder Management</h6>
                            </a>
                          </div>
                        </div>
                        <div class="service-bottom">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="lab-item service-item">
                      <div class="lab-inner p-4 mb-4 text-left">
                        <div class="service-top d-flex align-items-center mb-4">
                          <div class="st-thumb mr-3">
                            <img
                              src="assets/images/service/04.png"
                              alt="service image"
                            />
                          </div>
                          <div class="st-content mt-2">
                            <a href="#">
                              <h6>BrookMeadow Climate</h6>
                            </a>
                          </div>
                        </div>
                        <div class="service-bottom">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="lab-item service-item">
                      <div class="lab-inner p-4 mb-4 text-left">
                        <div class="service-top d-flex align-items-center mb-4">
                          <div class="st-thumb mr-3">
                            <img
                              src="assets/images/service/05.png"
                              alt="service image"
                            />
                          </div>
                          <div class="st-content mt-2">
                            <a href="#">
                              <h6>Residue Teatment</h6>
                            </a>
                          </div>
                        </div>
                        <div class="service-bottom">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                    <div class="lab-item service-item">
                      <div class="lab-inner p-4 mb-4 text-left">
                        <div class="service-top d-flex align-items-center mb-4">
                          <div class="st-thumb mr-3">
                            <img
                              src="assets/images/service/06.png"
                              alt="service image"
                            />
                          </div>
                          <div class="st-content mt-2">
                            <a href="#">
                              <h6>Exhaust air Treatment</h6>
                            </a>
                          </div>
                        </div>
                        <div class="service-bottom">
                          <p></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- service section ends here --> */}
      {/* <!-- testimonial Section start here --> */}
      <section class="testimonial-section padding-tb bg-ash">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="section-header">
                <h1 style={{ fontSize: 40, fontWeight: "bold" }}>
                  What Client Say Our BrookMeadow Farm
                </h1>
                <p>Thoughts & Ideas about our clients towards us.</p>
              </div>
            </div>
            <div class="col-12">
              <div class="testimonial-content">
                <div class="row">
                  <div class="col-lg-4 col-12">
                    <div class="lab-item testi-item-2 mb-3">
                      <div class="lab-inner">
                        <div class="testi-top">
                          <div class="testi-t-thumb">
                            <img
                              src="assets/images/testimonial/01.jpg"
                              alt="author-image"
                            />
                          </div>
                          <div class="testi-t-content">
                            <a href="#">
                              <h6>Gopal Gurung</h6>
                            </a>
                            <p>Local Guide</p>
                            <div class="rating">
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="testi-bottom">
                          <p>
                            <img
                              class="q1"
                              src="assets/images/testimonial/q1.png"
                              alt='"'
                            />
                            Very peaceful and clean😌
                            <img
                              class="q2"
                              src="assets/images/testimonial/q2.png"
                              alt='"'
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-12">
                    <div class="lab-item testi-item-2 mb-3">
                      <div class="lab-inner">
                        <div class="testi-top">
                          <div class="testi-t-thumb">
                            <img
                              src="assets/images/testimonial/02.jpg"
                              alt="author-image"
                            />
                          </div>
                          <div class="testi-t-content">
                            <a href="#">
                              <h6>Irvin Rudolph</h6>
                            </a>
                            <p>Local Guide</p>
                            <div class="rating">
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="testi-bottom">
                          <p>
                            <img
                              class="q1"
                              src="assets/images/testimonial/q1.png"
                              alt='"'
                            />
                            Nice place for good quality, healthy goats, they
                            have all the fresh air they could want.
                            <img
                              class="q2"
                              src="assets/images/testimonial/q2.png"
                              alt='"'
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-12">
                    <div class="lab-item testi-item-2 mb-3">
                      <div class="lab-inner">
                        <div class="testi-top">
                          <div class="testi-t-thumb">
                            <img
                              src="assets/images/testimonial/03.jpg"
                              alt="author-image"
                            />
                          </div>
                          <div class="testi-t-content">
                            <a href="#">
                              <h6>Sarki Tamang</h6>
                            </a>
                            <p>Visitor</p>
                            <div class="rating">
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                              <span>
                                <a href="#">
                                  <i class="far fa-star"></i>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class="testi-bottom">
                          <p>
                            <img
                              class="q1"
                              src="assets/images/testimonial/q1.png"
                              alt='"'
                            />
                            This is really great 😊 place. Must important thing
                            is cleaning and servicing. Rajesh and all crews are
                            Amazing.
                            <img
                              class="q2"
                              src="assets/images/testimonial/q2.png"
                              alt='"'
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- testimonial Section end here --> */}
      {/* <!-- footer Section start here --> */}
      <Footer />
    </div>
  );
}
