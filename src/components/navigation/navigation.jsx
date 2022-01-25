import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { auth } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { clearCart, toggleCartHidden } from "../../redux/cart/cart.action";

import { toast } from "react-toastify";
import {
  NaviContainer,
  StyledNaviContent,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  BrandLogo,
} from "./navigation.styles";

const Navigation = ({ currentUser, hidden, clearCart }) => (
  <header class="header-section sticky top-0 z-10 bg-white">
    {/* <!-- Mobile Menu Start Here --> */}
    <div class="mobile-menu transparent-header">
      <nav class="mobile-header">
        <div class="header-logo">
          <a href="index.html">
            <img src="assets/images/logo/01.png" alt="logo" />
          </a>
        </div>
        <div class="header-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <nav class="mobile-menu">
        <div class="mobile-menu-area">
          <div class="mobile-menu-area-inner">
            <ul class="lab-ul">
              <li>
                <a href="#0">Home</a>
                <ul class="lab-ul">
                  <li>
                    <a href="index.html">Home Page One</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home Page Two</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="#0">Pages</a>
                <ul class="lab-ul">
                  <li>
                    <a href="team.html">Team Membar</a>
                  </li>
                  <li>
                    <a href="faq-page.html">Faq Page</a>
                  </li>
                  <li>
                    <a href="404.html">404 Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#0">Blog</a>
                <ul class="lab-ul">
                  <li>
                    <a href="blog.html">Blog Right Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-ls.html">Blog left Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li class="active">
                <a href="#0">Shop</a>
                <ul class="lab-ul">
                  <li class="active">
                    <a href="product-page.html">Products Page</a>
                  </li>
                  <li>
                    <a href="product-single.html">Products Details</a>
                  </li>
                  <li>
                    <a href="cart-page.html">Cart Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    {/* <!-- Mobile Menu Ending Here --> */}
    <div class="header-top">
      <div class="container ">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-5 col-12">
            <div class="logo py-2">
              <a href="/">
                <img src="assets/images/logo/01.png" alt="logo" />
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
                  <div
                    class="ht-add-content"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/maps?q=Brook%20Meadow%20farm%201306%20Longview%20Dr.%20Harrisburg,%20PA%2017111,%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      )
                    }
                  >
                    <span>1306 Longview Dr. Harrisburg</span>
                    <span class="d-block text-bold">
                      PA 17111, United States
                    </span>
                  </div>
                </li>

                <li class="d-flex flex-wrap align-items-center ml-3">
                  <div class="ht-add-thumb mr-2">
                    <img src="assets/images/header/03.png" alt="call" />
                  </div>
                  <div class="ht-add-content">
                    <span>Make Call </span>
                    <span class="d-block text-bold">
                      <a href="tel: +1 717-982-2038">+1 717-982-2038</a>
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" header-bottom bg-theme">
      <div class="header-area">
        <div class="container">
          <div class="primary-menu">
            <div class="main-area w-100">
              <div class="main-menu d-flex flex-wrap align-items-center justify-content-between w-100">
                <div class="logo">
                  <a href="/">
                    <img src="assets/images/logo/02.png" alt="logo" />
                  </a>
                </div>
                <ul class="lab-ul">
                  <li class="active">
                    <a href="/">Home</a>
                  </li>

                  {/* <li>
                    <a href="/shop">Shop</a>
                    <ul class="lab-ul"></ul>
                  </li> */}

                  <li>
                    <a href="contact">Contact</a>
                  </li>
                </ul>
                <ul class="lab-ul search-cart">
                  <li>
                    <div class="cart-option">
                      <CartIcon />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {hidden ? null : <CartDropdown />}
  </header>

  // <NaviContainer>
  //   <StyledNaviContent>
  //     <BrandLogo>
  //       <h3 style={{ textAlign: "center" }}>BrookMeadow Fresh Farms</h3>

  //       {currentUser ? (
  //         currentUser.photoURL ? (
  //           <img
  //             style={{
  //               width: "40px",
  //               height: "40px",
  //               borderRadius: "50%",
  //               border: "2px solid #fff",
  //               marginTop: "20px",
  //             }}
  //             src={currentUser.photoURL}
  //             alt="user-display"
  //           />
  //         ) : (
  //           <p className="capitalize"> Hi, {currentUser.displayName}</p>
  //         )
  //       ) : null}
  //     </BrandLogo>

  //     <OptionsContainer>
  //       <OptionLink to="/">
  //         <p style={{ color: "white" }}>HOME</p>
  //       </OptionLink>

  //       <OptionLink to="/shop">
  //         {" "}
  //         <p style={{ color: "white" }}>SHOP</p>
  //       </OptionLink>

  //       {/* {currentUser ? (
  //         <OptionLink
  //           to="/"
  //           onClick={() => {
  //             auth.signOut();
  //             clearCart();
  //             toast.success("Signed Out Success.");
  //           }}
  //         >
  //           SIGN OUT
  //         </OptionLink>
  //       ) : (
  //         <OptionLink to="/signin">SIGN IN</OptionLink>
  //       )} */}

  //       <CartIcon />
  //     </OptionsContainer>
  //   </StyledNaviContent>
  //   {hidden ? null : <CartDropdown />}
  // </NaviContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
