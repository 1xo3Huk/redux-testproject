import React, { Component } from 'react'
import { connect } from 'react-redux'

import Page from '../components/Page'
import { getPhotos } from '../actions/PageActions'

class PageContainer extends Component {

    render() {
        
        const { page, getPhotos } = this.props
        
        return (

            <Page
                photos={page.photos}
                year={page.year}
                isFetching={page.isFetching}
                error={page.error}
                getPhotos={getPhotos}
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

        getPhotos: year => dispatch(getPhotos(year)),

    }
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageContainer)