import React from "react";
import "./header.css";

export default function Header() {
    return (
        <>
            <header id="header">
                <h1 className="logo">
                    <a href="../pages/main.php">
                        React <em>class</em>
                    </a>
                </h1>
                <nav className="menu">
                    <h2 className="ir_so">메인 메뉴</h2>
                    <ul>
                        <li>
                            <a href="/">HOME</a>
                        </li>
                        <li>
                            <a href="./login/Login">LOGIN</a>
                        </li>
                        <li>
                            <a href="/">CONTACT</a>
                        </li>
                        <li>
                            <a href="/">WRITE</a>
                        </li>
                        <li>
                            <a href="/">LOGOUT</a>
                        </li>
                    </ul>
                </nav>
                <div className="member">
                    <span className="ir_so">회정 정보 영역</span>
                    <img
                        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="me"
                    />
                    <span>근혁님 안녕하세요</span>
                </div>
            </header>
        </>
    );
}
