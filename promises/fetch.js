const fetchPromise = fetch("https://catfact.ninja/breeds"); //calls an API endpoint
fetchPromise.then(response => { // 
 return response.json();  // return the response in JSON format
}).then(breed => { // fetch then takes the response
 console.log(breed); 
});