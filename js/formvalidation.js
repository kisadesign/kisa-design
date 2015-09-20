

function validate_contact_form( )
{
    valid = true;

	 
	 
	
    if ( document.emailForm.userName.value == "" )
    {
		
        document.getElementById('errorUserName').innerHTML="Enter your name";
        valid = false;
        
    }
	
	else if ( document.emailForm.userName.value != true )
    {
		
        document.getElementById('errorUserName').innerHTML="";
        
        
    }
	
	
	if ( document.emailForm.email.value == "" )
    {
		
        document.getElementById('errorEmail').innerHTML="Enter an email";
        valid = false;
        
    }
	
	else if ( document.emailForm.email.value != true )
    {
		
        document.getElementById('errorEmail').innerHTML="";
        
        
    }
	
	if ( document.emailForm.message.value == "" )
    {
		
        document.getElementById('errorMessage').innerHTML="Enter a message";
        valid = false;
        
    }
	
	else if ( document.emailForm.message.value != true )
    {
		
        document.getElementById('errorMessage').innerHTML="";
        
        
    }
	
	return valid; //when all is complete the forms action is executed
	
	
}









