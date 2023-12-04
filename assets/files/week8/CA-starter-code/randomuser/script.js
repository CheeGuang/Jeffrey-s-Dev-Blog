// https://randomuser.me/api/
//@TODO use only the fetch web api

let url = "https://randomuser.me/api/";

//modify this fetch method to the required settings.
/*
fetch()
  .then()
  .then();
*/

//insert and modify to your needs

generateUser();
function generateUser() {
  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      console.log(data);
      let fullname =
        data["results"][0]["name"]["first"] +
        data["results"][0]["name"]["last"];
      let username = data["results"][0]["login"]["username"];
      let email = data["results"][0]["email"];
      let city = data["results"][0]["location"]["city"];
      let avatar = data["results"][0]["picture"]["medium"];
      document.getElementById("fullname").innerText = fullname;
      document.getElementById("username").innerText = username;
      document.getElementById("email").innerText = email;
      document.getElementById("city").innerText = city;
      document.getElementById("avatar").src = avatar;
    });
}
