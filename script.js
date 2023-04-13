var titleslinks=document.getElementsByClassName("titles-links");
var titlescontents=document.getElementsByClassName("titles-content");

function opentab(titlesname){
    for(titleslink of titleslinks){
        titleslink.classList.remove("active-link");
    }
    for(titlescontent of titlescontents)
    {
        titlescontent.classList.remove("active-title");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(titlesname).classList.add("active-title");
}