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
                type: "GET",
                dataType: "json",
                url: "https://api.github.com/repos/juacom99/hermes-client/releases",
                success:function(data, textStatus, jqXHR)
                {
                    console.info(data.length)
                    if (data.length > 0)
                        {

                            cont = $("#content");
                            cont.empty();
                            
                            cont.append('<table id="downloads">')
                            down=$("#downloads")
                            $.each(data, function (key, val) {

                                console.info(val.name)
                                down.append("<tr ><td style='font-weight: bold' colpan='3'>"+val.name+"</td></tr>");
                                
                                $.each(val.assets, function (asset_key, asset) 
                                {
                                    s_release_date=$.format.date(new Date(asset.created_at), 'dd/MM/yyyy');
                                    
                                    console.info("      " + s_release_date + "  " + asset.name + "  " + asset.browser_download_url);
                                    down.append("<tr><td>"+s_release_date+"</td><td>"+asset.name+"</td><td><a href='"+asset.browser_download_url+"'><span class='download'>Download</span></a></tr>");
                                    // cont.append('<div class="download">\n<a href="'+val.tarball_url+'">'+val.name+'</a>\n</div>');
                                });

                            });
                        }
                },
                error:function(jqXHR, textStatus, errorThrown)
                {
                     if (console && console.log) {
                            console.log("La solicitud a fallado: " + textStatus);
                        }
                }
            });
                
                   
    });


    $("#main").click(function ()
    {
        cont = $("#content");
        cont.empty();
    })



});
