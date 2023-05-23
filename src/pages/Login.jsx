import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from "../config/firebase";
import { useUserContext } from "../context/UserContext";
import { Formik } from "formik";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();
  const { user } = useUserContext();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const { setUser } = useUserContext();

  const onSubmit = async (
    { email, password },
    { setSubmitting, setErrors, resetForm }
  ) => {
    try {
      await login({ email, password });
      setUser({
        name: email,
      });
      navigate("/");
      resetForm();
    } catch (error) {
      console.log(error);
      if (error.code === "auth/user-not-found") {
        return setErrors({ email: "usuario no registrado" });
      }
      if (error.code === "auth/wrong-password") {
        return setErrors({ password: "contraseña incorrecta" });
      }
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("email no válido").required("Email requerido"),
    password: Yup.string()
      .trim()
      .min(6, "Minimo 6 carácteres")
      .required("Campo requerido"),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          errors,
          touched,
          handleBlur,
          isSubmitting,
        }) => (
          <MDBContainer className="p-3 my-5 d-flex justify-content-center align-items-center">
            <MDBCard className="col-12 col-md-8 col-lg-6 col-xl-5">
              <MDBCardBody>
                <form className="text-center" onSubmit={handleSubmit}>
                  <h2 className="text-center">Login</h2>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && errors.email}
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && errors.password}
                  <div className="d-flex justify-content-between mx-3 mb-4">
                    <a href="!#">recuperar contraseña?</a>
                  </div>
                  <MDBBtn
                    className="mb-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Entrar
                  </MDBBtn>
                </form>
                <div className="text-center">
                  <Link to="/register">Registrarse</Link>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        )}
      </Formik>
    </>
  );
}

export default Login;
