var url = 'http://artikunazo.mx/battles-ogame/';
//var url = 'http://localhost:3000/';

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("btnAddBattle").addEventListener('click', function () {
        let form = new Map();
        form.set('banner', document.getElementById('tbBannerBattle').value);
        form.set('summary', document.getElementById('taSummaryBattle').value);

        fetch(url + 'register-battle', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(map_to_object(form))
        })
            .then(response => response.json()) //Get promise
            .then((response) => {
                document.getElementById('frmAddBattle').reset();
                alert(response.message)
            }) //Resolve promise
    });


    /**
     * Funcion para parsear Map a Object
     * @param map
     * @returns {Object}
     */
    function map_to_object(map) {
        var data = Object.create(null);
        map.forEach((value, key) => {
            if (value instanceof Map) {
                data[key] = map_to_object(value);
            } else {
                data[key] = value
            }
        });
        return data;
    }
});