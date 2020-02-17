## Met Art API

Met API (https://www.metmuseum.org/blogs/now-at-the-met/2018/met-collection-api)

Features:
- Search for art 
- See list of results 
- Click on result
- See result somewhere on page 

### Making AJAX requests from React + Redux 

There are two different ways. Use option #1 unless you need 
to compare to existing state 

### Option 1: async/await in ```mapDispatchToProps```

```javascript 
function mapDispatchToProps(dispatch) {
    return {
        handleClick: async (query) => {
            dispatch(actionLoading(true));
            dispatch(actionSearch(query));

            const results = await Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`);

            dispatch(actionResults(results.data.objectIDs));
            dispatch(actionLoading(false));
        }
    }
}
```

### Option 2: ```redux-thunk```

Install the <redux-thunx> node module

```npm i redux-thunk
```

Update <App.js> or whereevenr you create your store 

```javascript 
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { art } from './reducers';
//...
const store = createStore(art, applyMiddleware(ReduxThunk));
```

Create an action creator that returns a function:

```javascript
export function asyncActionGetResults(query) {
    return (dispatch, getState) => {
        dispatch(actionLoading(true));
        dispatch(actionSearch(query));
        Axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${query}`)            
        .then(apiResults => {                
            const { results } = getState();
            
            // Contrived example using a made-up function to compare arrays:
            if (!areSame(results, apiResults.data.objectIDs)) {
                dispatch(actionResults(apiResults.data.objectIDs));
            }
            dispatch(actionLoading(false));
        })
    }
```




### example URL for search (https://collectionapi.metmuseum.org/public/collection/v1/search?q=sunflowers)

## example URL for single work of art (https://collectionapi.metmuseum.org/public/collection/v1/objects/436524)


