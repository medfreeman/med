import React from "react"
import { IconButton } from "react-toolbox/lib/button"
import { Drawer } from "react-toolbox/lib/drawer"
import { Navigation } from "react-toolbox/lib/navigation"

import Link from "../../Elements/Link"
import Icon from "../../Elements/Icon"

import styles from "./index.css"

class Header extends React.Component {
  state = {
    active: false
  }

  handleToggle = () => {
    this.setState({ active: !this.state.active })
  }

  render () {
    return (
      <div className={ styles.header }>
        <div className={ styles.container }>
          <IconButton
            className={ styles["button--open"] }
            icon={ <Icon className={ styles["icon--open"] } icon="menu" /> }
            onClick={ this.handleToggle }
          />
          <Drawer
            type="right"
            active={ this.state.active }
            onOverlayClick={ this.handleToggle }
            className={ styles["drawer"] }
          >
            <IconButton
              className={ styles["button--close"] }
              icon={ <Icon className={ styles["icon--close"] } icon="close" /> }
              onClick={ this.handleToggle }
            />
            <Navigation
              type="vertical"
              className={ styles["navigation"] }
            >
              <Link
                to="/"
                icon="logo_black_white"
                label="Home" />
              <Link to="/portfolio/" label="Portfolio" />
              <Link to="https://github.com/medfreeman/medfreeman.github.io" label="Fork me on github" icon="github" />
            </Navigation>
          </Drawer>
        </div>
      </div>
    )
  }
}

export default Header
