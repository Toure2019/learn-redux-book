import * as ACTIONS from './actions_types';

var stateInit = {
    time: { min: 2, sec: 0 }, // Timer initialisé à 02:00
    
    elems: [],  // array {ukey: '', txt: ''}
    revert: false,
    find: {
        tag: '',
        elems: []
    }
}

function decrTime({ min, sec }) {
    // décremente sec de 1 seconde, en diminuant si besoin ùin
    sec = sec - 1;
    if (sec < 0) {
        min = min - 1;
        if (min < 0) {
            min = 0;
            sec = 0;
        } else {
            sec = 59;
        }
    } 
    return { min, sec };
}

export default function reducer(state = stateInit, action) {
    var newState;
    var ukey, elems, txt;

    switch (action.type) {
        case ACTIONS.DECR_TIME:
            const time = decrTime(state.time);
            newState = Object.assign({}, state, {time: time});
            return newState;

        case ACTIONS.ADD_ELEM:
            txt = action.txt;
            ukey = action.ukey;
            elems = state.elems;
            elems.push({ txt, ukey });
            elems = elems.map(elem => elem);
            newState = Object.assign({}, state, {elems: elems});
            return newState;
        
        case ACTIONS.REMOVE_ELEM:
            ukey = action.ukey;
            elems = state.elems;
            elems = elems.filter(elem => {
                if (elem.ukey === ukey) return false;
                else return true;
            });
            newState = Object.assign({}, state, {elems: elems});
            return newState;

        case ACTIONS.MODIFY_ELEM:
            ukey = action.ukey;
            txt = action.txt;
            elems = state.elems;
            elems = elems.map(elem => {
                if (elem.ukey === ukey) return {txt, ukey};
                else return elem; 
            });
            newState = Object.assign({}, state, {elems: elems});
            return newState;
        
        case ACTIONS.REVERT_LIST:
            elems = state.elems;
            var revert = state.revert;
            elems.reverse();
            elems = elems.map(elem => elem);
            newState = Object.assign({}, state, {elems: elems, revert: !revert});
            return newState;

        case ACTIONS.FIND_TAG:
            var tag = action.tag;
            elems = state.elems;
            elems = elems.filter(elem => {
                if (elem.indexOf(tag) >= 0) return true;
                else return false
            });
            Object.assign({}, state, {find: {tag: tag, elems: elems}});
            return newState;

        default:
            newState = state;
            return newState;
    }
}