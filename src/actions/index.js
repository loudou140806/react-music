let actions = {
    deleteMusic: function(index) {
        return {
            type: 'DELETE_MUSIC',
            index: index
        }
    }
};

export default actions;