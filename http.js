export class Http {
    static fetchData(url) {
        return new Promise((resolve, reject) => {
            const HTTP = new XMLHttpRequest();

            HTTP.open('GET', url); // We only 'get' information from the weather map API

            HTTP.onreadystatechange = function() { // Success response
                if (HTTP.readyState == XMLHttpRequest.DONE && HTTP.status == 200) {
                    const RESPONSE_DATA = JSON.parse(HTTP.responseText);
                    console.log('This is what the API get back :', HTTP.responseText)
                    console.log('-------------------------------------------------');
                    console.log("The API's response :", RESPONSE_DATA);
                    

                    resolve(RESPONSE_DATA);
                } else if (HTTP.readyState == XMLHttpRequest.DONE) { // Any other response. 
                    console.log('No success response...');
                    reject('Something went wrong');
                }
            };
            HTTP.send();
        });
    }
}