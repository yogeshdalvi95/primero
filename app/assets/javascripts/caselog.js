(function($) {
    $(document).ready(function(){
		$('#tab_cp_daily_case_logs,#tab_cp_daily_case_logs_asw,#tab_cp_daily_case_logs_cslr,#tab_cp_daily_case_logs_director').delegate("a:contains('Add')","click", function(e) {
			var subform = $(this).closest('.row').find('div:first').attr('id');
			setTimeout(function(){		
				var elemId = $('#' + subform).children().last().attr('id');	
				$('#' + elemId + ' label').each(function() {		
					 var labelText = $(this).text();	  
					 if(labelText == 'Task'){
						 var elementName = $(this).closest('div').next('div').find('select').attr('id');		   
						 $('#' + elementName).closest('.row').nextAll("*:lt(26)").hide() ;	
					 }			
				});
			}, 1000);
		});

		$('#tab_cp_daily_case_logs,#tab_cp_daily_case_logs_asw,#tab_cp_daily_case_logs_cslr,#tab_cp_daily_case_logs_director').delegate("select","change", function(e) {
			var elemId = e.target.id;
			if(elemId.indexOf('task_caselog') != -1){
				var selectText = $('#' + elemId).find(":selected").text();		
				$(this).closest('.row').nextAll("*:lt(26)").hide() ;
				$(this).closest('.row').nextAll("*:lt(26)").each(function(){
					 if($(this).find('label').text() == selectText){
						 $(this).show();
					 }
				});
			}
		});

		$('body').delegate(".collapse_expand_subform","click", function(e) {	
			var elementId = $(this).closest('.subform_container').attr('id');	
			if((elementId).indexOf('daily_case_logs') != -1){
				var elementIndex = elementId.lastIndexOf("_");
				$('#' + elementId + ' div.row').slice(4, 30).hide();	
				var expanded = $(this).hasClass('expanded');
				$('#' + elementId + ' label').each(function() {		
					 var labelText = $(this).text();	  
					 if(labelText == 'Task'){
						 var elementName = $(this).closest('div').next('div').find('select').attr('id');		   
						 var selectElementText = $('#' + elementName).find(":selected").text();
						 $('#' + elementName).closest('.row').nextAll("*:lt(26)").each(function(){			
							 if($(this).find('label').text() == selectElementText && expanded == true){
								 $(this).show();
							 }
						});
					 }			
				});
			}
		});
	});
}) (jQuery);
