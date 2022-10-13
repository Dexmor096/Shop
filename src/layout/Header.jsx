import React from 'react'

function Header() {
    return (
        <nav className="grey darken-3">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">
                    <img src={`https://cdn2.unrealengine.com/fn-nav-logo-3e6bd67b98b0.svg?resize=1&w=240&quality=high`}/>
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Header;