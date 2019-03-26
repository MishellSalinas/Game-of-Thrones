
var familia = "";
function escogido(id){

    console.log(id);
    familia = id;
    console.log("familia = ", familia)
    var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})
    findIP.then(ip => console.log('Tu IP: ', ip)).catch(e => console.error(e))
}

const getVotes = () => {
    try {
      return axios.get('https://cors-anywhere.herokuapp.com/geoapps.esri.co:80/RestDeDaniel/api/votos/')
    } catch (error) {
      console.error('error')
    }
}

console.log(getVotes);

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
