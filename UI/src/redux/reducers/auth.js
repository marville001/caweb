const authReducer = (state={name:"CAWEB"}, action)=>{
    switch (action.type) {
        case "LOGIN":
            return state    
        default:
            return state
    }
}