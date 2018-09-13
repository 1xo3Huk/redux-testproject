import React, { Component } from 'react'

import './style.css'

export default class Photos extends Component {    

    render() {

        const { entry, select } = this.props

        var renderImage = () => {

            if ('select' in this.props) {
    
                return (
                    
                    <img src={entry.sizes[0].url} alt="" onClick={select} />
                )
            } else {
    
                return (
                    
                    <img src={entry.sizes[0].url} alt="" />
                )
            }
        }

        return (
            
            <div key={entry.id} className="photo">
                <p>                        
                    {renderImage()}
                </p>
                <p>{entry.likes.count} ❤</p>
            </div>            
        )
    }
}