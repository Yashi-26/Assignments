console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async() => {
    const promiseWifeBringingTickets = new Promise((resolve,reject) =>{
        setTimeout(() => resolve('ticket'),3000);
    });
    const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));
    const addbutter = new Promise((resolve,reject) => resolve(`butter`));
    
        let ticket = await promiseWifeBringingTickets;
        console.log(`wife: i have ${ticket}`);
        console.log('husband: we should go in');
        console.log('wife: no i am hungry');
       
        let popcorn = await getPopcorn;
        console.log(`husband: i got some ${popcorn}`);
        console.log('husband: we should go in');
        console.log('wife: I need butter on my popcorn');

        let butter = await addbutter;
        console.log(`husband: i got some ${butter} on popcorn`);
        console.log(`husband: anything else?`);
        console.log(`wife: lets go we are getting late?`);
        console.log(`husband: thankyou for remainder`);
    
        return ticket;
     
}

preMovie().then((m) => console.log(`person3: shows ${m}`));
console.log('person4: shows ticket');
console.log('person5: shows ticket');