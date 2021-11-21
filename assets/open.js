setTimeout("changeState()", 30000);

function changeState() { document.getElementById('content').innerHTML = `<div class="fixed-top" id="xclose">
        <div class="float-right card mr-2 mb-2 shadow-sm border-danger" style="width:15rem;">
            <div class="modal-header">
                <h5 class="modal-title">購買品項</h5>
                <button type="button" class="btn btn-secondary" onclick="xCard()">x</button>
            </div>
            <div class="card-body">
                <img src="assets/img/re.png" style="width:10rem;">
                <h5 class="card-title">紅色口罩</h5>
                <p class="card-text">請購買紅色口罩</p>
                
            </div>
        </div>
    </div>
`;
}
function xCard() {
    console.log(123);
    document.getElementById('xclose').remove();
}
