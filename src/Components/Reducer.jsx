const Reducer = (state , action) =>{
    switch(action.type){
        case "GET_Books":{
            return {
                ...state,
                items : action.payload.items,
                isLoading : action.payload.isLoading
            }
        }
    }
    return state
}
export default Reducer;