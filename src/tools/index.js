let Tools = {};

Tools.getItem = function(item) {
    if(typeof item === 'string') {
        return JSON.parse(localStorage.getItem(item));
    }
    else {
        new Error('wrong type');
    }
}

Tools.setItem = function(name, value) {
    if(typeof name ==='string'){
        localStorage.setItem(name, JSON.stringify(value))
    }
    else {
        new Error('wrong type');
    }
}

export default Tools;