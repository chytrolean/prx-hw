
let txt = '<span class="cock"></span>'
$(".btn-outline-success").click( function() {
    $(".change").css("background-color", "green")
    if($('.cock').length == 0){
       for(let x=0; x<$('#inp').val(); x++){ 
            $('.color').append(txt)
       }
    }
});
$(".btn-outline-danger").click( function() {
    $(".change").css("background-color", "red")
        for(let x=0; x<$('#inp').val(); x++){ 
             $('.cock').eq(0).remove()
        }
});
