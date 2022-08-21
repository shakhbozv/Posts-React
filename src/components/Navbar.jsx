import React from 'react';

function Navbar({initialPosts, posts, setPosts}) {

    function filterPosts (category) {
        setPosts(initialPosts.filter(post => post.category === category))
    }


    return (
        <nav className="navbar has-background-info-light">
            <div className="container">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <img src="https://macademy.uz/assets/img/logo-new.svg" alt="logo"/>
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="navbar-item" onClick={() => setPosts(initialPosts)}>Все посты</a>
                    <a className="navbar-item" onClick={() => filterPosts("Политика")}>Политика</a>
                    <a className="navbar-item" onClick={() => filterPosts("Спорт")}>Спорт</a>
                    <a className="navbar-item" onClick={() => filterPosts("Экономика")}>Экономика</a>
                    <a className="navbar-item" onClick={() => filterPosts("Общество")}>Общество</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
