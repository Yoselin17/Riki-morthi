const gestState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            Personajes: [],
            detalle: {},
            meEncanta: []
        },
        actions: {
            //personajes//
            getPersonajes: () => {
                fetch("https://rickandmortyapi.com/api/character",
                    {
                        method: "GET",
                        headers: { "Content-Type": "application/json" }
                    }).then(Response => Response.json()).then(data => setStore({ Personajes: data.results }))
            },

            //getStar//
            getRiki: (index) => {
                const actions = getActions();

                fetch("https://rickandmortyapi.com/api/character/" + index, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }

                }).then(Response => Response.json())
                    .then(data => actions.getData(data));
            },

            getData: (data) => {
                setStore({ detalle: data })
            },
            guardarFavoritos: (meGusta) => {
                const store = getStore();
                const actions = getActions();

                if (!store.meEncanta.includes(meGusta)) {
                    setStore({
                        meEncanta: [...store.meEncanta, meGusta]
                    });
                } else {
                    const array = store.meGusta;
                    const sonIguales = elegirFavoritos => elegirFavoritos === elegirFavoritos;
                    let index = array.findIndex(sonIguales);
                    if (index > -1) actions.removeFavorite(index);
                }
            },
            borrarFavoritos: (index) => {
                const store = getStore();
                store.meEncanta.splice(index, 1);
                setStore({
                    meEncanta: store.meEncanta
                });
            }

        },
    };
};


export default gestState;