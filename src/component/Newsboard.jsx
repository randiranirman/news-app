import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({category}) => {
    const [article, setArticle] = useState([]);

    useEffect(() => {

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticle(data.articles))
            .catch(error => console.error('Error fetching the news:', error));
    }, [category]);

    return (
        <div>
            <h2 className="text-center mt-4 text-dark">Latest <span className="badge bg-danger"> News </span></h2>
            {article.map((news, index) => (
                <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            ))}
        </div>
    );
};

export default Newsboard;
