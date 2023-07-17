$(function() {
    $('.parent > li').hover(function(){
        $(this).find('.child').show(400);
    }, function(){
        $(this).find('.child').hide(400);
    });
});
$(function(){
    $('li#graph').click(function(){
        //alert("clicked:"+this.id);
        var divg=document.getElementById("imagen");
        var divi=document.getElementById("izquierdo");
        var divp=document.getElementById("principal");
        var divr=document.getElementById("right");
        if(divg.style.display === "none"){
            divg.style.display = "block";
            divi.style.display = "none";
            divp.style.display = "none";
            divr.style.display = "none";
        } else{
            divg.style.display = "none";
            divi.style.display = "block";
            divp.style.display = "block";
            divr.style.display = "block";
        }
    });
    //$('li#graph').trigger("click");
});

