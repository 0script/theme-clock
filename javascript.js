const hourEl=document.querySelector('.hour');
const minuteEl=document.querySelector('.minute');
const secondEl=document.querySelector('.second');
const timeEl=document.querySelector('.time');
const toggle=document.querySelector('.toggle');
const dateEl=document.querySelector('.date');

const days=['Sunday','Monday','Tuesday','Wenesday',
'Thursday','Friday','Saturday'];
const months=['Jan','Fev','March','Apr','May','Jun','Jul',
'Au','Sep','Oct','Nov','Dec'];

/*https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers*/
const scale=(num,in_min,in_max,out_min,out_max)=>{
    return(num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min;
};

toggle.addEventListener('click',(e)=>{
    const html=document.querySelector('html');

    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        e.target.innerHTML='Dark Mode';
    }else{
        html.classList.add('dark');
        e.target.innerHTML='Light Mode';
    }
});


function setTime(){
    const time=new Date();
    const month=time.getMonth();
    const day=time.getDay();
    const date=time.getDate();
    const hours=time.getHours();
    const hoursForClock=hours%12;
    const minute=time.getMinutes();
    const second=time.getSeconds();
    const ampm=hours>=12?'PM':'AM';


    hourEl.style.transform=`translate(-50%,-100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`;
    minuteEl.style.transform=`translate(-50%,-100%) rotate(${scale(minute,0,59,0,360)}deg)`;
    secondEl.style.transform=`translate(-50%,-100%) rotate(${scale(second,0,59,0,360)}deg)`;

    timeEl.innerHTML=`${hoursForClock}:${minute<10?`0${minute}`:minute} ${ampm}`;
    dateEl.innerHTML=`${days[day]},${months[month]}<span class="circle">${date}</span>`;

}

setTime();

setInterval(setTime, 1000);