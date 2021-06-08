$(document).ready(function() {
    createResidentTable([{
        name: "Title1",
        gender: "dd",
        dob: "description1",
        phone: "16/04/1999",
        email: "16/04/1999",
    }, ]);
});

function createResidentTable(data) {
    $('#resident-table').DataTable({
        destroy: true,
        responsive: true,
        autoWidth: false,
        deferRender: true,
        scrollCollapse: true,
        scrollY: "350px",
        data: (data) ? data : [],
        columns: [{
                name: "No",
                searchable: false,
                width: "5%",
                className: "text-center",
                title: "No",
                data: null,
                render: function(data, type, full, meta) {
                    return meta.row + 1
                }
            },
            {
                name: "Name",
                searchable: true,
                width: "15%",
                className: "text-center",
                title: "Name",
                data: "name"
            },
            {
                name: "Gender",
                searchable: true,
                width: "10%",
                className: "text-left",
                title: "Gender",
                data: "gender"
            },
            {
                name: "DOB",
                searchable: true,
                width: "10%",
                className: "text-left",
                title: "dob",
                data: "dob"
            },

            {
                name: "Phone",
                searchable: true,
                width: "20%",
                className: "text-left",
                title: "phone",
                data: "phone"
            }, {
                name: "Email",
                searchable: true,
                width: "20%",
                className: "text-left",
                title: "Email",
                data: "email"
            },
            {
                name: "editButton",
                searchable: false,
                width: "8%",
                className: "text-center",
                title: "Function",
                data: null,
                render: function(data, type, full, meta) {
                    return `<div class="container">
                    <div class="row">
                        <div class="col-4" onclick="detailResident(${meta.row})">
                            <a href="#" class="view mr-1" data-target="#detail-apartment-card" title="Quick Detail" data-toggle="modal">
                                <i class="fas fa-eye fa-fw"></i>
                            </a>
                        </div>
                        <div class="col-4" onclick="updateResident(${meta.row})">
                            <a href="#" class="edit mr-1" data-toggle="modal" data-target="#update-apartment-card" title="Update">
                                <i class="fas fa-pen fa-fw"></i></a>
                        </div>
                        <div class="col-4" onclick="removeResident(${meta.row})">
                            <a href="#" class="remove mr-1" data-toggle="modal" data-target="#remove-apartment-card" title="Remove">
                                <i class="fas fa-trash fa-fw"></i></a>
                        </div>
                    </div>
                </div>`
                }
            },
        ],
        "bLengthChange": false,
    });
}

function detailResident() {
    $("#resident-detail").modal('show');
}

function updateResident() {
    $("#resident-update").modal('show');
}

function removeResident() {
    $("#resident-remove").modal('show');
}