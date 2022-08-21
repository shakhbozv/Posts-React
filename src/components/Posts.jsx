import React, {useState, useEffect} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Post from "./Post";

function Posts({posts,setPosts, initialPosts}) {


    return (
        <div>
            <div className="hero">
                <div className="hero-head">
                    <Navbar initialPosts={initialPosts} posts={posts} setPosts={setPosts}/>
                </div>
                <div className="hero-body">
                    <div className="columns is-multiline">
                        {posts.map(post => (
                            <div className="column is-4" key={post.id}>
                                <Post
                                    thumb={post.thumb}
                                    title={post.title}
                                    author={post.author}
                                    category={post.category}
                                    body={post.body}
                                    createdAt={post.createdAt}
                                    views={post.views}
                                    id={post.id}

                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Posts;