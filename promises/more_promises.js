// promises are used to avoid callback hell

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
     resolve("john doe"); // Run the code, then replace the string with null
    }, 3000);
   });
   myPromise
    .then(value => { 
        console.log("1st then completed")
        return value.toUpperCase(); })

    .then(value => { 
        console.log("2nd then completed")
        return `Hello, ${value}!`; })

    .then(value => { 
        console.log("3rd then completed")
        console.log(value) })

    .catch(err => { console.log("We have an issue!: " + err) });