var response
var ip

fetch("https://api.ipify.org/?format=json")
.then(response => response.json())
.then(data => {
    alert("got your ip " + data.ip)
})