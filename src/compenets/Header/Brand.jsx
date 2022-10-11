import { Navbar } from "react-bootstrap"
import Logo from "../../assets/image/Logo.png";


export const Brand = () => {

    return(
        <Navbar.Brand href="#"><img src={Logo} alt="Logo" width='100' height='auto'/></Navbar.Brand>
    )
    

} 

