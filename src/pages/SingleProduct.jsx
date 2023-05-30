import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

import {
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBTypography,
} from "mdb-react-ui-kit";
import ButtonAddProduct from "../components/ButtonAddProduct";

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { user } = useUserContext();

  return (
    <>
      <div className="d-flex justify-content-start mb-2 ms-3 mt-3">
        <MDBBtn className="me-1" color="warning" tag={Link} to="/">
          <MDBIcon fas icon="arrow-left" />
          Volver
        </MDBBtn>
      </div>
      <MDBCard style={{ width: "100%" }}>
        <div className="d-flex justify-content-end me-3 mt-2">
          {user && (
            <>
              <ButtonAddProduct />
              <MDBBtn size="lg" rounded>
                Comprar
              </MDBBtn>
            </>
          )}
        </div>
        <MDBRow className="g-0">
          <MDBCol md="4">
            <div className="bg-image hover-zoom">
              <MDBCardImage src={product.image} alt={product.title} fluid />
            </div>
          </MDBCol>
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle>{product.title}</MDBCardTitle>
              <MDBCardText>{product.description}</MDBCardText>
              <MDBCardText>
                <MDBTypography
                  tag="span"
                  className="display-3 pb-3 mb-3 border-bottom d-flex justify-content-end"
                >
                  ${product.price}
                </MDBTypography>
              </MDBCardText>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </>
  );
};

export default SingleProduct;
