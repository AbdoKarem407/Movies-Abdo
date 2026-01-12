import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function MainNavbar({ setSearch }) {
  return (
   
    
   <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Nav className='Movie'>
        <Navbar.Brand href="#"><span>Movie List</span></Navbar.Brand>
         </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

       
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
     
          </Nav>
          <Form className="d-flex">
            <Form.Control 
            
              type="search"
              placeholder="Search movies..."
              className="me-2"
              aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
            />
            <Button className='btn-search' variant="outline-success"><nav>🔍 Search</nav></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;