import { createStore } from 'redux';

const Redux = () =>{
    // const incrementCount = (obj) => ({
    //     const {incrementBy} = obj;
    //     type: 'INCREMENT'
    // });

   
    const incrementCount = ( {incrementBy = 1} = {} ) => {
      
        return {
            type: 'INCREMENT',
           incrementBy
        }
    }

    const decrementCount = ({ decrementBy = 1 } = {}) => (
        {
            type: 'DECREMENT' ,
            decrementBy
        }

    );
    const store = createStore((state = {count : 0}, action) => {
        switch(action.type){
            case 'INCREMENT' :
                const incrementBy = action.incrementBy ? action.incrementBy : 1;
                console.log(`incremented by ${incrementBy}`);
                return {
                    count: state.count + incrementBy
                }
            case 'DECREMENT': 
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
            console.log("decremented by ", decrementBy);
                return {
                    count: state.count - decrementBy
                }
            case 'RESET' :
                console.log("reset");
                return {
                    count : 0
                }
             default: 
             console.log("default");
             return state ;
        }
    });

    // subscribing the function
   const unSubscribe =  store.subscribe(()=>{
        console.log(store.getState());
    });
    
    // store.dispatch({
    //     type: 'INCREMENT',
    //     incrementBy: 7
    // });
    store.dispatch(incrementCount({  incrementBy: 7}));
    store.dispatch(incrementCount());
    // store.dispatch({
    //     type: 'INCREMENT'
    // });

    //calling the unsubscribe function 
    // unSubscribe();

    store.dispatch(decrementCount({decrementBy: "rana"}));
   
    return (<div>
        <h1>Redux baby</h1>
    </div>);
}

export default Redux;