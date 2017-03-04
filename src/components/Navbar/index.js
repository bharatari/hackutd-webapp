import React, { PropTypes } from 'react';
import classes from './styles.scss';
import classNames from 'classnames';
import { routes } from '../../constants/keys';

export default class Sidebar extends React.Component {
  static propTypes = {
    handleClick: PropTypes.object,
    data: PropTypes.object,
  };
  componentDidMount() {
     $(".button-collapse").sideNav();
  }
  render() {
    let renderedRoutes = [];
    routes.forEach((route, index) => {
      renderedRoutes.push(<li key="{ index }"><a href="{ route.value }">{ route.key }</a></li>);
    });

    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className='brand-logo'><img src="http://hackutd.co/img/LogoWhiteHorizontal.svg" /></a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            { renderedRoutes }
          </ul>
          <ul className="side-nav" id="mobile-demo">
            { renderedRoutes }
          </ul>
        </div>
      </nav>
    );
  }
}
