export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST'
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS'
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL'
export const DISABLE_PHOTOS = 'DISABLE_PHOTOS'

let photosArr = []
var cached = false;

export function getPhotos(year) {
    
    return dispatch => {

        dispatch({

            type: GET_PHOTOS_REQUEST,
            payload: year,

        })

        if (cached) {
            
            dispachReceivedPhotos(year, photosArr, dispatch)

        } else {

            getAllPhotos(0, 200, year, dispatch)

        }        

    }

}

function getPhoto(year, photos) {
    
    let yearPhotoArr = []

    photos.forEach(item => {
        
        let photoYear = new Date(item.date * 1000).getFullYear()

        if (photoYear === year) {

            yearPhotoArr.push(item) 

        }

    })

    yearPhotoArr.sort((a, b) => b.likes.count - a.likes.count)

    return yearPhotoArr

}

function dispachReceivedPhotos(year, photosArr, dispatch) {

    let photos = getPhoto(year, photosArr)
                    
    dispatch({

        type: GET_PHOTOS_SUCCESS,
        payload: photos,

    })

}

function getAllPhotos(offset, count, year, dispatch) {
    //eslint-disable-next-line no-undef
    VK.Api.call(
        'photos.getAll',
        { extended: 1, count: count, offset: offset, v: '5.84' },
        r => {

            try {          
                
                photosArr = photosArr.concat(r.response.items)
                if (offset < r.response.count - 1) { 
                                   
                    offset += 200
                    getAllPhotos(offset, count, year, dispatch)

                } else {
                    
                    cached = true

                    dispachReceivedPhotos(year, photosArr, dispatch)
                }

            } catch (e) {

                dispatch({

                    type: GET_PHOTOS_FAIL,
                    error: true,
                    payload: new Error(e),

                })

            }

        }
    )
}

export function disablePhotos(year) {

    return dispatch => { 

        dispatch({

            type: DISABLE_PHOTOS,
            payload: [],

        })

    }

}
            