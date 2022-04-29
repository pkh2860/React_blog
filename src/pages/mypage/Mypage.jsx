import React from "react";
import "./mypage.css";

export default function Mypage() {
    return (
        <>
            <main id="contents">
                <h2 className="ir_so">컨텐츠 영역</h2>
                <section className="join-type gray">
                    <div className="member-form">
                        <h3>회원정보</h3>

                        <div className="join-intro">
                            <div className="face">
                                <div className="face">
                                    <img
                                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                        alt="me"
                                    />
                                </div>
                            </div>
                            <div className="intro">자기소개를 해주세요</div>{" "}
                        </div>
                        <div className="join-info">
                            <ul>
                                <li>
                                    <strong>이메일</strong>
                                    <span>rmsgur413@naver.com</span>
                                </li>
                                <li>
                                    <strong>닉네임</strong>
                                    <span>근혁</span>
                                </li>
                                <li>
                                    <strong>이름</strong>
                                    <span>박근혁</span>
                                </li>
                                <li>
                                    <strong>생일</strong>
                                    <span>1998-06-11</span>
                                </li>
                                <li>
                                    <strong>번호</strong>
                                    <span>010-5812-2860</span>
                                </li>
                                <li>
                                    <strong>성별</strong>
                                    <span></span>
                                </li>
                                <li>
                                    <strong>사이트</strong>
                                    <span></span>
                                </li>
                            </ul>
                        </div>

                        <div className="join-btn">
                            <a href="/">수정하기</a>
                            <a href="/">탈퇴하기</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
