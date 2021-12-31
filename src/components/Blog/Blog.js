import React from 'react';
import "./Blog.css"
import brujas from "../../img/brujas.jpg"
import lucha from "../../img/lucha.jpg"

const Blog = () => {
    return (
        <div className="yellow-background">
            <section className="section">
                <article>
                    <h2 className="margin-top">Episodio "Especial de Noche de Brujas VII", Octubre 27,1996</h2>
                    <img src={brujas} alt="brujas.jpg" className="blog-image"/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod tempore atque consectetur provident totam, minima dolorem fuga ipsam ab. Laudantium voluptate, sunt minima adipisci soluta deserunt provident nesciunt numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod tempore atque consectetur provident totam, minima dolorem fuga ipsam ab. Laudantium voluptate, sunt minima adipisci soluta deserunt provident nesciunt numquam.</p>
                </article>
                <div className="grey-divider"></div>
                <article>
                    <h2 className="margin-top">Episodio "Lucha educativa", Abril 16,1995</h2>
                    <img src={lucha} alt="lucha.jpg" className="blog-image"/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod tempore atque consectetur provident totam, minima dolorem fuga ipsam ab. Laudantium voluptate, sunt minima adipisci soluta deserunt provident nesciunt numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod tempore atque consectetur provident totam, minima dolorem fuga ipsam ab. Laudantium voluptate, sunt minima adipisci soluta deserunt provident nesciunt numquam.</p>
                </article>
            </section>
        </div>
    );
}

export default Blog;