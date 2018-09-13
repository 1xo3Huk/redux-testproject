import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Photos from '../Photos'

let favArr = []

export default class Page extends Component {

    state = {

        favIsVisible: false,
    }

    onBtnClick = e => {

        const year =+ e.currentTarget.innerText;
        this.props.getPhotos(year, this.props.isLogout);
    }

    onFavClick = () => {
        
        this.props.addToFavorite(favArr)
    }

    addToFav = (id) => {        
        
        if (!this.state.favIsVisible){
            
            this.changeState();
        }

        if (favArr.indexOf(id) < 0) {
            
            favArr.push(id)
        }
    }

    changeState = () => {

        this.setState({

            favIsVisible: !this.state.favIsVisible
        })
    }
    
    renderButtons = () => {

        const currYear = new Date().getFullYear()
        const years = [currYear, currYear - 1, currYear - 2, currYear - 3, currYear - 4]

        return years.map( item => {

            return (

                <button key={item} className="btn" onClick={this.onBtnClick}>
                    {item}
                </button>
            )            
        })
    }

    renderGallery = () => {

        const { photos, isFetching, error } = this.props

        if (error) {

            return <p className="error">Во время загрузки фото произошла ошибка</p>
        }
    
        if (isFetching) {

            return <p>Чтобы просмотреть фото авторизуйтесь на сайте...</p>
        } else {
            
            return photos.map( entry => {

                var select = () => {

                    this.addToFav(entry.id);
                };

                return (

                    <Photos key={entry.id} entry={entry} select={select} />                       
                )
            })
        }
    }

    renderFavorite = () => {
        
        const { isFavorite } = this.props

        if (this.state.favIsVisible) {
            
            return isFavorite.map( entry => {
                
                return (

                    <Photos key={entry.id} entry={entry} />                       
                )
            })
        } else {

            return (
                
                <div></div>
            )
        }
    }
    
    render() {
        
        const { year, photos } = this.props
        
        return (
            <div className="ib page">
                <p>
                    {this.renderButtons()}
                </p>
                <h3>{year} год [{photos.length}]</h3>

                {this.renderGallery()}

                <button className="btn" onClick={this.onFavClick} >Add to favorite</button>

                {this.renderFavorite()}
            </div>
        )
    }
}

Page.propTypes = {

    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    error: PropTypes.string,
    isFetching: PropTypes.bool.isRequired,
}