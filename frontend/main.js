'use strict'

const BASE_URL = 'http://localhost:3030';

async function callServer(e, count) {
    let requests = [];
    for (let i = 0; i < count; i++) {
        requests.push(fetch(BASE_URL+ `/hit`));        
    }

    const response = await Promise.all(requests);
    document.getElementById("responseText").textContent = `${response.length} requests processed successfully` 
}