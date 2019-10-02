function batchSaveForWeb(){
    var activeDocument = app.activeDocument;
    var folder = Folder.selectDialog("請選擇要輸出檔案的位置");
    var percentageToOptimized = prompt("請輸入影像品質 1~100");
    if(folder != null){
        if(!folder instanceof Folder)
            return;
    }

    var jpegFolder = Folder(folder.path+"\\"+folder.name);
    var codeStart = 97; // for a;
    for (var j = 0; j < activeDocument.artboards.length; j++) {
        var activeArtboard = activeDocument.artboards[j];
        activeDocument.artboards.setActiveArtboardIndex(j);
        var bounds = activeArtboard.artboardRect;
        var left = bounds[0];
        var top = bounds[1];
        var right = bounds[2];
        var bottom = bounds[3];
        var width = right - left;
        var height = top - bottom;
        if (app.activeDocument.rulerUnits == RulerUnits.Points) { //Add more if for more conversions
            width = width / 72;
            height = height / 72;
        }
        var fileName = activeDocument.name.split('.')[0] + "-" + String.fromCharCode(codeStart) + "-" + width + "x" + height + ".jpg";
        var destinationFile = File(jpegFolder + "/" + fileName);
        var type = ExportType.SAVEFORWEB;
        var options = new ExportOptionsSaveForWeb();
        options.format = SaveDocumentType.JPEG;
        options.includeProfile = false;
        options.quality = parseInt(percentageToOptimized);
        options.optimized = true;
        activeDocument.exportFile(destinationFile, type, options);
        codeStart++;
    }
    //activeDocument.close(SaveOptions.DONOTSAVECHANGES);
}
    batchSaveForWeb()
