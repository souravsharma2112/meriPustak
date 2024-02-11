import React, { useContext, useEffect, useReducer} from "react";
import Reducer from "./Reducer";

const apiKey = "AIzaSyCNxwRiOq8mQWCIw4hmHkT4YIQVANrU71c";

const initialState = {
    query: "trending",
    nbPages: 0,
    pages: 0,
    isLoading: true,
    items: [],
    result : 40
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

    // to call the Api

    const searchPost = (searchPost) => {
        dispatch({
            type: "search_QUERY",
            payload: searchPost
        })
    }
    const searchPost2 = (trending) => {
        dispatch({
            type: "search_QUERY2",
            payload: trending
        })
    }
    useEffect(() => {
        apiCalling(`https://www.googleapis.com/books/v1/volumes?q=${state.query}&key=${apiKey}&maxResults=${state.result}`)
    }, [state.query])

    

    return (
        <AppContext.Provider value={{...state , searchPost ,searchPost2}}>
            {children}
        </AppContext.Provider>

    );
    
};
const useGlobleContext= () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider , useGlobleContext }