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

export default {
    musicList: musicList
}
