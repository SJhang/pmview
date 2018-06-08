import React, {Component} from 'react';
import * as Api from '../api';

class Test extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    Api
      .fetchCompanies('top')
      .then(response => {
        console.log('mock api response', response);
      }, error => {
        console.error('Something went wrong:' + error.message);
      });
  }
  render() {
    return (
      <div>
        <h2>Mock API Testing Component</h2>
      </div>
    );
  }
}

export default Test;