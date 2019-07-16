$(document).ready(function(){
    var h = $("#protection_concerns_child_child_with_disability_chosen").hide();
    var h1 = $("#protection_concerns_child_child_with_disability_chosen").parent().siblings().hide();

    $("#protection_concerns_child_protection_concerns_").change(function(event){	
        if(document.getElementById("protection_concerns_child_protection_concerns_") != null) {
            var dop = $('#protection_concerns_child_protection_concerns_').find(":selected").text();
            var dopes = "Child with Disability";
            if(dop.indexOf( dopes ) != -1){
                h.show();
                h1.show();
            }
            else{
                h.hide();
                h1.hide();
            }
        }
   });
});
