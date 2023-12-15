//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("output-btn");
const text = document.getElementById("text");

//console.log(btn.textContent);
//btn.textContent = "クリック"
//HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener("click", () => {
    //const h2 = document.createElement("h2");
    //h2.textContent="ボタンをクリックしました"
    //document.querySelector()
    text.textContent = "ボタンをクリックしました";
});