document.addEventListener("DOMContentLoaded", function () {
  // @params settings
  var params = {
    // YYYY-MM-DD[T]HH:mm:ss (SGT)
    date_time: "2016-06-27T23:00:00",
    date: "2016-06-27", // YYYY-MM-DD
  };

  fetch("https://api.data.gov.sg/v1/environment/psi", {
    method: "GET",
    headers: {
      "Content-Type": "text/plain",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log("API status: " + data.api_info.status);

      var reading_twenty_four = data.items[0].readings.psi_twenty_four_hourly;
      var reading_no2_one_hour_max = data.items[0].readings.no2_one_hour_max;

      var content = "";
      var contentNO2 = "";

      Object.keys(reading_twenty_four).forEach(function (key) {
        console.log(key + ": " + reading_twenty_four[key]);
        content += key + ": " + reading_twenty_four[key] + "<br/>";
      });
      Object.keys(reading_no2_one_hour_max).forEach(function (key) {
        console.log(key + ": " + reading_no2_one_hour_max[key]);
        contentNO2 += key + ": " + reading_no2_one_hour_max[key] + "<br/>";
      });

      document.getElementById("psi-twenty-four-hourly").innerHTML = content;
      document.getElementById("no2-one-hour-max").innerHTML = contentNO2;

      // store info as local storage
      localStorage.setItem("three_hourly", JSON.stringify(reading_twenty_four));
    })
    .catch((error) => {
      console.error("Error during fetch operation:", error);
    });
});
function specificDateTime() {
  let inputDateTime = document.getElementById("txtDate").value;
  // @params settings
  let apiURL = `https://api.data.gov.sg/v1/environment/psi?date_time=${inputDateTime}`;
  console.log(apiURL);
  fetch(apiURL, {
    method: "GET",
    headers: {
      "Content-Type": "text/plain",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log("API status: " + data.api_info.status);

      var reading_twenty_four = data.items[0].readings.psi_twenty_four_hourly;
      var reading_no2_one_hour_max = data.items[0].readings.no2_one_hour_max;

      var content = "";
      var contentNO2 = "";

      Object.keys(reading_twenty_four).forEach(function (key) {
        console.log(key + ": " + reading_twenty_four[key]);
        content += key + ": " + reading_twenty_four[key] + "<br/>";
      });
      Object.keys(reading_no2_one_hour_max).forEach(function (key) {
        console.log(key + ": " + reading_no2_one_hour_max[key]);
        contentNO2 += key + ": " + reading_no2_one_hour_max[key] + "<br/>";
      });

      document.getElementById("psi-twenty-four-hourly").innerHTML = content;
      document.getElementById("no2-one-hour-max").innerHTML = contentNO2;

      // store info as local storage
      localStorage.setItem("three_hourly", JSON.stringify(reading_twenty_four));
    })
    .catch((error) => {
      console.error("Error during fetch operation:", error);
    });
}
