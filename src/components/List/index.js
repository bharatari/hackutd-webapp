import React, { PropTypes } from 'react';
import classes from './styles.scss';
import classNames from 'classnames';

export default class Sidebar extends React.Component {
  static propTypes = {
    handleClick: PropTypes.object,
    data: PropTypes.object,
  };
  render() {
    const rows = () => {
      let array = [];

      for (let i = 0; i < this.props.data.length; i++) {
        const element = (
          <a href="#" className="collection-item">
            <div>
              <h5>{this.props.data[i].name}</h5>
              <p>{this.props.data[i].start}{this.props.data[i].end ? ' | ' + this.props.data[i].end : ''}</p>
            </div>
          </a>
        );

        array.push(element);
      }

      return array;
    };

    return (
      <div className="collection">
        {this.props.data ? rows() : null}
      </div>
    );
  }
}
