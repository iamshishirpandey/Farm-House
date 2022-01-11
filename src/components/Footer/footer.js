import GoogleMapReact from "google-map-react";
export default function footer() {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  return (
    <div className="footer-top  padding-tb bg-ash mt-10">
      <div className="shape-images">
        <img src="assets/images/shape-img/01.png" alt="shape-images" />
      </div>
      <div className="container">
        <div className="section-wrapper row justify-between ">
          <div className="col-xl-4 col-md-2">
            <div className="post-item">
              <div className="footer-logo">
                <b>Brook Meadow farm</b>
              </div>
              <p>
                Meadow Brook Farms is a producer/dealer of high quality hay and
                straw for all types of horses, livestock and soil stabilizing
                construction projects.
              </p>
              <p>
                Our primary focus is eastern Pennsylvania, New Jersey and
                overseas export is accommodated.
              </p>
            </div>
          </div>
          <div className="col-xl-3 col-md-2">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyA1pCEqYUMWY9CjYVg0_AO_69qVxrNPEIA",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
          </div>

          <div className="col-xl-3 col-md-2">
            <div className="post-item">
              <div className="post-title">
                <b>Keep In Touch</b>
              </div>
              <ul className="lab-ul footer-location">
                <li>
                  <div className="icon-part">
                    <i className="icofont-phone"></i>
                  </div>
                  <div className="content-part">
                    <p>+1 717-982-2038</p>
                    <p>+1 717-982-2038</p>
                  </div>
                </li>
                <li>
                  <div className="icon-part">
                    <i className="icofont-wall-clock"></i>
                  </div>
                  <div className="content-part">
                    <p>Wed - Sunday 09:00 - 5:00</p>
                    <p>(except public holidays)</p>
                  </div>
                </li>
                <li>
                  <div className="icon-part">
                    <i className="icofont-location-pin"></i>
                  </div>
                  <div className="content-part">
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
  );
}
