import Card from 'react-bootstrap/Card';
import { Context } from '../Store/AppContext';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

function InformacionPersonajes() {
    let { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getRiki(params.id);
    }, [])
    console.log("InformacionPersonaje", store);

    return (
        <>

            <Card className='dos'>
                <Card.Img className='imagen2' variant="top" src={store.detalle.image} />
                <Card.Body>
                    <Card.Text>

                        <h1>{store.detalle.name}</h1>
                        <p>Genero : {store.detalle.gender}</p>

                        <p>Especie : {store.detalle.species}</p>
                        <p>Estado : {store.detalle.status}</p>

                    </Card.Text>
                </Card.Body>

            </Card>

        </>


    );
}

export default InformacionPersonajes;