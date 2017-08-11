import React, { Component } from 'react';
import '../js/fromJS';

class FromJs extends Component {
    render() {
        return(
            <div>fromJs的使用方法:
                <h3 style={{color: 'green',fontSize: '16px'}}>fromJS can convert plain JS objects and array to Immutable Maps and List</h3>
                <h4>You can look the result from console</h4>
            </div>
        )
    }
}
export default FromJs;