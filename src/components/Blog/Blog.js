import React from 'react';
// import brujas from "../../img/brujas.jpg"
// import lucha from "../../img/lucha.jpg"
import "./Blog.css"

const Blog = () => {
    return (
        <section>
            <article>
                <h2>Episodio "Especial de Noche de Brujas VII", Octubre 27,1996</h2>
                <img src={brujas} alt="brujas.jpg"/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod tempore atque consectetur provident totam, minima dolorem fuga ipsam ab. Laudantium voluptate, sunt minima adipisci soluta deserunt provident nesciunt numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod tempore atque consectetur provident totam, minima dolorem fuga ipsam ab. Laudantium voluptate, sunt minima adipisci soluta deserunt provident nesciunt numquam.</p>
            </article>
            <article>
                <h2>Episodio "Lucha educativa", Abril 16,1995</h2>
                <img src={lucha} alt="lucha.jpg"/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod tempore atque consectetur provident totam, minima dolorem fuga ipsam ab. Laudantium voluptate, sunt minima adipisci soluta deserunt provident nesciunt numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque quod tempore atque consectetur provident totam, minima dolorem fuga ipsam ab. Laudantium voluptate, sunt minima adipisci soluta deserunt provident nesciunt numquam.</p>
            </article>
        </section>
    );
}

export default Blog;