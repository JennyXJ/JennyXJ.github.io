    var num = 0;
function shopping() {
    
    document.getElementById("field").innerHTML += `<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups" id="ex1">
                                <div class="btn-group" role="group" aria-label="First group">
                                    <img src="assets/img/ne.png" alt="商品圖" class="img-thumbnail" style="height: 60px;">
                                    <div class="align-self-center">紫色口罩</div>
                                    <div class="m-2"></div>
                                    <div class="align-self-center" id="ex1Count${num}">NT$250</div>
                                </div>
                                <div class="input-group">
                                    <input class="quantity" min="1" name="quantity" value="1" type="number" id="ex1Value${num}" onchange="count()">
                                    <button class="btn btn-outline-danger" onclick="noShopping()">x</button>
                                </div>
                            </div>`

}
function noShopping() {
    document.getElementById(`ex1`).remove()
}
function count(){
    var ex1Value=document.getElementById(`ex1Value${num}`).value;
    
    document.getElementById(`ex1Count${num}`).innerHTML = `NT$${ex1Value*250}`;
    //document.getElementById(`ex2Count`).innerHTML = `NT$${ex2Value*10}`;
}

 var num = 0;
function shopping2() {
    
    document.getElementById("field").innerHTML += `<div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups" id="ex2">
                                <div class="btn-group" role="group" aria-label="First group">
                                    <img src="assets/img/re.png" alt="商品圖" class="img-thumbnail" style="height: 60px;">
                                    <div class="align-self-center">紅色口罩</div>
                                    <div class="m-2"></div>
                                    <div class="align-self-center" id="ex2Count${num}">NT$10</div>
                                </div>
                                <div class="input-group">
                                    <input class="quantity" min="1" name="quantity" value="1" type="number" id="ex2Value${num}" onchange="count2()">
                                    <button class="btn btn-outline-danger" onclick="noShopping2()">x</button>
                                </div>
                            </div>`

}
function noShopping2() {
    document.getElementById(`ex2`).remove()
}
function count2(){
    var ex2Value=document.getElementById(`ex2Value${num}`).value;
    
    document.getElementById(`ex2Count${num}`).innerHTML = `NT$${ex2Value*10}`;
    //document.getElementById(`ex2Count`).innerHTML = `NT$${ex2Value*10}`;
}