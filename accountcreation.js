password = 'TestPass1234'
roles = [{"role":"REFEREE","event":"*"}, {"role":"INSPECTOR","event":"*"}, {"role":"LEAD_INSPECTOR","event":"*"}, {"role":"FTA","event":"*"}]

count = 1;
while (count < 30) {
    var username = "tablet" + count;
    await fetch("/create/account/", {
        "credentials": "include",
        "body": `username=${encodeURIComponent(username)}&password1=${encodeURIComponent(password)}&password2=${encodeURIComponent(password)}&roles=${encodeURIComponent(JSON.stringify(roles))}`,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        "method": "POST",
        "mode": "cors"
    });
    count++;
}

// modify this snippet as necessary, then paste into a logged-in browser's dev console