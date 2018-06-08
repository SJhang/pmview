import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'home'
    };

    this.onClickMenuItem = this
      .onClickMenuItem
      .bind(this);
  }

  onClickMenuItem(e, {name}) {
    this.setState({activeItem: name});
  }

  render() {
    return (
      <Menu inverted fixed="top">
        <Menu.Item
          as={Link}
          to="/"
          name="home"
          active={this.state.activeItem === 'home'}
          onClick={this.onClickMenuItem}>
          PMView
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/company-info"
          name="companyInfo"
          active={this.state.activeItem === 'companyInfo'}
          onClick={this.onClickMenuItem}>
          Companies
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/company-review"
          name="companyReviews"
          active={this.state.activeItem === 'companyReviews'}
          onClick={this.onClickMenuItem}>
          Reviews
        </Menu.Item>

        {/* Login */}
        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/login"
            name="login"
            active={this.state.activeItem === 'login'}
            onClick={this.onClickMenuItem}>
            Login
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/register"
            name="register"
            active={this.state.activeItem === 'register'}
            onClick={this.onClickMenuItem}>
            Register
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
