'use strict'

const BASE_URL = 'http://localhost:3030';

async function callServer(e, count) {
    const res = await fetch(BASE_URL+ `/spin/${count}`);
    const data = await res.json();
    console.log(data);
}