import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
    return (
        <>
            <header id="header">
                <h1 className="logo">
                    <Link to="/">
                        React <em>class</em>
                    </Link>
                </h1>
                <nav className="menu">
                    <h2 className="ir_so">메인 메뉴</h2>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/Login">LOGIN</Link>
                        </li>
                        <li>
                            <Link to="/Join">JOIN</Link>
                        </li>
                        <li>
                            <Link to="/View">POST</Link>
                        </li>
                        <li>
                            <Link to="/Write">WRITE</Link>
                        </li>
                    </ul>
                </nav>
                <div className="member">
                    <span className="ir_so">회정 정보 영역</span>
                    <img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="me"
                    />
                    <span>
                        <Link to="/Mypage">근혁님 안녕하세요</Link>
                    </span>
                </div>
            </header>
        </>
    );
}
