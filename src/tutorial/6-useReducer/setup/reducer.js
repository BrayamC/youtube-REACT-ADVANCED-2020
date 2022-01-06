
export const reducer = (state, action) => {
  if(action.type === 'ADD_ITEM'){
    const newItems = [...state.people, action.payload]
    return {
      ...state, 
      people: newItems, 
      isModalOpen:true, 
      modalContent: "item added"
    }
  }
  if(action.type === 'NO_VALUE'){
    return {
      ...state, 
      isModalOpen:true, 
      modalContent: "Please Enter Value"
    }
  }
  if(action.type === 'CLOSE_MODAL'){
    return {
      ...state, 
      isModalOpen:false, 
      modalContent: "Please Enter Value"
    }
  }
    if(action.type === 'REMOVE_ITEM'){
      const newItems = state.people.filter((item) => item.id !== action.payload)
    return {
      ...state, 
      people: newItems, 
    }
  }
  throw new Error(`Invalid action ${action}`);
};