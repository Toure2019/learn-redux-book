import React from 'react';
import { connect } from 'react-redux';
import Element from './Element';

function ListeElements(props) {
    const { elems } = props;
    return (
        <div>
            <ul>
                {elems.map((elem) => {
                    return (
                        <li key={elem.ukey}>
                            <Element ukey={elem.ukey} text={elem.txt} />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        elems: state.elems
    };
}

export default connect(mapStateToProps)(ListeElements);