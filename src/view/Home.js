import React, { useContext, useEffect } from "react";
import Navbar from '../Componentes/Navbar';
import Cards from '../Componentes/Cards';
import { Context } from "../Store/AppContext";
import Navbarcomponente from "../Componentes/Navbar";


function Home() {

    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getPersonajes();
    }, []);
    console.log("store", store)
    return (
        <>

            <Navbarcomponente />
            <Cards Personajes={store.Personajes} />

        </>
    );
}


export default Home;