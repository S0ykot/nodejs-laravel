/*var obj = {
	name: "Sameull",
	id: "17-33950-1",
	dept: "CS",
	printDetails : function(){
		document.write(this.name);
		document.write(this.id);
		document.write(this.dept);
	}
};


obj.printDetails();

*/


$(document).ready(
	/*function() {
		$('input[type=button]').click(

			function()
			{
				$('p').html(
						$('input[type=text]').val()
					);
			}

			);
	}*/


	/*function()
	{
		$('input[type=text]').keyup(
			function()
			{
				$('p').html($('input[type=text]').val())
			}

			);
	}*/


	function()
	{
		$('input[type=button]').click(

			function()
			{
				$.ajax(
						{
							url : "server.php",
							method : "GET",
							data : {
								name : $('input[type=text]').val()
							},
							success : function(response)
							{
								$('p').html(response);
							},
							error : function(error)
							{
								alert(error);
							}
						}
					);
			}

			);
	}



	



);