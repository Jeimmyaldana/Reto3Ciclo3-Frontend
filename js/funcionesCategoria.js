//GET, POST , PUT Y DELETE

function getCategoria (){
    $.ajax({
        url:"http://192.9.238.217:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            
            pintarCategoria(respuesta);
        }
    });

}

function postCategoria(){

    let cajas = {
        name:$("#name").val(),
        description:$("#description").val()
    };
    $.ajax({
        url:"http://192.9.238.217:8080/api/Category/save",
        type:"POST",
        datatype:"JSON",
        contentType:"application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente la categoria");
            window.location.reload();
    
        }
    });
}

function putCategoria(){

}

function deleteCategoria(){

}

////////////////////////////////////////////

function pintarCategoria(respuesta){
    console.log(respuesta);
    let myTable="<table>";
    for(i=0;i<respuesta.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].name+"</td>";
        myTable+="<td>"+respuesta[i].description+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);


}