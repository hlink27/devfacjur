$(document).ready(function () {
    $('#myTable').DataTable({
        // Opções de configuração
        "paging": true,
        "lengthMenu": [15, 30, 50],
        "searching": true,
        "ordering": true,
        "info": false,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.13.4/i18n/pt-BR.json"
        }
        // Outras opções de personalização
    });
    const table = $('#myTable').DataTable();

    table.draw();
});