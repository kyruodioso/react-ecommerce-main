import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
import { useUserContext } from "../context/UserContext";
import { logout } from "../config/firebase";
import { useProductsContext } from "../context/ProductsContext";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const {cart}= useProductsContext()

  const handleLogout=async()=>{
    try {
      await logout()
    } catch (error) {
      console.log(error)
    }
  }

  const { user} = useUserContext();
/*  console.log(useProductsContext())*/




  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="primary" className="sticky-top">
        <MDBContainer fluid>
          <MDBNavbarBrand tag={Link} to='/'>React-Ecommerce</MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNav} navbar>
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink tag={Link} to="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

        <div className="d-flex align-items-center">
          {!user && (
            <>
                  <MDBBtn rounded className='mx-2' color='info' tag={Link} to="/login">
                  Login
                </MDBBtn>
            </>
          )}
          {user && (
            <>
              <MDBDropdown>
                <MDBDropdownToggle className="d-flex align-items-center hidden-arrow">
                  <span className="badge rounded-pill badge-notification bg-danger">
                    {cart}
                  </span>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle"
                    height="25"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem header>{user.email}</MDBDropdownItem>
                  <MDBDropdownItem
                    className="dropdown-item"
                    tag={Link}
                    to="/cart"
                  >
                    Cart
                  </MDBDropdownItem>           
                  <MDBDropdownItem>Total </MDBDropdownItem>
                  <MDBDropdownItem
                    className="dropdown-item btn"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </>
          )}
        </div>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}


