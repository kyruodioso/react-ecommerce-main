import { useContext, createContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { MDBSpinner} from "mdb-react-ui-kit";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsuscribe;
  }, []);

  if (user === false)
    return (
        < >
    <div className="border d-flex align-items-center justify-content-center" style={{height:'100vh'}}>

      <MDBSpinner grow className="mx-2" color="info">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow className="mx-2" color="info">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
      <MDBSpinner grow className="mx-2" color="info">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    
      </div>
      </>
    );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);
