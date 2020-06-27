var url = 'https://jsonplaceholder.typicode.com/posts';

function getPosts(){
    fetch(url)
        .then(function(response){
            response.json().then(function(data){
                var lista1 = "";
                var lista2 = "";
                var metade = data.length / 2;
                data.forEach((item, index)=>{
                     var html = '<li class="list-group-item">\n' +
                        '                    <div class="card-body">\n' +
                        '                        <h5 class="card-title">'+item.title+'</h5>\n' +
                        '                        <p class="card-text">'+item.body+'</p>\n' +
                        '                    </div>\n' +
                        '                </li>';

                     if(index < metade){
                         lista1 += html;
                     }else{
                         lista2 += html;
                     }
                });

                document.getElementById("lista1").innerHTML = lista1;
                document.getElementById("lista2").innerHTML = lista2;
            });
        })
        .catch(function(err){
            console.error('Erro ao buscar posts', err);
        });
}

function postPosts(){
    var parametros = {
        userId:  document.getElementById("idUsuario").value,
        title: document.getElementById("idTitulo").value,
        body: document.getElementById("descricao").value
    };
console.log(parametros)
    fetch(url, {
        method: 'post',
        body: JSON.stringify(parametros)
    }).then(function(response) {
        return response.json();
    }).catch(function(err){
        console.error('Erro ao inserir posts', err);
    });

}

getPosts();