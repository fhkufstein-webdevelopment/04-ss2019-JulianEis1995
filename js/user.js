$(document).ready(function() {

    var userListBody = $('.userList tbody');

    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }
                    //Variablen definieren
            var id = userListBody.find('tr').length;
            var username = document.getElementById('username').value;

            // Tabelle erweitern
            var table = document.getElementById('table');
            var row = table.insertRow(-1);

            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);

            cell0.innerHTML = id;
            cell1.innerHTML = username;
            cell2.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button>";

            var counter = 0;
            counter++;

        $(".needs-validation")[0].reset();

        return false;

    });


    $('.deleteTrigger').click(function() {

        //Info: bei dieser Möglichkeit wird lediglich die erste Zeile gelöscht, keine andere Zeile kann gelöscht werden.
        //Überlegung war: Mithilfe von jQuery: "Closest" kann das am nächsten gelegene TR-Element gefunden und im Anschluss gelöscht werden. Praktischer Einzeiler.

        if(!confirm("Löschen?")){
            return;
        }
        $(this).closest("tr").remove();
        counter--;

    });

});