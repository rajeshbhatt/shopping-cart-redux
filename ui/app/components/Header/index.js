import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import Logo from './logo.jpg';
import messages from './messages';
import { Link } from 'react-router';
import DrilldownNav from './DrilldownNav';

const logoStyle = {
  width : '100px',
  height: '68px',
  display: 'inline-block',
  float: 'left',
  background: 'url(Logo)',
  padding: '0'
}
const headerContainer = {
  // paddingTop : '50px'
}
const headerStyle = {
  display : 'inline-block',
  float : 'left'
}

const mainSearch = {
  display: 'inline-block',
}
const searchInput ={
  border: '1px solid #c5c5c5',
  borderRadius: '2px',
  backgroundColor: '#FFF',
  margin: '12px',
  padding: '5px'
}
const cartIcons = {
  fontSize: '20px',
  display: 'inline-block',
  marginLeft: '5px'
}
const chotuMargin ={
  margin: '0 5px'
}
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header-wrapper">
        <div style={headerContainer}>
            <A href="#" style={logoStyle}>
                <Img src={Logo} alt="shopping cart - Logo" />

            </A>

          
        </div>
        <DrilldownNav></DrilldownNav>
      </div>
    );
  }
}

export default Header;
