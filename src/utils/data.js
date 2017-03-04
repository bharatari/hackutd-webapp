import _ from 'lodash';
import { localStorageAuthToken } from 'constants/keys';
import fetch from 'isomorphic-fetch';

export default {
  base() {
    return 'https://hackutd-17.firebaseio.com';
  },
  getCurrentBase() {
    let url = window.location.protocol + '//' + window.location.hostname;
    
    if (window.location.port) {
      url += ':' + window.location.port;
    }
     
    return url;
  },
  apiRoot: '',
  options: {
    headers: {},
  },

  /**
   * Dynamically constructs JSON API request.
   *
   * @param {string} dataType
   * @param {string} method
   * @param {string} id
   * @param {Object} body
   * @param {Object} settings
   * @return {Promise}
   */
  request(dataType, method, id, query, body, settings) {
    const url = this.processUrl(dataType, id, query);
    const options = this.processOptions(body, method);

    return fetch(url, options)
      .then(this.checkStatus)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return this.processResponse(data);
      });
  },

  processUrl(dataType, id, query = '') {
    let url = this.base() + this.apiRoot + '/' + dataType;

    if (id != null) {
      url += '/' + id;
    }
    
    if (query != null) {
      if (_.isString(query)) {
        url += query;
      } else {
        url += this.processQuery(query);
      }
    }
    
    return url + '.json';
  },
  processOptions(body, method, serialize) {
    let options = { 
      ...this.options
    };

    if (localStorage.getItem(localStorageAuthToken)) {
      options.headers['Authorization'] = 'Bearer ' + localStorage.getItem(localStorageAuthToken);
    }

    if (body) {
      options.body = JSON.stringify(body);
      options.headers['Content-Type'] = 'application/json; charset=utf-8';
    }

    if (method) {
      options.method = method;
    }

    return options;
  },
  processResponse(body) {
    return body;
  },
  /**
   * Checks for error status.
   *
   * @param {Object} response
   * @return {Object}
   * @throws {Error}
   */
  checkStatus(response) {
    return new Promise((resolve, reject) => {
      if (response.status >= 200 && response.status < 300) {
        resolve(response);
      } else {
        return response.json().then((error) => {
          reject(new Error(error.message || error.name));
        });        
      }
    });
  },
  processQuery(data) {
    let ret = [];
    
    for (let d in data) {
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(data[d]));
    }
      
    return '?' + ret.join("&");
  },
  getAuthToken() {
    return localStorage.getItem(localStorageAuthToken);
  },
};
