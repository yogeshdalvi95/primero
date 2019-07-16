(function($) {
    $(document).ready(function(){
		$('#subform_cp_daily_case_logs_subform_followup_add_button').bind("click", function() {
			setTimeout(function(){
				   var elemId = $('#cp_daily_case_logs_subform_followup').children().last().attr('id');
				   var index = elemId.lastIndexOf("_");
				   var result = 'followupr_child_cp_daily_case_logs_subform_followup_' + elemId.substr(index+1) + '_task_caselog'; 				
				   $('#' + result).closest('.row').nextAll("*:lt(26)").hide() ;			   
		   }, 1000);
		});
		$('body').delegate("select","change", function(e) {
			var elemId = e.target.id;
			if(elemId.indexOf('task_caselog') != -1){
				var selectText = $('#' + elemId).find(":selected").text();
				var elem = elemId.split('_')
				var elemName = 'followupr_child_cp_daily_case_logs_subform_followup_' + elem[8] + '_task_caselog';
				$('#' + elemName).closest('.row').nextAll("*:lt(26)").hide() ;
				$('#' + elemName).closest('.row').nextAll("*:lt(26)").each(function(){
				   if($(this).find('label').text() == selectText){
					   $(this).show();
				   }
				});
			}
		});
  });
}) (jQuery);
