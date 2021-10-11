var num = 0;
var shopNum = 0;

function shopping(list,commodity,money,img) {
    num++;
    shopNum++;
    document.getElementById("field").innerHTML += `<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups" id="ex${list}_${num}">
                                <div class="btn-group" role="group" aria-label="First group">
                                    <img src="assets/img/${img}.png" alt="商品圖" class="img-thumbnail" style="height: 60px;">
                                    <div class="align-self-center">${commodity}</div>
                                    <div class="m-2"></div>
                                    <div class="align-self-center" id="ex${list}Count${num}">NT$${money}</div>
                                </div>
                                <div class="input-group">
                                    <input class="quantity" min="1" name="quantity" value="1" type="number" id="ex${list}Value${num}" onchange="count(${list},${money},${num})">
                                    <button class="btn btn-outline-danger" onclick="noShopping(${list},${num})">x</button>
                                </div>
                            </div>`;
    document.getElementById('shopNum').innerHTML =shopNum
    if(shopNum>=1){document.getElementById('shopNum').style.display='inline'}

}
function noShopping(list,i) {
    shopNum--;
    document.getElementById('shopNum').innerHTML =shopNum;
    if(shopNum==0){document.getElementById('shopNum').style.display='none'}
    document.getElementById(`ex${list}_${i}`).remove();
}
function count(list,money,i){
    var exValue=document.getElementById(`ex${list}Value${i}`).value;
    document.getElementById(`ex${list}Value${i}`).setAttribute('value' , exValue);
    document.getElementById(`ex${list}Count${i}`).innerHTML = `NT$${exValue*money}`;
    document.getElementById('thingNum').innerHTML =`${exValue}`;

}
