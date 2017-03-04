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
          <li>
            <div>
              <h1>{this.props.data[i].name}</h1>
              <p>{this.props.data[i].start} | {this.props.data[i].end}</p>
            </div>
          </li>
        );

        array.push(element);
      }

      return array;
    };

    return (
      <div>
        <ul>
          {this.props.data ? rows() : null}
        </ul>
      </div>
    );
  }
}
