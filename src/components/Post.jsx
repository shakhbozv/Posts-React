import React from 'react';
import {IoEyeSharp} from "react-icons/io5";
import {Link} from 'react-router-dom'

function Post({title, body, views, author, createdAt, thumb, category, id}) {
    return (
        <div className="card my-card">
            <div className="card-image">
               <Link to={`/post/${id}`}>
                    <figure className="image is-4by3">
                    <img src={thumb} alt="placeholder image"/>
                </figure>
               </Link>
            </div>
            <div className="card-content">
                <div className="has-text-centered">
                    <div className="title is-4">{title}</div>
                    <p className="has-text-grey">{author}</p>
                    <span className="tag is-info is-light">{category}</span>
                    <br/><br/>
                    <p>{body}</p>
                    <br/>
                </div>
                <div className="columns is-justify-content-space-around">
                    <div className="column is-3">
                        <p className="has-text-grey">{createdAt}</p>
                    </div>
                     <div className="column is-3">
                        <p className="has-text-grey"> <IoEyeSharp color={"lightblue"}/> {views}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;