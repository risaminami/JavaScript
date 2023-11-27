//変数numにランダムな整数を代入する
let num = Math.floor(Math.random() *100);

//num＝3の倍数
if(num % 3 == 0){
    console.log("3の倍数です")
}
//num＝5の倍数
if(num % 5 == 0){
    console.log("5の倍数です")
}
//num＝3と5の倍数
if(num % 3 == 0 && num % 5 == 0){
    console.log("3と5の倍数です")
}
//それ以外
else {
    console.log(num)
}