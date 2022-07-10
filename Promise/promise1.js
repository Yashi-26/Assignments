
createPost()
{
    return new promise(() =>{
        //update lastactivitytime
    })
}
seensomeoneMessage()
{
    return new promise(() =>{
        //update lastactivitytime
    })
}
const user ={
    username : 'shreya',
    lastactivitytime:'13 th jan'
}
updatelastactivitytime
{
    return new Promise((resolve,reject) =>{
        setTimeOut(()=>{
            user.lastactivitytime = new Date().getTime();
            resolve()
        },1000)
    })
}

userupdatesapost()
{
    Promise.all([createPost,updatelastactivitytime])
    .then(([createPostresolves,updatelastactivitytimeresolves]) => {
        console.log(updatelastactivitytimeresolves)
    })
    .catch(err => console.log(err))
}