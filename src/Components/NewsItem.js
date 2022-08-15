import React from 'react'


const NewsItem =(props)=> {
        let {title,description,imgUrl,url,author,date,name}=props;
        return (
            <div>
                <div className="card my-3">
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{name}</span>
                    <img src= {imgUrl?imgUrl:"https://www.pngitem.com/pimgs/m/81-818020_news-icon-news-icon-for-android-hd-png.png"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author}</small> </p>
                            <p className="card-text"><small className="text-muted"> Published on  {new Date(date).toGMTString()}</small></p>
                            <a href={url} target="_blank" rel="noreferrer noopener" className="btn btn-sm btn-dark">Click here Read More</a>
                        </div>
                </div>
            </div>
        )
    
}

export default NewsItem
