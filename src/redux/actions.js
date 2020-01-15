import * as ACTIONS from './actions_types';

// créateurs d'actions
export function decr_time({ min, sec }) {
    return {
        type: ACTIONS.DECR_TIME,
        time: { min, sec }
    }
}

function getUniquekey() {
    var key = Math.random() + "";  // Retourne une chaîne de caractère
    return key;
}

export function add_elem(txt) {
    var ukey = getUniquekey();
    return {
        type: ACTIONS.ADD_ELEM,
        txt: txt,
        ukey: ukey
    }
} 

export function remove_elem(ukey) {
    return {
        type: ACTIONS.REMOVE_ELEM,
        ukey: ukey
    }
}

export function modify_elem(ukey, txt) {
    return {
        type: ACTIONS.MODIFY_ELEM,
        ukey: ukey,
        txt: txt
    }
}

export function revert_list() {
    return {
        type: ACTIONS.REVERT_LIST
    }
}

export function find_tag(tag) {
    return {
        type: ACTIONS.FIND_TAG,
        tag: tag
    }
}
