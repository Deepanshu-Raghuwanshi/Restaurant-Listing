import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import styles from './Header.module.css'
const Header = ()=>{

    
  return(<>
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><h3>The Restaurants Place</h3></Navbar.Brand>
        <Navbar.Toggle />
      
       
      </Container>
    </Navbar>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
              <Nav.Link href="/movies" className={styles.navlinksmall}>List</Nav.Link>
              <Nav.Link href="/play" className={styles.navlinksmall} >Signup</Nav.Link>
             
                       <Nav.Link href="/contactus" className={styles.navlinksmall}>ContactUs</Nav.Link>
            
          </Nav>
           

      <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            User Signup/Login : 
            <a href="/usersignup">Here</a>
          </Navbar.Text>
        </Navbar.Collapse> 
       
       
        </Container>
      </Navbar>
 


  
  </>)
}
export default Header;