import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAIL, ADD_TO_FAVORITE, DISABLE_PHOTOS } from '../actions/PageActions'

const initialState = {

    year: 2018,
    photos: [],
    isFetching: false,
    isFavorite: [],
    error: '',      
}

export function pageReducer(state = initialState, action) {
    
    switch (action.type) {

        case GET_PHOTOS_REQUEST:
            return { ...state, year: action.payload, isFetching: true, error: '' }

        case GET_PHOTOS_SUCCESS:
            return { ...state, photos: action.payload, isFetching: false, error: '' }

        case GET_PHOTOS_FAIL:
            return { ...initialState, year: state.year, error: action.payload.message, isFetching: false }

        case ADD_TO_FAVORITE: {
            
            let arr = []
            
            action.payload.forEach(element => {
                
                for (let i = 0; i < state.photos.length; i++) {

                    if (state.photos[i].id === element) {
                        
                        arr.push(state.photos[i])
                    }    
                }
            });
            return { ...state, isFavorite: arr }
        }

        case DISABLE_PHOTOS: {            
            return { ...initialState, year: state.year }
        }

        default: 
            return { ...initialState, year: state.year }
    }
}
