export const initialvalue={task:[]}

export const stateReduce=(state,action)=>{
   if(action.type==="addTask"){
    return{
       ...state,
       task: action.payload,
    }
   }

   switch(action.type){
      case 'setevent':
         return{
         ...state,
         task:action.payload
         }
      case 'deltask':
         return{
            ...state,
            task:state.task.filter((item)=>item.id !== action.payload)
         }
   }

}

