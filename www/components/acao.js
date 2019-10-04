// This is a JavaScript file

$(document).on("click","#listar",function(){
  $(location).attr("href","listar.html");
});

$(document).on("click","#salvar",function(){
  var parametros = {
        "nome": $("#nome").val(),
        "senha": $("#senha").val(),
        "email": $("#email").val()
    };

    $.ajax({
        type:"post", //como enviar
        url:"https://dominioappsjussa.000webhostapp.com/cadastra.php",//para onde enviar
        data:parametros,//o que enviar
        //se der certo
        success: function(data){
            navigator.notification.alert(data);
            $("#nome").val("");
            $("#senha").val("");
            $("#email").val("");

        },
        //se der errado
        error: function(data){
             navigator.notification.alert("Erro ao cadastrar");
        }
    });    
});