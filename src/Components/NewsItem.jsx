import newsImage from '../assets/news.jpg'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mg-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
      <img src={src ? src : newsImage}
        style={{ height: "200px", width: "328px" }}
        className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">
          {title && title !== "[Removed]" ?
            title.slice(0, 50) :
            "This is the title of news that is not present here"}
          </h5>
        <p className="card-text">
          {description && description !== "[Removed]" ?
            description.slice(0, 100) :
            "This is the news text that removed but we show some data to keep consisency and size of the card"}
        </p>
        <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div>
  )
}

export default NewsItem
