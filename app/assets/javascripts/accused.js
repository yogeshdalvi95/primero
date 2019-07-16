$(document).ready(function(){
    var numAccused = $('#accused_related_info_child_number_of_accused').closest('.row').nextAll();
    $(numAccused).hide();
    var separate =  $("#tab_cp_accused_related_info [class='row separator_field']");
    $(separate).show();
    var remark = $("#accused_related_info_child_whether_the_accused_was_known_to_the_child_or_stranger").closest('.row').nextAll();
    $(remark).show();
    
    $("#accused_related_info_child_number_of_accused").change(function(){	
        var accus = $('#accused_related_info_child_number_of_accused').find(":selected").text();
        var numSelect = $('#accused_related_info_child_number_of_accused').closest('.row').nextAll();
        $(numSelect).each(function(){
            var name = $(this).find("input:text, input:radio, select").attr('id');
            if(name != undefined){
                if(accus == '1') {
                    if((name.indexOf('accused_1') != -1)||(name.indexOf('was_known_to_the_child') != -1)){						
						$(this).show();
					}else{
						$(this).hide();
					}					
				}else if(accus == '2') {
						if((name.indexOf('accused_2') != -1)||(name.indexOf('accused_1') != -1)||(name.indexOf('was_known_to_the_child') != -1)){						
								$(this).show();
						}else{
								$(this).hide();
						}	
				}else if(accus == '3') {
						if((name.indexOf('accused_3') != -1)||(name.indexOf('accused_2') != -1)||(name.indexOf('accused_1') != -1)||(name.indexOf('was_known_to_the_child') != -1)){						
								$(this).show();
						}else{
								$(this).hide();
						}				
				}else if(accus == '4') {
						if((name.indexOf('accused_4') != -1)||(name.indexOf('accused_3') != -1)||(name.indexOf('accused_2') != -1)||(name.indexOf('accused_1') != -1)||(name.indexOf('was_known_to_the_child') != -1)||(name.indexOf('was_known_to_the_child') != -1)){						
								$(this).show();
						}else{
								$(this).hide();
						}				
				}else{
						$(this).hide();
				}	
      }
    });
  });
});
