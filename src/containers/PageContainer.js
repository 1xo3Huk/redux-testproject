import React, { Component } from 'react'
import { connect } from 'react-redux'

import Page from '../components/Page'
import { getPhotos, addToFavorite } from '../actions/PageActions'

class PageContainer extends Component {

    render() {
        
        const { page, getPhotos, addToFavorite, isLogout } = this.props
        
        return (

            <Page
                photos={page.photos}
                year={page.year}
                isFetching={page.isFetching}
                isFavorite={page.isFavorite}
                error={page.error}
                getPhotos={getPhotos}
                addToFavorite={addToFavorite}
                isLogout={isLogout}
            />        
        )
    }
}

const mapStateToProps = store => {

    return {

        page: store.pageReducer,        
    }
}

const mapDispatchToProps = dispatch => {
    
    return {

        getPhotos: (year, isLogout) => dispatch(getPhotos(year, isLogout)),
        addToFavorite: arr => dispatch(addToFavorite(arr)),
    }    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageContainer)