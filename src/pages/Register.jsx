import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../config/firebase";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user} = useUserContext()
  useRedirectActiveUser(user, "/")
 

  const handleSubmit =async (e) => {
    e.preventDefault()
    try {
      await register({email,password})
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex justify-content-center align-items-center">
      <MDBCard className="col-12 col-md-8 col-lg-6 col-xl-5">
        <MDBCardBody>
          <h2 className="text-center">Registro</h2>
          <form className="text-center" onSubmit={handleSubmit}>
            <MDBInput
              wrapperClass="mb-4"
              label="Nombre"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Apellido"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              value={email} onChange={e=> setEmail(e.target.value)}
              label="Email"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              type="password"
              value={password} onChange={e=> setPassword(e.target.value)}
            />
            <MDBBtn className="mb-4 text-center">Registrarse</MDBBtn>
            <div className="text-center">
              <p>
                Tiene Cuenta? <Link to="/login">iniciar sesion</Link>
              </p>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
