let actions = {
    deleteMusic: function(index) {
        return {
            type: 'DELETE_MUSIC',
            index: index
        }
    },

    findHot: function(hotList) {
        return {
            type: 'FIND_HOT',
            payload: hotList
        }
    },
    addHistory: function(item){
        return {
            type: 'ADD_HISTORY',
            payload: item
        }
    },
    delHistory: function(index){
        return {
            type: 'DEL_HISTORY',
            payload: index
        }
    },

    searchSongs: function(item){
        return function(dispatch, getState){
            dispatch(actions.beginSearch);
            fetch('/api/search/100'+item)
                .then(res => {
                    if(res.ok) {
                        res.json().then(function(data) {
                            debugger;
                            dispatch(actions.doneSearch(data.data));
                        });
                    }
                })
        }
    },
    beginSearch: function(){
        return {
            type: 'BEGIN_SEARCH'
        }
    },
    doneSearch: function(data){
        return {
            type: 'DONE_SEARCH',
            payload: data
        }
    }
};

export default actions;