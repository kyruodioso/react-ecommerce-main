import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCardFooter,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useUserContext } from "../context/UserContext";
import ButtonAddProduct from "../components/ButtonAddProduct";

const Home = () => {
  //se traen los elementos del servicio

  const { user } = useUserContext();

  const { products } = useLoaderData();
  





  return (
    <>
      <MDBContainer>
        <MDBTypography tag="h1">Productos</MDBTypography>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          {products?.map((product) => (
            <MDBCol size="md-4" key={product.id}>
              <MDBCard className="h-100">
                <div
                  className="bg-image hover-zoom"
                  style={{ maxHeight: "150px" }}
                >
                  <MDBCardImage
                    src={product.image}
                    position="top"
                    alt={product.title}
                  />
                </div>
                <MDBCardBody>
                  <MDBCardTitle>{product.title}</MDBCardTitle>
                  <MDBCardText maxLength={"255"}>
                    {product.description}
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                  <div className="d-flex justify-content-end mb-4">
                    <MDBTypography tag="h3">${product.price}</MDBTypography>
                  </div>
                  <div className="d-flex justify-content-between">
                    {user && (
                    <ButtonAddProduct/>
                    )}
                    <MDBBtn href="#">Comprar</MDBBtn>
                    <MDBBtn
                      color="info"
                      tag={Link}
                      to={`/products/${product.id}`}
                    >
                      Ver
                    </MDBBtn>
                  </div>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Home;
