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
      <article className="aboutus" id={article.id}>
          <h2 className="article-title">{article.title}</h2>
          <p className="article-desc">{article.desc}</p>
          <p className="article-desc important">{article.desc2}</p>
          <img src={article.img} alt="" className="articleImg" />
      </article>
    )
  }
  
  export default Article