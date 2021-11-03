var num = 0;
var shopNum = 0;

function shopping(list, commodity, money, img) {
  num++;
  shopNum++;

  document.getElementById("field").innerHTML += `<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups" id="ex${list}_${num}">
                                <div class="btn-group" role="group" aria-label="First group">
                                    <img src="assets/img/${img}.png" alt="商品圖" class="img-thumbnail" style="height: 60px;">
                                    <div class="align-self-center">${commodity}</div>
                                </div>
                                <div class="input-group align-self-center">
                                    <div class="align-self-center" style="color:coral;" id="ex${list}Count${num}">NT$${money}</div>
                                    <option value="${money}" name="minTotalMoney"></option>
                                    <input style="width:45px;height:38px;" class="quantity" min="1" name="quantity" value="1" type="number" id="ex${list}Value${num}" onchange="count(${list},${money},${num})">
                                    <button  class="btn text-danger" onclick="noShopping(${list},${num})">x</button>
                                </div>
                            </div><br>`;
  document.getElementById("shopNum").innerHTML = shopNum;
  if (shopNum >= 1) {
  document.getElementById("shopNum").style.display = "inline";
  }
  totalCoin();
}
function noShopping(list, i) {
  shopNum--;
  document.getElementById("shopNum").innerHTML = shopNum;
  if (shopNum == 0) {
    document.getElementById("shopNum").style.display = "none";
  }
  document.getElementById(`ex${list}_${i}`).remove();
  totalCoin();
}


function count(list, money, i) {
  var exValue = document.getElementById(`ex${list}Value${i}`).value;
  document.getElementsByName(`minTotalMoney`)[i-1].setAttribute("value", exValue*money);
  document.getElementById(`ex${list}Value${i}`).setAttribute("value", exValue);
  document.getElementById(`ex${list}Count${i}`).innerHTML = `NT$${exValue *
    money}`;
    //document.getElementById("thingNum").innerHTML = `${exValue}`;

   totalCoin();
}
    
function totalCoin(){
  //計算次數(exAll=搜尋整個Html單獨只有class="btn-toolbar justify-content-between"的有幾個)
    var exAll=document.querySelectorAll("div[class='btn-toolbar justify-content-between']").length
    var sum = 0;
    for(let a=exAll ; a>0 ; a-- ){
      console.log(a)
    const totalMoney = document.getElementsByName(`minTotalMoney`)[a-1];
    const totalMoneyElement = totalMoney.value;
        //輸出出來的數自加總
    sum += Number(totalMoneyElement)
    }
    document.getElementById(`totalSum`).innerHTML = sum
    console.log(document.querySelectorAll(
      "div[class='btn-toolbar justify-content-between']"
    ));
    }