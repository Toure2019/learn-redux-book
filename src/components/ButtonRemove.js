import React from 'react';
import * as ACTIONS from '../redux/actions';
import { connect } from 'react-redux';

function ButtonRemove(props) {
    const { style, ukey } = props;
    function handleClick() {
        props.remove_elem(ukey);
    }
    return <button style={style} onClick={handleClick}>{ props.text }</button>;
}

function mapDispatchToProps(dispatch) {
    return {
        remove_elem: function(ukey) {
            var action = ACTIONS.remove_elem(ukey);
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(ButtonRemove);