import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem'
import Loadingpic from './Loadingpic';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    const captial = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    const update = async () => {
        props.setProgress(10);
        const url = `https://news-proxy-m325oy2wk-shreyash-ghuges-projects.vercel.app?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(30);
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(70);
        let allData = await data.json();
        setArticles(allData.articles)
        setLoading(false)
        settotalResults(allData.totalResults)
        props.setProgress(100);
        console.log(url)
    }
    useEffect(() => {
        update();
        // eslint-disable-next-line
    }, []);

    const fetchData = async () => {


        const url = `https://news-proxy-m325oy2wk-shreyash-ghuges-projects.vercel.app?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)

        let data = await fetch(url);
        let allData = await data.json();
        setArticles(articles.concat(allData.articles))

        settotalResults(allData.totalResults)
    }
    return (
        <>
            <div className='container my-4'>
                <h2 className='my-50 text-center' style={{ margin: '35px 0px', marginTop: '90px' }} >DailyNews.com - Top {captial(props.category)} Headlines</h2>
                {loading && <Loadingpic />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loadingpic />}
                >
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imgUrl={element.urlToImage} url={element.url} date={element.publishedAt} author={element.author ? element.author : "Unknown"} name={element.source.name} />
                            </div>
                        })}

                    </div>
                </InfiniteScroll>
            </div>
        </>
    )

}

News.defaultProps = {
    pageSize: 8,
    country: 'in',
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}


export default News
