import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom'
import {IoMdArrowRoundBack} from "react-icons/io";

function PostDetail({posts, setPosts}) {
    const params = useParams()
    const [post, setPost] = useState({})

    useEffect(() => setPost(posts.find(post => post.id === +params.id)), [])

    console.log(post)


    return (
        <div className="section">
            <Link to='/'>
                <IoMdArrowRoundBack size={50} color={"crimson"}/>
            </Link>
            <br/><br/>
            <div className="columns">
                <div className="column is-6">
                    <figure className="image">
                        <img src={post.thumb} alt=""/>
                    </figure>
                </div>
                <div className="column is-6">
                    <h1 className="title is-2">{post.title}</h1>
                    <p className="heading">Category: {post.category}</p>
                </div>
            </div>

        </div>
    );
}

export default PostDetail;