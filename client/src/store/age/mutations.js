

export function setYoung (state) {

    state.check = true;
    state.isOld = false;
    state.dateUpdate = (new Date);

}


export function setOld (state) {

    state.check = true;
    state.isOld = true;
    state.dateUpdate = (new Date);

}