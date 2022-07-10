const posts=[
    {titles: 'Post One', body:'This is post one'},

    {titles: 'Post Two', body:'This is post two'}
    ];    
    function getPosts()
    { 
        setTimeout(() => 
        {
                let output ='';
            for(let i=0;i<posts.length;i++)
            {
           // posts.forEach((post,index) => {
                output +=`<li>${posts[i].titles} </li>`;
    
            }
            
            document.body.innerHTML=output;
        },1000);
    }
    function createPost(post)
    {
        return new Promise((resolve,reject) => 
        {
            setTimeout(() => 
            {
                posts.push(post);
                const error = false;
                if(!error)
                {
                    resolve();
                }
                else{
                    reject('Error : Something went wrong');
                }
            },1000);

        });
        
    }
    function deletePost()
    {
        return new Promise((resolve,reject) => 
        {
            setTimeout(() => 
            {
                
                if(posts.values !=0)
                {
                    resolve(posts.pop());
                }
                else{
                    reject('Array is Empty');
                    
                }
            },1000);

        });
        
    }
    createPost({title: "post three" , body : "This is post three"})
    .then(() => {
        getPosts()
        deletePost().then(() =>{
            getPosts();
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
   
    function create4thPost(post ,callback){
        setTimeout(() =>
        {
        posts.push({...post,createdAt: new Date().getTime()});
        callback();
        },4000);
    
    }
    //promise.All
    const promise1 =Promise.resolve('Hello World');
    const promise2 =10;
    const promise3 = new Promise((resolve, reject) =>
    setTimeout(resolve, 2000, 'Goodbye'));
    Promise.all([promise1,promise2,promise3]).then((values=>
        
        console.log(values)));
    
    