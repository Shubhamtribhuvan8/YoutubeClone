let video=()=>{
    let data=JSON.parse(localStorage.getItem("video"));
    let iframe=document.getElementById("youtube-iframe");
    iframe.src=`https://www.youtube.com/embed/${data.id.videoId}`;
    // console.log(JSON.parse(data));
    console.log(data);
  document.getElementById("aaa").textContent = data.snippet.title;
//   document.getElementById("aa").textContent = data.snippet.description;
 document.getElementById("aa").textContent = data.snippet.channelTitle;
//   document.getElementById("aa").textContent = data.snippet.description;
}
// var data = JSON.parse(localStorage.getItem("details"));

//Personal details