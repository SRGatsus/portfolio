import React from 'react';
import { Link } from 'react-router-dom';




import logoSvg from '../assets/img/Logo1.png'
import Navigation from './blocks/Navigation';
import Social from './blocks/Social';


const Header = React.memo(function ({items} ) {
    const [scrollY, setScrollY] = React.useState(0);
    function logit() {
      setScrollY(window.pageYOffset);
    }
    React.useEffect(() => {
      setScrollY(window.pageYOffset);})
    
    React.useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", logit);
      };
    });
  

    return(
    <header className= {(items&&scrollY<20) ?'main-header colour main ':'main-header colour main sticky'} id="Header"
    >
       
    <div className="container flex-block flex-v-middle flex-xs">
        <Link to="/">
        <div className="logo">
        <img width="38" src={logoSvg}  alt="HeaderLogo"/>
        </div>
        </Link>
        <nav className="site-navigation">
        <Navigation/>
             <footer className="hidden-lg hidden-md">
                <div className="social-block flex-block flex-v-middle flex-xs">
                    <Social/>
                </div>
                <div className="address">
                    <p>Москва, Полковая улица, д.3, стр.4</p>
                    <p>akademia@burda.ru</p>
                </div>
            </footer>
        </nav>

        <div className="phone">
            <div className="ya-phone">
                <a href="tel:+79119999999">+7 (911) 999-99-99</a>
            </div>
        </div>
      <Link to="/spersonalAccount"className="auth_btn top_subnav active icon-avatar" ></Link>
    </div>
</header>);
    
})


export default Header;