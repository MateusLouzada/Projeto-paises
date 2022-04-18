export function eventBack(button) {
    button.addEventListener("click", function () {
      localStorage.removeItem("country");
      const urlDetails = window.location.href;
      console.log(urlDetails)
      const urlIndex = urlDetails.substring(0, urlDetails.indexOf("details"))
      console.log(urlIndex)
      location.assign(urlIndex);
    });
  }