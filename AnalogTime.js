let getTime=()=>{
    var d = new Date();

    // DATE
    let date = document.querySelector(".date");
    date.innerText = d.getDate();
    
    let mon = document.querySelector(".mon");
    mon.innerText = findMonthName[d.getMonth()];
    
    let year = document.querySelector(".year");
    year.innerText = d.getFullYear();
    
    // TIME
    let hr = document.querySelector("#hr");
    hr.innerText = d.getHours();

    let min = document.querySelector("#min");
    min.innerText = d.getMinutes();

    let sec = document.querySelector("#sec");
    sec.innerText = d.getSeconds();

    hr.innerText = hr.innerText < 10 ? '0'+hr.innerText : hr.innerText;
    min.innerText = min.innerText < 10 ? '0' + min.innerText : min.innerText;
    sec.innerText = sec.innerText < 10 ? '0' + sec.innerText : sec.innerText;
}

let findMonthName = ["JAN","FEB",'MAR',"APR",'MAY','JUN','JULY', 'AUG','SEPT','OCT','NOV','DEC']

setInterval(() => {
    getTime()
}, 1000);
