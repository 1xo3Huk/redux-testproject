import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Page extends Component {
    onBtnClick = e => {

        const year =+ e.currentTarget.innerText
        this.props.getPhotos(year)

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

    template = () => {
        const { photos, isFetching, error } = this.props

        if (error) {

            return <p className="error">Во время загрузки фото произошла ошибка</p>

        }
    
        if (isFetching) {

            return <p>Чтобы просмотреть фото авторизуйтесь на сайте...</p>

        } else {

            return photos.map((entry, index) => (

                <div key={index} className="photo">
                    <p>
                    <img src={entry.sizes[0].url} alt="" />
                    </p>
                    <p>{entry.likes.count} ❤</p>
                </div>

            ))

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
                {this.template()}
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