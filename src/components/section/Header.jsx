import React from 'react'

import { CiBaseBall } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ci";
import { AiOutlineCodepen } from "react-icons/ci";
import { AiFillYoutube } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ci";

const Header = () => {
    return(
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href='/'>
                    <em area-hidden='true'></em>
                    <span>webs<br />Youtube</span>
                </a>
            </h1>
        
            <nav className='header__menu'>
                <ul className='menu'>
                    <li className='active'>
                        <a href='/'>
                            <CiBaseBall /> 웹스토리보이
                        </a>
                    </li>
                    <li>
                        <a href='/today'>
                            <CiMoneyBill /> 추천 영상
                        </a>
                    </li>
                    <li>
                        <a href='/website'>
                            <CiCoins1 /> 추천 개발자
                        </a>
                    </li>
                    <li>
                        <a href='/webd'>
                            <CiBoxes /> 웹디자인기능사
                        </a>
                    </li>
                    <li>
                        <a href='/website'>
                            <CiBullhorn /> 웹표준 사이트
                        </a>
                    </li>
                    <li>
                        <a href='/youtube'>
                            <CiFries /> 유튜브 클론 사이트
                        </a>
                    </li>
                </ul>
                <ul className='keyword'>
                    <li>
                        <a href='/search/webstoryboy'>webstoryboy</a>
                    </li>
                    <li>
                        <a href='/search/html'>HTML</a>
                    </li>
                    <li>
                        <a href='/search/css'>CSS</a>
                    </li>
                    <li>
                        <a href='/search/javascript'>JavaScript</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.js</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.js</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>Next.js</a>
                    </li>
                    <li>
                        <a href='/search/node.js'>Node.js</a>
                    </li>
                    <li>
                        <a href='/search/sql'>SQL</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>
                </ul>
            </nav>

            <div className='header__sns'>
                <ul>
                    <li>
                        <a href="https://github.com/webstoryboy"> rel="noopener noroferrer"
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/webstoryboy"> rel="noopener noroferrer"
                            <AiFillYoutube />
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/webstoryboy"> rel="noopener noroferrer"
                            <AiOutlineCodepen />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/webstoryboy"> rel="noopener noroferrer"
                            <AiOutlineInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header