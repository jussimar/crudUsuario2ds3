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

function listar(){
  $.ajax({
        type:"post", //como enviar
        url:"https://dominioappsjussa.000webhostapp.com/listar.php",//para onde enviar
        dataType:"json",//o que vamos receber
        //se der certo
        success: function(data){
            var itemlista = "";
            $.each(data.pessoas,function(i,dados){
              itemlista += "<option value='"+dados.codigo+"'>"+dados.nome+"</option>";
            });
            $("#lista").html(itemlista);

        },
        //se der errado
        error: function(data){
             navigator.notification.alert("Erro ao cadastrar");
        }
    });  
}

$(document).on("change","#lista",function(){
    var parametro = {
        "codigo": $("option:selected",("#lista")).val()
    };
    $.ajax({
        type:"post", //como enviar
        url:"https://dominioappsjussa.000webhostapp.com/listar-um-registro.php",//para onde enviar
        data:parametro,
        dataType:"json",//o que vamos receber
        //se der certo
        success: function(data){
           $("#nome").val(data.pessoa.nome);
           $("#email").val(data.pessoa.email);
           $("#senha").val(data.pessoa.senha);
        },
        //se der errado
        error: function(data){
             navigator.notification.alert("Erro ao cadastrar");
        }
    }); 

    
});

$(document).on("click","#deletar",function(){
   var parametro = {
        "codigo": $("option:selected",("#lista")).val()
    };
    $.ajax({
        type:"post", //como enviar
        url:"https://dominioappsjussa.000webhostapp.com/delete.php",//para onde enviar
        data:parametro,
        //se der certo
        success: function(data){
          navigator.notification.alert(data);
          location.reload();
        },
        //se der errado
        error: function(data){
             navigator.notification.alert("Erro ao cadastrar");
        }
    }); 
});