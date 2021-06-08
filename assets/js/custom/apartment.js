$(document).ready(function() {
    createResidentTable([{
        block: "Title1",
        roomName: "description1",
        householderName: "16/04/1999",
    }, ]);
});

function createResidentTable(data) {
    $('#apartment-table').DataTable({
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
                width: "10%",
                className: "text-center",
                title: "No",
                data: null,
                render: function(data, type, full, meta) {
                    return meta.row + 1
                }
            },
            {
                name: "Block",
                searchable: true,
                width: "20%",
                className: "text-center",
                title: "Block",
                data: "block"
            },
            {
                name: "Room Name",
                searchable: true,
                width: "20%",
                className: "text-left",
                title: "Room Name",
                data: "roomName"
            },
            {
                name: "Householder Name",
                searchable: true,
                width: "40%",
                className: "text-left",
                title: "Householder Name",
                data: "householderName"
            },
            {
                name: "editButton",
                searchable: false,
                width: "10%",
                className: "text-center",
                title: "Function",
                data: null,
                render: function(data, type, full, meta) {
                    return `<div class="container">
                    <div class="row">
                        <div class="col-4" onclick="detailApartment(${meta.row})">
                            <a href="#" class="view mr-1" data-target="#detail-apartment-card" title="Quick Detail" data-toggle="modal">
                                <i class="fas fa-eye fa-fw"></i>
                            </a>
                        </div>
                        <div class="col-4" onclick="updateApartment(${meta.row})">
                            <a href="#" class="edit mr-1" data-toggle="modal" data-target="#update-apartment-card" title="Update">
                                <i class="fas fa-pen fa-fw"></i></a>
                        </div>
                        <div class="col-4" onclick="removeApartment(${meta.row})">
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

function detailApartment() {
    $("#apartment-detail").modal('show');
    createApartmentTableDetail(null);
}

function updateApartment() {
    $("#apartment-update").modal('show');
    createApartmentTableUpdate(null);
}

function removeApartment() {
    $("#apartment-remove").modal('show');
}

function addApartment() {
    $("#apartment-add").modal('show');
    createApartmentTableAdd(null);
}

function createApartmentTableAdd(data) {
    $('#apartment-table-add').DataTable({
        destroy: true,
        responsive: true,
        autoWidth: false,
        deferRender: true,
        scrollCollapse: true,
        data: (data) ? data : [],
        columns: [{
                name: "No",
                searchable: false,
                width: "15%",
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
                name: "Phone",
                searchable: true,
                width: "15%",
                className: "text-left",
                title: "Phone",
                data: "phoneNumber"
            },
            {
                name: "Address",
                searchable: true,
                width: "25%",
                className: "text-left",
                title: "Address",
                data: "address"
            },
            {
                name: "Email",
                searchable: true,
                width: "20%",
                className: "text-left",
                title: "Email",
                data: "email"
            },
            {
                name: "Identify",
                searchable: true,
                width: "15%",
                className: "text-left",
                title: "Identify",
                data: "identifyCard"
            },
            {
                name: "Manager",
                searchable: true,
                width: "5%",
                className: "text-left",
                title: "Manager",
                data: "manager"
            },
        ],
        "bLengthChange": false,
    });
}

function createApartmentTableDetail(data) {
    $('#apartment-table-detail').DataTable({
        destroy: true,
        responsive: true,
        autoWidth: false,
        deferRender: true,
        scrollCollapse: true,
        data: (data) ? data : [],
        columns: [{
                name: "No",
                searchable: false,
                width: "15%",
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
                name: "Phone",
                searchable: true,
                width: "15%",
                className: "text-left",
                title: "Phone",
                data: "phoneNumber"
            },
            {
                name: "Address",
                searchable: true,
                width: "25%",
                className: "text-left",
                title: "Address",
                data: "address"
            },
            {
                name: "Email",
                searchable: true,
                width: "20%",
                className: "text-left",
                title: "Email",
                data: "email"
            },
            {
                name: "Identify",
                searchable: true,
                width: "15%",
                className: "text-left",
                title: "Identify",
                data: "identifyCard"
            },
            {
                name: "Manager",
                searchable: true,
                width: "5%",
                className: "text-left",
                title: "Manager",
                data: "manager"
            },
        ],
        "bLengthChange": false,
    });
}

function createApartmentTableUpdate(data) {
    $('#apartment-table-update').DataTable({
        destroy: true,
        responsive: true,
        autoWidth: false,
        deferRender: true,
        scrollCollapse: true,
        data: (data) ? data : [],
        columns: [{
                name: "No",
                searchable: false,
                width: "15%",
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
                name: "Phone",
                searchable: true,
                width: "15%",
                className: "text-left",
                title: "Phone",
                data: "phoneNumber"
            },
            {
                name: "Address",
                searchable: true,
                width: "25%",
                className: "text-left",
                title: "Address",
                data: "address"
            },
            {
                name: "Email",
                searchable: true,
                width: "20%",
                className: "text-left",
                title: "Email",
                data: "email"
            },
            {
                name: "Identify",
                searchable: true,
                width: "15%",
                className: "text-left",
                title: "Identify",
                data: "identifyCard"
            },
            {
                name: "Manager",
                searchable: true,
                width: "5%",
                className: "text-left",
                title: "Manager",
                data: "manager"
            },
        ],
        "bLengthChange": false,
    });
}