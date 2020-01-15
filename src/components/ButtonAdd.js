import React from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../redux/actions';

const ButtonAdd = (props) => {

    function handleClick() {
        const { elems } = props;
        props.add_elem("Element " + (elems.length + 1));
    }
    return <button onClick={handleClick}>{props.text}</button>;
}

const mapStateToProps = (state) => {
    return {
        elems: state.elems
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add_elem: function(txt) {
            var action = ACTIONS.add_elem(txt);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonAdd);