const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
    try{
        const response = await fetch(url, optionsObj);
        console.log(response);
        if(!response.ok) throw Error('Please reload the page');
    } catch(err) {
        errMsg =  err.message;
    } finally {
        return errMsg;
    }
}   

export default apiRequest