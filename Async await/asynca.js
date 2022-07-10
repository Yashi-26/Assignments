console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {
    const promiseWifeBringingTickets = new Promise((resolve,reject) =>{
        setTimeout(() => reject('ticket'),3000);
    });
    //const promiseWifeBringingTickets = new Promise((resolve,reject) =>{
    //    setTimeout(() => resolve('ticket'),3000);
    //});
    //const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));
    //const getcoke = new Promise((resolve,reject) => resolve(`coke`));
    //const getcandy = new Promise((resolve,reject) => resolve(`candy`));
    
    let ticket
    try{
        ticket = await promiseWifeBringingTickets;
    } catch(e){
        ticket ='sad face'
    }
        //let ticket = await promiseWifeBringingTickets;
        //let[popcorn,candy,coke] =await Promise.all([getPopcorn,getcandy,getcoke])
        //console.log(`${popcorn},${candy},${coke}`);
        return ticket;
     
}

preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');