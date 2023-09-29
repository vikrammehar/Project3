alert("welcome to my site");

setInterval(() => {
    mydate = new Date();
    date = mydate.toLocaleDateString(undefined,options);
    time = mydate.getHours() + ":" + mydate.getMinutes() + ":" + mydate.getSeconds();
    let el = document.getElementById("date");
    el.innerHTML = time + "<br> on " + date;
}, 1000);
let mydate;
let date;
let time;
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };