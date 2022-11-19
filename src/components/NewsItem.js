import React, { Component } from 'react'

export class NewsItem extends Component {
    render () {
        const { title, description, imageUrl, newsUrl } = this.props
        return (
            <div className='my-3'>
                <div className="card" style={ { width: "18rem" } }>
                    <img src={ !imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG84WYLYuZK7_zwWI6wmUdm-xrGeI7dDaSRMftvVsk4l8UObpMSeDsVdou5Hd7Cy7tA2M&usqp=CAU" : imageUrl } className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{ title }</h5>
                        <p className="card-text">{ description }</p>
                        <a target="_blank" rel="noreferrer" href={ newsUrl } className="btn btn-sm  btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsItem
