import styled, {createGlobalStyle} from 'styled-components'
import {Link} from 'gatsby'

export const BodyShowNav = createGlobalStyle`
  body {
    font-family: 'Arimo', sans-serif;
    color: ${props => props.theme.colors.dark};
    background-color: ${props => props.theme.colors.light};
    margin: 0;
    overflow: ${props => props.showNav ? 'hidden' : 'visible'};
    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
      overflow: visible;
    }
  }
`

export const MenuBar = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 2.5em;
background-color: rgba(255,255,255,0.8);
z-index: 1000;
box-sizing: border-box;
padding: 0 8vw;
display: flex;
justify-content: space-between;

@media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
  height: 3.5em;
}
`

export const Logo = styled(Link)`

`

export const LogoImage = styled.img`
  height: 2em;
  padding: 0.3em;
@media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
  padding: 0.5em;
  height: 2.5em;
}
`

export const MenuButton = styled.button`
position: absolute;
top: 2px;
right: 8vw;
z-index: 1001;
@media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
  display: none;
}
width: 40px;
height: 40px;
background: linear-gradient(to right, ${props => props.theme.colors.dark} 0%, ${props => props.theme.colors.dark} 100%);
background-size: ${props => props.showNav ? '20px 0px' : '20px 2px'};
background-position: center center;
background-repeat: no-repeat;
transition: 0.2s background;
border: none;
font-size: 0;
padding: 0;
outline: none;
cursor: pointer;
&:before,
&:after {
  content: "";
  position: absolute;
  top: 12px;
  left: 10px;
  width: 20px;
  height: 2px;
  background: ${props => props.theme.colors.dark};
  transition: 0.2s transform;
  transform-origin: 4px 9px;
  transform: ${props => props.showNav ? 'rotate(45deg)' : 'none'};
}
  &:after {
    top: 25px;
    transform-origin: 4px -7px;
    transform: ${props => props.showNav ? 'rotate(-45deg)' : 'none'};
  }
`

export const ResponsiveNav = styled.nav`
position: relative;
text-align: right;
padding-right: 4vw;
display: ${props => props.showNav ? 'block' : 'none'};
&::after{
  content: '';
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: ${props => props.theme.colors.light};
  display: ${props => props.showNav ? 'block' : 'none'};
}
@media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
  position: relative;
  display: block;
  padding-right: 0;
  background-color: transparent;
  &::after{
  display: none;
  content: none;
  }
}
`

export const ResponsiveUl = styled.ul`
position: absolute;
top: 2.5em;
right: 0;
list-style-type: none;
z-index: 1000;

@media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
  position: relative;
  display: flex;
  position: static;
}
`

export const ResponsiveLi = styled.li`
a {
  color: ${props => props.theme.colors.dark};
  text-decoration: none;
  font-size: 2em;
}

@media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
  display: flex;
  margin-left: 0.8em;

  a {
  color: ${props => props.theme.colors.dark};
  text-decoration: none;
  font-size: 1em;
}
}
`
