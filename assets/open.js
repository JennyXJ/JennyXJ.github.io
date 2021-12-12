//紅色口罩
setTimeout("changeState()", 3000);
function changeState() { document.getElementById('content').innerHTML = `
<div class="fixed-top" id="xclose">
        <div class="float-right card text-center shadow-sm border-danger" style="width:15rem;">
            <div class="modal-header">
                <h5 class="modal-title ">購買品項</h5>
                <button type="button" class="btn"onclick="xCard()">x</button>
            </div>
            <div class="card-body">
                <img src="assets/img/re.png" class="mb-2" style="width:10rem;">
                <h5 class="card-title">紅色口罩</h5>
                <p class="card-text">請購買紅色口罩</p>
            </div>
            <div class="card-footer bg-danger text-white">
            15秒後關閉視窗
            </div>
        </div>
</div> 
`;}
//紅色口罩x
setTimeout(function(){ 
    $('#xclose').remove(); 
}, 6000);

//紫色口罩
setTimeout("changeState2()", 9000);
function changeState2() { document.getElementById('content').innerHTML = `
<div class="fixed-top" id="xclose">
        <div class="float-right card text-center shadow-sm border-danger" style="width:15rem;">
            <div class="modal-header">
                <h5 class="modal-title ">購買品項</h5>
                <button type="button" class="btn"onclick="xCard()">x</button>
            </div>
            <div class="card-body">
                <img src="assets/img/ne.png" class="mb-2" style="width:10rem;">
                <h5 class="card-title">紫色口罩</h5>
                <p class="card-text">請購買紫色口罩</p>
            </div>
            <div class="card-footer bg-danger text-white">
            15秒後關閉視窗
            </div>
        </div>
</div> 
`;}
//紫色口罩x
setTimeout(function(){ 
    $('#xclose').remove(); 
}, 12000);

//打叉關閉
function xCard() {
    console.log(123);
    document.getElementById('xclose').remove();
}