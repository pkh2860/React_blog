import React from "react";
import "./view.css";

export default function View() {
    return (
        <>
            <main id="contents">
                <h2 className="ir_so">컨텐츠 영역</h2>
                <section id="board-type" className="center">
                    <div className="blog__label">
                        <h3 className="section__title">123</h3>
                        <div>
                            <span className="author">
                                <a href="#">박근혁</a>
                            </span>
                            <span className="date">2022-04-08 16:20</span>
                            <span className="modify">
                                <a href="/">수정</a>
                            </span>
                            <span className="delete">
                                <a href="/" onclick="return noticeRemove();">
                                    삭제
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="container">
                        <div className="blog__layout">
                            <div className="blog__left">
                                <h4>123</h4>
                                <div>111</div>
                            </div>

                            <div className="blog__right">
                                {/* <div className="ad">
                                    <iframe
                                        src="/"
                                        width="300"
                                        height="300"
                                        frameborder="0"
                                        scrolling="no"
                                        referrerpolicy="unsafe-url"
                                    ></iframe>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
