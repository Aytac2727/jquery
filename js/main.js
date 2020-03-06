$("#tabMenu button").click(function(){
let btIn = $(this).attr("dt");
var pnI = [...$(".panel")]

$(".panel").hide()
$(pnI[btIn]).slideDown(500)
})