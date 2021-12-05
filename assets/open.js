setTimeout("changeState()", 3000);

function changeState() { document.getElementById('content').innerHTML = `<div class="fixed-top" id="xclose">
        <div class="float-right card text-center shadow-sm border-danger" style="width:15rem;">
            <div class="modal-header bg-danger text-white">
                <h5 class="modal-title ">購買品項</h5>
                <button type="button" class="btn btn-white" onclick="xCard()">x</button>
            </div>
            <div class="card-body">
                <img src="assets/img/re.png" class="mb-2" style="width:10rem;">
                <h5 class="card-title">紅色口罩</h5>
                <p class="card-text">請購買紅色口罩</p>
                <div class="card-footer text-muted" id="myMessage">
                購買時間倒數
                </div>
                </div>
            </div>
        </div>
    </div>
`;
}
function xCard() {
    console.log(123);
    document.getElementById('xclose').remove();
}

//setTimeout(function(){ 
//    $('#xclose').remove(); 
//}, 9000);


