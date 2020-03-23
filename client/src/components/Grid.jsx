import React from 'react';
import styled from 'styled-components';
import App from './App';

import './styles.css';

const GridLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    'nav nav'
    'main asideRight'
    'footer footer';
  grid-template-rows: 60px auto 60px;
  grid-template-columns: 60% auto;
`;

const Nav = styled.nav`
  grid-area: nav;
  border-bottom: solid 1px;
`;

const AsideRight = styled.aside`
  grid-area: asideRight;
`;
const Main = styled.main`
  height: 5000px;
  grid-area: main;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px;
  border-right: solid 1px;
`;
const Footer = styled.footer`
  grid-area: footer;
`;

function Grid () {
  return (
    <>
      <GridLayout>
        <Nav>Nav Area</Nav>
        <Main>Main area</Main>
        <AsideRight>
             Left SideBar 
             <App/>
        </AsideRight>
        <Footer>Footer area</Footer>
      </GridLayout>
    </>
  );
}

export default Grid;