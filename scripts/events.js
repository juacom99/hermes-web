/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function ()
{
    $("#navi li").click(function ()
    {
        $("#navi li").removeClass("active")
        $(this).addClass("active");
    });

    $("#archive").click(function ()
    {
        $.ajax({
            //Cambiar a type: POST si necesario
            type: "GET",
            // Formato de datos que se espera en la respuesta
            dataType: "json",
            // URL a la que se enviará la solicitud Ajax
            url: "https://api.github.com/repos/juacom99/hermes-client/releases",
        })
                .done(function (data, textStatus, jqXHR) {
                    
                        console.log(data);
                       cont=$("#content");
                        cont.html("");
                        $.each(data, function (key, val) {
                            
                            console.log(key+"---->"+val.name)
                            cont.append('<img src="images/download.png"/><a class="download" href="'+val.tarball_url+'">'+val.name+'</a>');                            
                        });
                    
                })
                .fail(function (jqXHR, textStatus, errorThrown) {
                    if (console && console.log) {
                        console.log("La solicitud a fallado: " + textStatus);
                    }
                });
    });
});
