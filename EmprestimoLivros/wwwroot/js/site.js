

$(document).ready(function () {
    
    $('#Emprestimos').DataTable({
        language:
            {
            "decimal": "",
            "emptyTable": "Nenhum registro disponível no cadastro",
            "info": "Exibindo _START_ registros de _END_ de um total de _TOTAL_ entradas",
            "infoEmpty": "Exibindo 0 to 0 of 0 entradas",
            "infoFiltered": "(filtrado para _MAX_ total de entradas)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ entradas",
            "loadingRecords": "Carregando...",
            "processing": "",
            "search": "Procurar:",
            "zeroRecords": "Nenhum registro encontrado",
            "paginate": {
                "first": "Primeiro",
                "last": "Último",
                "next": "Próximo",
                "previous": "Anterior"
            },
            "aria": {
                "orderable": "Order by this column",
                "orderableReverse": "Reverse order this column"
            }
        }
    });

    setTimeout(function () {
        $(".alert").fadeOut("slow", function () {
            $(this).alert("close");
        })
    }, 2000)

});

