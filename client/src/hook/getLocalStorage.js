export const getLocalStorage = (token) => {
    const value = localStorage.getItem(token);
    if (value) { // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX~~~
        console.log("token true");
        return value
    } else {
        console.log("token false");
        return null
    }
};




