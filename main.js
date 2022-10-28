
function timSln1(a,b,c){
    var max;
    // 3 4 1
    if(a > b ){
        max = a; // underfire
    }
    if(a > c){
        max = a; // underfire
    }
    if(b > c){
        max = b; // max = 4
    }
    else{
        max = c; // underfire
    }
    return max; // max = 4
}

function timSln(a,b,c){
    var max = a; // max = 3
    if(b > max){ 
        max = b; // max = 4
    }
    if(c > max){
        max = c; //underfire
    }
    return max; // max = 4
}


function timso(){
    var num1 = document.getElementById("number_1").value*1;
    var num2 = document.getElementById("number_2").value*1;
    var num3 = document.getElementById("number_3").value*1;
    var max = timSln(num1,num2,num3);
    var result = "Số lớn nhất là: " + max
    document.getElementById("infotimso").innerHTML= result;
}


function tongDiem(khuvuc,doituong,diemt1,diemt2,diemt3){
    var tongdiem = khuvuc + doituong + diemt1 + diemt2 + diemt3;
    return tongdiem;
}
function xetDiem( diemchuan,sum,diemt1,diemt2,diemt3){
    if(diemchuan >= sum && diemt1 > 0 && diemt2 > 0 && diemt3 > 0){
        var result = "Bạn đã đậu. Tổng điểm là: "+ sum;
    }
    else{
        var result = "Bạn đã rớt. Tổng điểm là: "+ sum;
    }
    return result;
}

//Bài tập nộp quản lí điểm sinh viên
function tdSv(){
    //Lấy dữ liệu
    var diemchuan = document.getElementById("diemchuan").value*1;
    var khuvuc = document.getElementById("khuvuc").value*1;
    var doituong = document.getElementById("doituong").value*1;
    var diemt1 = document.getElementById("diemt1").value*1;
    var diemt2 = document.getElementById("diemt2").value*1;
    var diemt3 = document.getElementById("diemt3").value*1;
    //Xử lí
    var sum = tongDiem(khuvuc,doituong,diemt1,diemt2,diemt3);  
    var output = xetDiem(diemchuan,sum,diemt1,diemt2,diemt3);
    //Đầu ra
    document.getElementById("output").innerHTML = output;
}


function tinhtien(){
    //Lấy dữ liệu
    var name = document.getElementById("name").value;
    var soKw = document.getElementById("sokw").value*1;
    var thanhtien = tinhTienKw(soKw);
    console.log(thanhtien);
    //Xử lí
}
function tinhTienKw(sokw){
    var tongtien;
    if( sokw > 0 && sokw <= 50){
        tongtien = sokw * 500;
    }
    else if(sokw > 50 && sokw <= 100){
        tongtien = (50 * 500) + (sokw - 50) * 650;
    }
    else if(sokw > 100 && sokw <= 200){
        tongtien = (50* 500) + (50 * 650) + (sokw - 100) * 850;
    }
    else if(sokw > 200 && sokw <= 350){
        tongtien = (50 * 500) + (50 * 650) + (100 * 850) + (sokw - 200) * 1100;
    }
    else{
        tongtien = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (sokw - 350) * 1300 ;
    }
    return tongtien;
}



        