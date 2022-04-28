import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <article className="post">
            <figure className="post__header" aria-hidden="true">
                <Link to="/View">
                    <img src="https://source.unsplash.com/800x600/?nature,water" alt="dd" />
                </Link>
            </figure>
            <div className="post__body">
                <span className="post__cate">javascript</span>
                <div className="post__title">포스트 제목입니다.</div>
                <div className="post__desc">포스트 설명부분입니다.</div>
                <div className="post__info">
                    <span className="author">박근혁</span>
                    <span className="date">2022-04-27</span>
                </div>
            </div>
        </article>
    );
}
