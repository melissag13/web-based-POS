$('document').ready(function() { 

	$("#id-form").each (function() {
    $(this).validate(options);
        rules: {
                    
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
        },
        messages: {
                    
            password: {
                required: "Please provide a password",
                minlength: "Password at least have 8 characters"
            },
            email: "Please enter a valid email address"
        },
            submitHandler: function(form) {
                form.submit();
            }
     
	});
});  
