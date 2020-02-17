import { 
    SEARCH, 
    SELECT, 
    RESULTS, 
    LOADING
} from './actions';

const defaultState = {
    query: '', 
    results: [], 
    isLoading: false
}

export function art(state=defaultState, action) {
    switch(action.type) {
        case SEARCH:
            return {
                ...state, 
                query: action.payload.query
            }
            break;
        case SELECT:
            return {
                ...state
            }
            break;
        case RESULTS:
            return {
                ...state, 
                results: action.payload.results

            }
            break;
        case LOADING:
            return {
                ...state, 
                isLoading: action.payload.isLoading
            }
            break;
    }
}

