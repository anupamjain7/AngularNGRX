
import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset  } from "../counter.action";
import { counter } from "../counter.state";

export const initialState = counter;
export const counterReducer = createReducer(initialState, 
    on(increment, (state) => {
        return state+1;
    }), on(decrement, (state) =>{
        return state - 1;
        })
    , on(reset, (state) => 0
    )
);


