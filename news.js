
const sportsnewsApi=
`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=0ad2c0577dd54e8c8fdea3459326f89b`;
window
.fetch(sportsnewsApi)
.then(data=>{
    data
    .json()
    .then(sportsnews=>{
        //console.log(sportsnews)
        let sportsData=sportsnews.articles;
        let output=[];
        for (let sports of sportsData) {
            output+=`
            <h1  class="h1title"><a href="${sports.url}" target=_blank>${sports.title}</h1>
            <p>${sports.description}</P>
            <img src="${sports.urlToImage}"/>
            <p>${sports.publishedAt} </P>
            `;
           
         }
         document.getElementById("left").innerHTML=output;
    })
    .catch(err=>console.log(err));
})
.catch(err=>console.log(err));
//-------------------------------------------entertainment----------------------------------------------------

const entertainmentnewsApi=
`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=0ad2c0577dd54e8c8fdea3459326f89b`;
window
.fetch(entertainmentnewsApi)
.then(data=>{
    data
    .json()
    .then(entertainmentnews=>{
        //console.log(sportsnews)
        let entertainmentData=entertainmentnews.articles;
        let output=[];
        for (let entertainment of entertainmentData) {
            output+=`
            <h1  class="h1title"><a href="${entertainment.url}"${entertainment.title}</h1>
            <p>${entertainment.description}</P>
            <img src="${entertainment.urlToImage}"/>
            <p>${entertainment.publishedAt} </P>
            `;
           
         }
         document.getElementById("right").innerHTML=output;
    })
    .catch(err=>console.log(err));
})
.catch(err=>console.log(err));

//------------------------------------Top headlines---------------------------------------------------

const TopApi=
`https://newsapi.org/v2/top-headlines?country=us&apiKey=0ad2c0577dd54e8c8fdea3459326f89b`;
window
.fetch(TopApi)
.then(data=>{
    data
    .json()
    .then(Topnews=>{
        //console.log(sportsnews)
        let TopData=Topnews.articles;
        let output=[];
        for (let Top of TopData) {
            output+=`
            <h1  class="h1title"><a href="${top.url}" target=_blank>${Top.title}</h1>
            <p>${Top.description}</P>
            <img src="${Top.urlToImage}"/>
            <p>${Top.publishedAt} </P>
            `;
           
         }
         document.getElementById('middle').innerHTML=output;
    })
    .catch(err=>console.log(err));
})
.catch(err=>console.log(err));

















//time javascript here
setInterval(()=>{
    var time=new Date().toLocaleTimeString();
    document.getElementById('time').innerHTML=time;
},1000);