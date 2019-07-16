(function($) {
$(document).ready(function(){

    var sf = $('#cp_psychosocial_needs_status_subform_type_of_need').hide();
    var ab = $('#subform_cp_psychosocial_needs_status_subform_type_of_need_add_button').hide();
    $("#psychosocial_needs_status_child_psychosocial_need_assessment_and_identification").change(function(){	
        //location.reload();
        var ps = $('#psychosocial_needs_status_child_psychosocial_need_assessment_and_identification').find(":selected").text();
        if(ps == "Need Identified"){
            sf.show();
            ab.show();
        }
        else{
            sf.hide();
            ab.hide();

        }
    });
});
}) (jQuery);

