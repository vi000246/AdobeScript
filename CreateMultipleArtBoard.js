function CreateMultipleArtBoard(){
    var size = prompt("請輸入尺吋 用分號分隔 ex.100*200;300*400");
    var sizes = size.split(";");
    var doc = null;
    if(app.documents.length===0){
        doc = app.documents.add();
    }
    else{
        doc = app.activeDocument;
    }
    for (var i = 0; i < sizes.length; i++) {
        var targetSize = sizes[i].split("*");//取出寬和高
        var width = parseInt(targetSize[0]);//要新增的artboard的寬
        var height = parseInt(targetSize[1]);//要新增的artboard的高
        //取得最後一個artboard
        var lastBoard = doc.artboards[doc.artboards.length - 1];
        var lastRect = lastBoard.artboardRect;
        doc.selectObjectsOnActiveArtboard();
        app.copy();
        var lbLeftbound = lastBoard.artboardRect[0];//最左邊
        var lbHeight = lastBoard.artboardRect[1];//高度
        var lbRightBound = lastBoard.artboardRect[2];//最右邊
        var lbTopBound = lastBoard.artboardRect[3];//最上面
        //複製一個目前的artboard  
        var x1 = lbRightBound + 10;//左右兩個區塊的間隔是10
        var y1 = height;
        var x2 = x1 + width;
        var y2 = 0;//最上方是0 水平新增artboard
        var newBoard = doc.artboards.add([x1, y1, x2, y2]);


        newBoard.name = "new"+i;
    }

    
    app.executeMenuCommand("pasteFront");
    doc.selection = null;
};
CreateMultipleArtBoard();
