function GetClock(){
var d=new Date();
var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds();
if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var clocktext=""+ndate+"-"+(nmonth+1)+"-"+nyear+" "+nhour+":"+nmin+":"+nsec+"";
document.getElementById('local-time').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);



$('body').append('<button class="btn-up" />');
$('.btn-up').click(function(){
    $('html').animate({'scrollTop':0}, 1000);
});


