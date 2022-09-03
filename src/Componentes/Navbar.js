import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Context } from '../Store/AppContext';
import { useContext } from 'react';




function Navbarcomponente() {
  const { store, actions } = useContext(Context);

  function deleteFavorito(index) {
    actions.borrarFavoritos(index);

  }

  return (
    <>
      <Navbar>
        <Container className='barra'>
          <Navbar.Brand href="#home">
            <img className='logo' src='https://th.bing.com/th/id/OIP.Z98LKLcSmAxc7HCwQyMhXgHaEK?w=273&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>

            </Navbar.Text>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Me Gusta <Badge bg="secondary">{store.meEncanta.length}</Badge>
                <span className="visually-hidden">unread messages</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {(
                  store.meEncanta.length === 0) ?
                  <Dropdown.Item href="#/action-1">Aun no se han dado like</Dropdown.Item> :
                  store.meEncanta.map((favorite, index) =>
                    <Dropdown.Item href="#/action-1">{favorite}
                      <Button onClick={() => { deleteFavorito(index) }}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>

                      </Button>
                    </Dropdown.Item>
                  )}

              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navbarcomponente;               