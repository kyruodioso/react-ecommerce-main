import { useLoaderData } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import ButtonAddProduct from "../components/ButtonAddProduct";
import "./home.css";

const Home = () => {
  //se traen los elementos del servicio

  const { products } = useLoaderData();
  const { user } = useUserContext();

  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="justify-content-center mb-0">
          {products?.map((product) => (
            <MDBCol md="12" xl="10" key={product.id}>
              <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol
                      md="12"
                      lg="3"
                      className="mb-4 mb-lg-0"
                      key={product.id}
                    >
                      <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom hover-overlay"
                      >
                        <MDBCardImage
                          src={product.image}
                          fluid
                          className="w-100"
                        />
                        <a>
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          ></div>
                        </a>
                      </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6">
                      <h5>Quant trident shirts</h5>
                      <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                          <ReactStars
                            fas
                            icon="star"
                            edit={false}
                            count={product.rating.rate}
                            size={24}
                            color="#ffd700"
                          />
                        </div>
                      </div>
                      <div className="mt-1 mb-0 text-muted small">
                        <span className="text-primary"> • </span>
                        <span>{product.category}</span>
                        <span className="text-primary"> • </span>
                      </div>
                      <p className="mb-4 mb-md-0">{product.description}</p>
                    </MDBCol>
                    <MDBCol
                      md="6"
                      lg="3"
                      className="border-sm-start-none border-start"
                    >
                      <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">${product.price}</h4>
                        <span className="text-danger">
                          <s>${(product.price + 20).toFixed(2)}</s>
                        </span>
                      </div>
                      <h6 className="text-danger">Oferta!</h6>
                      <div className="d-flex flex-column mt-4">
                        <MDBBtn
                          color="primary"
                          size="sm"
                          tag={Link}
                          to={`/products/${product.id}`}
                        >
                          Detalles
                        </MDBBtn>
                        {user && (
                          <>
                            <MDBBtn color="success" size="sm" className="mt-2">
                              Comprar
                            </MDBBtn>
                            <ButtonAddProduct />
                          </>
                        )}
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Home;
