import { LOAD_NEWS, ADD_NEWS, REMOVE_NEWS, EDIT_NEWS } from "./newAction";
import { Article } from "../entities/Article";
import { MARK_AS_READ, ADD_TO_FAVORITE, ADD_TO_READ_LATER, RATE_ARTICLE, ADD_COMMENT, ADD_COMPLAIN } from "./articleActions";

export const loadNews = ():NewActionType =>{
    return {
        type: LOAD_NEWS,

    }
}

export const addNew = (article: Article):NewActionType =>{
    return{
        type: ADD_NEWS,
        article
    }
}

export const removeNews = (id:string):NewActionType =>{
    return{
        type: REMOVE_NEWS,
        id
    }
}

export const editNew = (article: Article):NewActionType =>{
    return {
        type: EDIT_NEWS,
        article
    }
}

export const markAsRead = (id: string):ArticleActionType =>{
    return{
        type: MARK_AS_READ,
        id
    }
}

export const addToFavorite = (id:string):ArticleActionType =>{
    return{
        type: ADD_TO_FAVORITE,
        id
    }
}

export const addToReadLater = (id:string):ArticleActionType =>{
    return{
        type: ADD_TO_READ_LATER,
        id
    }
}

export const rateArticle = (id:string, rate: number):ArticleActionType =>{
    return{
        type: RATE_ARTICLE,
        id,
        rate
    }
}

export const addComment = (id:string, comment:string ):ArticleActionType =>{
    return{
        type: ADD_COMMENT,
        id,
        comment
    }
}

export const addComplain = (id:string, complain:string ):ArticleActionType =>{
    return{
        type: ADD_COMPLAIN,
        id,
        complain
    }
}


export interface ActionTypeBase {
    type: string;
}

export interface NewActionType extends ActionTypeBase {
    id?: string;
    article?: Article;
}

export interface ArticleActionType extends ActionTypeBase {
    id?: string;
    rate?: number;
    comment?: string;
    complain?: string;
}
