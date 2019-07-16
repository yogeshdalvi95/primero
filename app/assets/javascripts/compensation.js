$(document).ready(function(){
	var divsInterim = $('#interim_compensation_info_child_interim_compensation_status_chosen').closest('.row').nextAll();
	$(divsInterim).hide();
	
	var divsFinal = $('#final_compensation_info_child_final_compensation_application_status_chosen').closest('.row').nextAll();
	$(divsFinal).hide();

	$("#interim_compensation_info_child_interim_compensation_status").change(function(){	
		var status = $(this).find(":selected").text();
		var divsSelect = $('#interim_compensation_info_child_interim_compensation_status_chosen').closest('.row').nextAll();
		$(divsSelect).each(function(){
			var name = $(this).find('input').attr('id'); 			
			if(name != undefined){
				if(status == 'Granted') {
					if(name.indexOf('reasons') != -1){						
						$(this).hide();
					}else{
						$(this).show();
					}					
				}else if(status == 'Rejected') {				
					if(name.indexOf('reasons') != -1){
						$(this).show();
					}else{
						$(this).hide();
					}	
				}else{
					$(this).hide();
				}
			}else{
				if(status == 'Granted') {
					$(this).show();
				}else{
					$(this).hide();
				}
			}
		});			
	});
	
	
	$("#final_compensation_info_child_final_compensation_application_status").change(function(){	
		var status = $(this).find(":selected").text();
		var divsFinalSelect = $('#final_compensation_info_child_final_compensation_application_status_chosen').closest('.row').nextAll();
		$(divsFinalSelect).each(function(){
			var name = $(this).find('input').attr('id'); 			
			if(name != undefined){
				if(status == 'Granted') {
					if(name.indexOf('reasons') != -1){						
						$(this).hide();
					}else{
						$(this).show();
					}					
				}else if(status == 'Rejected') {				
					if(name.indexOf('reasons') != -1){
						$(this).show();
					}else{
						$(this).hide();
					}	
				}else{
					$(this).hide();
				}
			}else{
				if(status == 'Granted') {
					$(this).show();
				}else{
					$(this).hide();
				}
			}
		});			
	});

});