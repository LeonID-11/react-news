import { StoreStructure } from "../entities/StoreStructure";
import { Reducer } from "redux";
import { ActionTypeBase } from "../actions/actionsTypes";
import { LOAD_NEWS, ADD_NEWS } from "../actions/newAction";

const initState: StoreStructure = {
    articles: [],
    read: [],
    favorite: [],
    withComplains: [],
};

const newReducer: Reducer<any> = (state: StoreStructure, action: ActionTypeBase) =>{
    switch(action.type){
        case LOAD_NEWS:
            console.log('load_news')
            break
        case ADD_NEWS:
            console.log('add_news')
            break
        dafault:
            return state;
    }
}

export default newReducer;