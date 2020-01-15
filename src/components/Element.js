import React from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../redux/actions';
import ButtonRemove from './ButtonRemove';

class Element extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modifyOn: false,
            value: props.text
        }
    }
    handleDoubleClick() {
        this.setState({ modifyOn: true });
    }
    handleChange(e) {
        var value = e.target.value;
        this.setState({ value: value });
    }
    handleBlur() {
        this.setState({ modifyOn: false });
        var value = this.state.value;
        const ukey = this.props.ukey;
        this.props.modify_elem(ukey, value);
    }

    render() {
        const {ukey, text} = this.props;
        return (
            <div>
                <table><tbody><tr>
                    <td>
                    {
                        this.state.modifyOn ?
                        <input 
                            onChange={this.handleChange.bind(this)} 
                            onBlur={this.handleBlur.bind(this)} 
                            autoFocus={true} 
                            value={this.state.value} 
                        /> :
                        <span onDoubleClick={this.handleDoubleClick.bind(this)}>{ text }</span>
                    }
                    </td>
                    <td>
                        <ButtonRemove style={{margin:"10px", fontSize:"10px"}} ukey={ukey} text="Supprimer" />
                    </td>
                </tr></tbody></table>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        modify_elem: function(ukey, value) {
            var action = ACTIONS.modify_elem(ukey, value);
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(Element);