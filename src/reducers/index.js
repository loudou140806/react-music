import Tools from '../tools';
import musics from '../assets/music.json';

function musicList(state= Tools.getItem('musics') ? {musicList: Tools.getItem('musics') } : musics, action){
    let newState;
    switch(action.type){
        case 'DELETE_MUSIC':
            state.musicList.splice(action.index, 1);
            newState = Object.assign({}, state,{
                musicList: state.musicList,
            })
            Tools.setItem('musics', newState.musicList);
            return newState;
        default:
            Tools.setItem('musics', state.musicList || musics.musicList);
            return state;
    }
}

function findHot(state={historyList: Tools.getItem('historyList')|| [],isFetching:false}, action){
    let newState;
    switch(action.type){
        case 'FIND_HOT':
            newState = Object.assign({}, state, {
                hotList: action.payload
            })
            return newState;
        case 'ADD_HISTORY':
            state.historyList.push(action.payload);
            Tools.setItem('historyList', state.historyList);
            newState = Object.assign({}, state, {
                historyList: state.historyList
            })
            return newState;
        case 'DEL_HISTORY':
            if(action.payload === 'all') {
                Tools.setItem('historyList', []);
                newState = Object.assign({}, state, {
                    historyList: []
                })
            }else{
                state.historyList.splice(action.payload, 1);
                newState = Object.assign({}, state,{
                    historyList: state.historyList,
                })
                Tools.setItem('historyList', newState.historyList);
            }
            return newState;
        case 'BEGIN_SEARCH':
            newState = Object.assign({}, state, {
                isFetching: true
            })
            return newState;
        case 'DONE_SEARCH':
            newState = Object.assign({}, state, {
                isFetching: false
            })
            return newState;
        default: 
            return state;
    }
}

export default {
    musicList: musicList,
    findHot: findHot,
}
