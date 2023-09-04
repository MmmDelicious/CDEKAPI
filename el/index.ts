const apiUrl = 'https://api.edu.cdek.ru/v2/oauth/token?parameters&grant_type=client_credentials&client_id=EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI&client_secret=PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG';
const clientId = 'EMscd6r9JnFiQ3bLoyjJY6eM78JrJceI';
const clientSecret = 'PjLZkKBHEiLK3YsjtNrt3TGNG0ahs3kG';
const grantType = 'client_credentials';
let token: string = ""

fetch(apiUrl,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
   
  })
  .then(response =>  response.json())
  .then(data => {
    console.log(data);
    token = data.access_token
    console.log(token)
  })



