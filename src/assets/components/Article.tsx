import { useEffect } from "react";

const Article = (article:any) => {
  useEffect(() => {
    if (window.ScrollReveal) {
        const sr = window.ScrollReveal({
            origin: 'top',
            distance: '30px',
            duration: 2000,
            reset: false
        });
        sr.reveal(`.article-title, .article-desc`, {
            interval: 200
        });
    } else {
        console.error('ScrollReveal nije učitan');
    }
}, []);

    return ( 
      <article className="aboutus">
          <h2 className="article-title">{article.title}</h2>
          <p className="article-desc">{article.desc}</p>
          <img src={article.img} alt="" />
      </article>
    )
  }
  
  export default Article