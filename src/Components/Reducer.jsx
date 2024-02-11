const Reducer = (state , action) =>{
    switch(action.type){
        case "GET_Books":{
            return {
                ...state,
                items : action.payload.items,
                isLoading : action.payload.isLoading
            }
        }
        case "search_QUERY":{
            return{
                ...state,
                query: action.payload
            }
        }
        case "search_QUERY2":{
            return{
                ...state,
                query: action.payload
            }
        }
    }
    return state
}
export default Reducer;