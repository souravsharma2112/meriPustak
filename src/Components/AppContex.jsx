import React, { useContext, useEffect, useReducer} from "react";
import Reducer from "./Reducer";

const apiKey = "AIzaSyCNxwRiOq8mQWCIw4hmHkT4YIQVANrU71c";

const initialState = {
    query: "erotic",
    nbPages: 0,
    pages: 0,
    isLoading: true,
    items: []
}

const AppContext = React.createContext();
// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {

    const [state , dispatch] = useReducer(Reducer , initialState)
    const apiCalling = async (url) => {
        try {
            const res = await fetch(url)
            const data = await res.json()
            dispatch({
                type: "GET_Books",
                payload : {
                    items: data.items,
                    isLoading : data.isLoading
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        apiCalling(`https://www.googleapis.com/books/v1/volumes?q=${state.query}=free-ebooks&key=${apiKey}`)
    }, [])

    

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>

    );
    
};
const useGlobleContext= () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider , useGlobleContext }