function addToLocalStorage(key, value) {
    if(typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
        localStorage.setItem(key, value);
    }
}

function getFromLocalStorage(key) {
    let value = localStorage.getItem(key);
    if(!value) {
        return null;
    }

    try {
        return JSON.parse(value);
    } catch(e) {
        return value;
    }
}

function updateLocalStorage(key, updatedValue) {
    let value = localStorage.getItem(key);
    if(!value) {
        return null;
    }

    try {
        localStorage.setItem(key, updatedValue);
    } catch(e) {
        return value;
    }
}

function removeFromLocalStorage(key) {
    localStorage.removeItem(key);
}

const methods = {
    addToLocalStorage,
    getFromLocalStorage,
    updateLocalStorage,
    removeFromLocalStorage
}

export default methods;