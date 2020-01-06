const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([3, 4, 7]);

    },2000);
});

doWorkPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error)
})