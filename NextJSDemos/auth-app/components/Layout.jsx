import Head from 'next/head';
import React, { useEffect } from 'react';
import { GrEmoji } from 'react-icons/gr';
import { AiTwotoneHome } from 'react-icons/ai';
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import {AiOutlineLogin} from 'react-icons/ai';
import {GoSignOut} from 'react-icons/Go';
import Router from 'next/router';
import { useUser } from "../lib/hooks";

export default function Layout({ children }) {
  const [user] = useUser();
  useEffect(() => {
    const M = window.M;
    M.AutoInit();
  })
  
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      </Head>
      <main>
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo btn left tooltipped" data-position="bottom" data-tooltip="Keep smiling"><GrEmoji /></a>
            <ul id="nav-mobile" className="right">
              <li><a className={'waves-effect waves-light btn-small tooltipped'} data-position="bottom" data-tooltip="Home" onClick={() => Router.replace("/")}><AiTwotoneHome /></a></li>
              <li><a className={"waves-effect waves-light btn-small modal-trigger"} href="#modal1">About</a></li>
              <li><a className={"btn-small notification dropdown-trigger"} data-target='dropdown1'><MdNotifications /><span className="badgen red">1</span></a></li>
            </ul>
          </div>
        </nav>
        <div className="container valign-wrapper">
          <div className="row">
            <div className="col s12 m12">
              {children}
            </div>
          </div>
        </div>
        <ul id='dropdown1' className='dropdown-content dropdown-menu'>
          <li>
            <span><AiOutlineLogin /> Log In</span>
          </li>
          <li className="divider" tabIndex="-1"></li>
          <li>
            <span><GoSignOut /> Log Out</span>
          </li>
          <li className="divider" tabIndex="-1"></li>
        </ul>
        <div id="modal1" className="modal modal-fixed-footer">
          <div className="modal-content" style={{ backgroundImage: `url(${"https://barbarashdwallpapers.com/wp-content/uploads/2015/05/White-wave-pattern-wallpaper-1.jpg"})` }}>
            <div className="right-align" style={{ fontSize: '2rem' }}>
              <a href="https://github.com/" target="_blank"><FaGithub /> </a>
              <a href="https://www.facebook.com//" target="_blank"><FaFacebook /> </a>
              <a href="https://www.linkedin.com/in/" target="_blank"><FaLinkedin /> </a>
              <a href="https://www.instagram.com/" target="_blank"><FaInstagram /> </a>
            </div>
            <div className="center-align">
              <img src="/images/default-avatar-profile-icon.jpg" className="responsive-img circle" style={{ height: '300px', border: '2px solid teal' }} />
              <h4>About this App....</h4>
              <p><em>(Customized <a href="https://github.com/tsaxena4k/Next.js-Mongodb-Authentication-App">this app</a>)</em></p>
              <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</strong></p>
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
      </main>

      <style jsx>
        {`
          .container{
              margin:2rem auto;
          }    
          .dropdown-content li:nth-child(1){
              display:flex;
              padding:5px;
          }  
          .dropdown-content li img{
              width:50px;
          } 
          .nav-wrapper .brand-logo{
              font-size:2.7rem;
              margin:10px;
              color:black;
              border-radius:50%;
          }
        `}
      </style>
    </>
  );
}
