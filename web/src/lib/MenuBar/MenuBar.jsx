import {Link} from 'gatsby'
import React, {useState} from 'react'

import {imageUrlFor} from '../image-url'
import {buildImageObj} from '../helpers'

import {
  MenuButton,
  ResponsiveNav,
  ResponsiveUl,
  ResponsiveLi,
  BodyShowNav,
  MenuBar,
  Logo,
  LogoImage
} from './styledComponents.js'

const Menu = (props) => {
  const [showNav, setShowNav] = useState(false)
  const {
    menuItems,
    logo
  } = props

  const onShowNav = () => {
    setShowNav(!showNav)
  }

  const hideNav = () => {
    setShowNav(false)
  }

  const renderMenuItems = (menuItems) => {
    let renderedMenuItems = []

    menuItems.forEach((menuItem, index) => {
      renderedMenuItems = [
        ...renderedMenuItems,
        (
          <ResponsiveLi
            key={`${index}-${menuItem.label}`}
          >
            <Link
              onClick={hideNav}
              to={menuItem.path}
            >
              {menuItem.label}
            </Link>
          </ResponsiveLi>
        )
      ]
    })

    return renderedMenuItems
  }
  console.log('LOGO', logo)
  return (
    <MenuBar>
      <Logo to='/'>
        {logo && logo.asset && (
          <LogoImage
            src={imageUrlFor(buildImageObj(logo))
              .url()}
          />
        )}
      </Logo>
      <MenuButton
        onClick={onShowNav}
        showNav={showNav}
      >
        {'Menu'}
      </MenuButton>
      <BodyShowNav
        showNav={showNav}
      />
      <ResponsiveNav
        showNav={showNav}
      >
        <ResponsiveUl>
          {
            renderMenuItems(menuItems)
          }
        </ResponsiveUl>
      </ResponsiveNav>
    </MenuBar>
  )
}

export default Menu
