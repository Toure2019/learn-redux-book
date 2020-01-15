import React from 'react';
import * as ACTIONS from '../redux/actions';
import { connect } from 'react-redux';
 
const ButtonRevert = function(props) {

    function handleClick() {
        props.revert_list();
    }
    return <button onClick={handleClick}>{props.text}</button>;
}

function mapDispatchToProps(dispatch) {
    return {
        revert_list: function() {
            var action = ACTIONS.revert_list();
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(ButtonRevert);