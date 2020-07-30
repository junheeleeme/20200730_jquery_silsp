
$(".thumbGoods").click(function(){


    // 1. 원본 이미지 파일명
    //  src="images/
    // 2. 말머리
    // 3. 가격

    var srcData = $(this).children("img").attr("src");


    $("#modalPopup").css({ "display" : "block" });

    $("#modalPopup").css({ "display" : "block" });
    $("#goods1").children("img").attr("src", srcData);

    var title = $(this).children("h5").text();
    $("#goods1").children("h5").text(title);

    var price = $(this).children("p").text();
    $("#goods1").children("p").text(price);


});

$("#close").click(function(){

    $("#modalPopup").css({ "display" : "none" });

});
