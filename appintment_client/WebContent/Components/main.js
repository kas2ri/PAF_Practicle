$(document).ready(function()
{
$("#alertSuccess").hide();
$("#alertError").hide();
});

$(function(){
	var $appointment =$('#appointment');
	var $id =$('#id');
	var $name =$('#name');
	var $docid =$('#docid');
	var $date =$('#date');
	var $time =$('#time');
	$.ajax({
		
		type:'GET',
		url:'http://localhost:8080/appointment/webapi/appointment',
		success:function(appointment){
			$.each(appointment,function(i,appointment){
				$appointment.append('<li><div class="student card bg-light m-2\" style=\"width: 12rem;float: left;">ID:<span class="noedit id">'+appointment.id
																																				  +'</span><label class="edit id"/><br>Name:<span class="noedit name">'
																																				  +appointment.name
																																				  +'</span><input class="edit name"/> <br>DocId:<span class="noedit docid">'
																																				  +appointment.docId
																																				  +'</span><input class="edit docid"/> <br>Date:<span class="noedit date">'
																																				  +appointment.date
																																				  +'</span><input class="edit date"/> <br>Time:<span class="noedit time">'
																																				  +appointment.time
																																				  +'</span><input class="edit time"/><input type="button" id="'
																																				  +appointment.id
																																				  +'" value="Remove" class="btn btn-danger remove"><input type="button" " value="Edit" class="editapp noedit"><input type="button" " value="Save" class="saveedit edit"><input type="button" " value="Cancel" class="canceledit edit"></li>');
				
			});
			
		},
		error:function(){
			alert('error loading appointment');
		}
			
		
	});
	
	$('#btnSave').on('click',function(){
		$("#alertSuccess").text("");
		$("#alertSuccess").hide();
		$("#alertError").text("");
		$("#alertError").hide();
		
		
		var appo ={
				date: $date.val(),
		        docId: $docid.val(),
		        id: $id.val(),
		        name: $name.val(),
		        time: $time.val(),
		        
		};
		var status = validateAppointmentForm();
		// If not valid-------------------
		if (status != true)
		{
		$("#alertError").text(status);
		$("#alertError").show();
		return;
		}
		
	
		$.ajax({
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
				
			},
			type: 'POST',
			url: 'http://localhost:8080/appointment/webapi/appointment',
			data: JSON.stringify(appo),
			dataType:"json",
			
			success: function(newAppointment){
				$appointment.append('<li><div class="student card bg-light m-2\" style=\"width: 12rem;float: left;">ID:<span class="noedit id">'+newAppointment.id
																																				  +'</span><label class="edit id"/></span><br>Name:<span class="noedit name">'
																																				  +newAppointment.name
																																				  +'</span><input class="edit name"/> <br>DocId:<span class="noedit docid">'
																																				  +newAppointment.docId
																																				  +'</span><input class="edit docid"/> <br>Date:<span class="noedit date">'
																																				  +newAppointment.date
																																				  +'</span><input class="edit date"/> <br>Time:<span class="noedit time">'
																																				  +newAppointment.time
																																				  +'</span><input class="edit time"/><input type="button" id="'
																																				  +newAppointment.id
																																				  +'" value="Remove" class="btn btn-danger remove"><input type="button" " value="Edit" class="editapp noedit"><input type="button" " value="Save" class="saveedit edit"><input type="button" " value="Cancel" class="canceledit edit"></li>');
				$("#alertSuccess").text("Saved successfully.");
				$("#alertSuccess").show();
				$("#formAppointment")[0].reset();
			},
			error:function(){
				var status = validateAppointmentForm();
				// If not valid-------------------
				if (status != true)
				{
				$("#alertError").text(status);
				$("#alertError").show();
				
				
				}
				
			}
		
			
			
		});
		function validateAppointmentForm()
		{
			if ($id.val().trim() == "")
			{
			return "Insert ID.";
			}
			if ($name.val().trim() == "")
			{
			return "Insert Name.";
			}
			
			if ($date.val().trim() == "")
			{
			return "Insert Date.";
			}
			
			if ($time.val().trim() == "")
			{
			return "Insert Time.";
			}
		return true;
		}
		
		
	});
	
	$appointment.delegate('.remove','click',function(){
		var $li=$(this).closest('li');
		$.ajax({
			type:'DELETE',
			url:'http://localhost:8080/appointment/webapi/appointment/'+$(this).attr('id'),
			success: function(){
				$li.fadeOut(300,function(){
					$(this).remove();
					
				})
				
			}
		});
	});
	$appointment.delegate('.editapp','click',function(){
		var $li=$(this).closest('li');
		$li.find('label.id').val($li.find('span.id').html());
		$li.find('input.name').val($li.find('span.name').html());
		$li.find('input.docid').val($li.find('span.docid').html());
		$li.find('input.date').val($li.find('span.date').html());
		$li.find('input.time').val($li.find('span.time').html());
		$li.addClass('edit');
	});
	$appointment.delegate('.canceledit','click',function(){
		$(this).closest('li').removeClass('edit');
		
	});
	$appointment.delegate('.saveedit','click',function(){
		var $li=$(this).closest('li');
		var appoi={
				date: $li.find('input.date').val(),
		        docId: $li.find('input.docid').val(),
		        id: $li.find('label.id').val(),
		        name: $li.find('input.name').val(),
		        time: $li.find('input.time').val()
				
		};
		
		$.ajax({
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
					
					
			},
			type: 'PUT',
			url: 'http://localhost:8080/appointment/webapi/appointment/update',
			data: appoi,
			data: JSON.stringify(appoi),
			dataType:"json",
			
			success: function(newAppointment){
				$li.find('span.id').html(appoi.id);
				$li.find('span.name').html(appoi.name);
				$li.find('span.docid').html(appoi.docId);
				$li.find('span.date').html(appoi.date);
				$li.find('span.time').html(appoi.time);
				$li.removeClass('edit');
				},
		
				error: function(){
				alert('error add appointment');
			}
			
		});
	});
});




