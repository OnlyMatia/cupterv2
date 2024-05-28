const Article = (article:any) => {


    return ( 
      <article className="aboutus">
          <h2 className="article-title">{article.title}</h2>
          <p className="article-desc">{article.desc}</p>
          <img src={article.img} alt="" />
      </article>
    )
  }
  
  export default Article