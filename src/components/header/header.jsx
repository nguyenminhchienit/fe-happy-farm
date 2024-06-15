/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import "../header/header.css";
import Logo from "../../assets/images/logo3.svg";
import SearchIcon from "@mui/icons-material/Search";
// import Select from "../selectDrop/select";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import IconCompare from "../../assets/images/icon-compare.svg";
import IconHeart from "../../assets/images/icon-heart.svg";
import IconCart from "../../assets/images/icon-cart.svg";
import IconUser from "../../assets/images/icon-user.svg";

import Button from "@mui/material/Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { ClickAwayListener } from "@mui/base/ClickAwayListener";

import Nav from "./nav/nav";
import MenuIcon from "@mui/icons-material/Menu";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Select from "../selectDrop/select";

const Header = (props) => {
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [isOpenAccDropDown, setisOpenAccDropDown] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isopenSearch, setOpenSearch] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);

  const headerRef = useRef();
  const searchInput = useRef();

  const [categories, setcategories] = useState([
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
    "Pet Foods & Toy",
    "Fast food",
    "Baking material",
    "Vegetables",
    "Fresh Fruit",
    "Bread and Juice",
    "Milks and Dairies",
    "Wines & Drinks",
    "Clothing & beauty",
    "Fresh Seafood",
  ]);

  const countryList = [];

  // useEffect(() => {
  //   getCountry("https://countriesnow.space/api/v0.1/countries/");
  // }, []);

  // const getCountry = async (url) => {
  //   try {
  //     await axios.get(url).then((res) => {
  //       if (res !== null) {
  //         //console.log(res.data.data);
  //         res.data.data.map((item, index) => {
  //           countryList.push(item.country);
  //           //console.log(item.country)
  //         });

  //         //console.log(res.data.data[0].country)
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    });
  }, []);

  console.log(props);

  return (
    <>
      <div className="headerWrapper" ref={headerRef}>
        <header>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-2 part1 d-flex align-items-center">
                {/* <Link to="/"> */}
                <img src={Logo} className="logo" alt="" />
                {/* </Link> */}
                {windowWidth < 992 && (
                  <div className="ml-auto d-flex align-items-center">
                    <div className="navbarToggle mr-0">
                      <SearchIcon />
                    </div>
                    <ul className="list list-inline mb-0 headerTabs pl-0 mr-4">
                      <li className="list-inline-item">
                        <span>
                          <a href={"/cart"}>
                            {" "}
                            <img src={IconCart} alt="" />
                            <span className="badge bg-success rounded-circle">
                              0
                            </span>
                          </a>
                        </span>
                      </li>
                    </ul>
                    <div className="navbarToggle mr-2">
                      <MenuIcon />
                    </div>
                  </div>
                )}
              </div>

              {/*headerSearch start here */}
              <div className="col-sm-5 part2">
                <div
                  className={`headerSearch d-flex align-items-center ${
                    isopenSearch === true ? "open" : ""
                  }`}
                >
                  {windowWidth < 992 && (
                    <div className="closeSearch">
                      <ArrowBackIosIcon />
                    </div>
                  )}
                  <Select
                    data={categories}
                    placeholder={"All Categories"}
                    icon={false}
                  />

                  <div className="search">
                    <input
                      type="text"
                      placeholder="Search for items..."
                      ref={searchInput}
                    />
                    <SearchIcon className="searchIcon cursor" />
                  </div>
                </div>
              </div>
              {/*headerSearch start here */}

              <div className="col-sm-5 d-flex align-items-center part3 res-hide">
                <div className="ml-auto d-flex align-items-center">
                  <div className="countryWrapper">
                    <Select
                      data={countryList}
                      placeholder={"Your Location"}
                      icon={
                        <LocationOnOutlinedIcon style={{ opacity: "0.5" }} />
                      }
                    />
                  </div>
                  <ClickAwayListener
                    onClickAway={() => setisOpenDropDown(false)}
                  >
                    <ul className="list list-inline mb-0 headerTabs">
                      <li className="list-inline-item">
                        <span>
                          <img src={IconCompare} alt="" />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          Compare
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span>
                          <img src={IconHeart} alt="" />
                          <span className="badge bg-success rounded-circle">
                            3
                          </span>
                          Wishlist
                        </span>
                      </li>
                      <li className="list-inline-item">
                        <span>
                          <a href={"/cart"}>
                            {" "}
                            <img src={IconCart} alt="" />
                            <span className="badge bg-success rounded-circle">
                              0
                            </span>
                            Cart
                          </a>
                        </span>
                      </li>

                      {1 === 1 ? (
                        <li className="list-inline-item">
                          <span
                            onClick={() => setisOpenDropDown(!isOpenDropDown)}
                          >
                            <img src={IconUser} alt="" />
                            Account
                          </span>

                          {isOpenDropDown !== false && (
                            <ul className="dropdownMenu">
                              <li>
                                <Button className="align-items-center">
                                  <Person2OutlinedIcon /> My Account
                                </Button>
                              </li>
                              <li>
                                <Button>
                                  <LocationOnOutlinedIcon /> Order Tracking
                                </Button>
                              </li>
                              <li>
                                <Button>
                                  <FavoriteBorderOutlinedIcon /> My Wishlist
                                </Button>
                              </li>
                              <li>
                                <Button>
                                  <SettingsOutlinedIcon /> Setting
                                </Button>
                              </li>
                              <li>
                                <Button>
                                  <LogoutOutlinedIcon /> Sign out
                                </Button>
                              </li>
                            </ul>
                          )}
                        </li>
                      ) : (
                        <li className="list-inline-item">
                          <a href={"/signIn"}>
                            <Button className="btn btn-g">Sign In</Button>
                          </a>
                        </li>
                      )}
                    </ul>
                  </ClickAwayListener>
                </div>
              </div>
            </div>
          </div>
        </header>

        <Nav data={props.data} openNav={isOpenNav} />
      </div>

      {/* <div className="afterHeader"></div> */}

      {/* {isOpenAccDropDown !== false && (
        <>
          <div className="navbarOverlay" onClick={closeNav}></div>
          <ul className="dropdownMenu dropdownMenuAcc" onClick={closeNav}>
            <li>
              <Button className="align-items-center">
                <Link to="">
                  <Person2OutlinedIcon /> My Account
                </Link>
              </Button>
            </li>
            <li>
              <Button className="align-items-center">
                <Link to="">
                  {" "}
                  <img src={IconCompare} alt="" />
                  Compare
                </Link>
              </Button>
            </li>
            <li>
              <Button className="align-items-center">
                <Link to="">
                  {" "}
                  <img src={IconCart} alt="" />
                  Cart
                </Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link to="">
                  <LocationOnOutlinedIcon /> Order Tracking
                </Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link to="">
                  <FavoriteBorderOutlinedIcon /> My Wishlist
                </Link>
              </Button>
            </li>
            <li>
              <Button>
                <Link to="">
                  <SettingsOutlinedIcon /> Setting
                </Link>
              </Button>
            </li>
            <li>
              <Button onClick={signOut}>
                <Link to="">
                  <LogoutOutlinedIcon /> Sign out
                </Link>
              </Button>
            </li>
          </ul>
        </>
      )} */}
    </>
  );
};

export default Header;
