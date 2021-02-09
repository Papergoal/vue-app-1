const app = new Vue({
    el: '#main',

    data: {
        result: " ",
        responseAvailable: false,
    },
    methods: {
        fetchAPIData() {
            this.responseAvailable = false;
            fetch("http://router.project-osrm.org/nearest/v1/driving/13.388860,52.517037?number=3&bearings=0,20", {
                "method": "GET",
            })
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        alert("Server returned " + response.status + " : " + response.statusText);
                    }
                })
        }
    }
})