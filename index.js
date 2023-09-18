let canNang = prompt("nhập cân nặng");
let chieuCao = prompt("nhập chiều cao");
let BMI = canNang / (chieuCao**2);
if(BMI<16){
    alert("gầy độ 3");
}else if(16 <= BMI < 17){
    alert("gầy độ 2");
}else if(7 <= BMI < 18.5){
    alert("gầy độ 1");
}else if(18.5 <= BMI < 25){
    alert("bình thường");
}else if(25 <= BMI < 30){
    alert("thừa cân");
}else if(30 <= BMI < 35){
    alert("béo phì 1");
}else if(35 <= BMI < 40){
    alert("béo phì 2");
}else if(BMI > 40){
    alert("béo phì 3");
}