$(document).ready(function(){

    $("#form_registro").validate({

        rules:{

            e_mail:{

                required:true,
                email:true
            },

            password:{

                required:true,
                rangelength:[8,16]
            },
            
            confirma:{

                equalTo:"#password"

            }

        },
        messages:{

            e_mail:{

                required:"Introduce email",
                email:"El formato es erroneo"
            },
            password:{
                required:"Por favor introduce contraseña",
                rangelength:"Entre 8 y 16 caracteres"
            },
            confirma:{
                equalTo:"La contraseña no coincide"
            }
        },
        errorPlacement: function(error, element){

            if(element.is(":radio") || element.is(":checkbox")){

                error.appendTo(element.parent());
            }else{

                error.insertAfter(element);
            }
        }
    });
});