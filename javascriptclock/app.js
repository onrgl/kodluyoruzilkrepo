let name = prompt(`Lütfen isminizi giriniz`)
let myName = document.querySelector(`#myName1`)



if(name){
    myName.innerHTML = `${name}`
}

else{
    alert(`Lütfen isim kısmını boş bırakmayınız`)
    location.reload();
}

// Saat ve gün
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function clockFunction(){
    let dateTime= new Date();
    let day = days[dateTime.getDay()]
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.querySelector("#myClock").innerHTML= `${hrs}: ${min}: ${sec}  ${day}`
}
    
    setInterval(clockFunction, 1000);


    