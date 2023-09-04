var apiUrl = 'https://api.edu.cdek.ru/v2/oauth/token?parameters&grant_type=client_credentials&client_id=EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI&client_secret=PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG';
var clientId = 'EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI';
var clientSecret = 'PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG';
var grantType = 'client_credentials';
var token = "";
fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
})
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log(data);
    token = data.access_token;
    console.log(token);
});
