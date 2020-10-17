import React from 'react';
import Images from './Images'
function Team() {
    return (
        <div>
            <header>
            <div className="container wrapper">
            <h1><a href="./">The creative crew</a></h1>
            <article className="article_introduction">
                <h2>Who we are</h2>
                <p className="introduction_paragraph">
                    We are team of createvely diverse. driven. innovative individuals working in vsrious loctions from the world
                </p>
            </article>
            </div>
        </header>
        <main>
            <div>
                <Images />
            </div>
        </main>
        </div>
    )
}

export default Team;