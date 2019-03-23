
var familia = "";
function escogido(id){

    console.log(id);
    familia = id;
    console.log("familia = ", familia)
    var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})

    /*Ejemplo de uso*/
    findIP.then(ip => document.write('Tu IP: ', ip)).catch(e => console.error(e))
}
function enviarVoto(){
    console.log("se ejecuta el envio de voto");
    var headers = {
        "Content-Type": "application/json",
        "Allow": "*"
    };

    var ip = "ipDePrueba";



    var data = {
        ip: ip,
        voto: familia
    };

    var test = JSON.stringify(data);

    axios.post('https://cors-anywhere.herokuapp.com/geoapps.esri.co:80/RestDeDaniel/api/votos/',test,{headers: headers})
    .then(function(response){
        console.log("voto agregado");
    })
    .catch(function (error){
        console.log("error");
        console.log(error);
    });
}

/*
var ctx = document.getElementById('myChart').getContext('2d');
Chart.defaults.global.defaultFontColor = 'white';
var myChart = new Chart(ctx, {
    type: 'bubble',
    data: {
        labels: ['Temporada 1', 'Temporada 2', 'Temporada 3', 'Temporada 4', 'Temporada 5', 'Temporada 6','Temporada 7'],
        datasets: [{
            label: '# de votos',
            data: [
                {x:10, y:10, r:100},
                {x:10, y:9, r:100},
                {x:10, y:9, r:100},
                {x:9, y:10, r:100},
                {x:11, y:10, r:100},
                {x:11, y:9, r:100},
                {x:9, y:11, r:100},
                
            ],
            backgroundColor: [
                'white',
                'rgb(187, 193, 3  )',
                'rgb(37, 160, 7)',
                'rgb(241, 143, 7)',
                'black',
                'rgb(168, 10, 8)',
                'black'
            ],
            borderColor: [
                'white',
                'rgb(187, 193, 3  )',
                'rgb(37, 160, 7)',
                'rgb(241, 143, 7)',
                'black',
                'rgb(168, 10, 8)',
                'black'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scaleFontColor: 'black',
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});*/
