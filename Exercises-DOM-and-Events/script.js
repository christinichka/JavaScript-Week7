function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    function changeText() {
      document.getElementById("statusReport").innerHTML = "Houston, we have liftoff!";
      }
      button.addEventListener("click", changeText);

      function mouseoverAbortMission() {
        document.getElementById("abortMission").style.backgroundColor = "red"; 
      }
      missionAbort.addEventListener("mouseover", mouseoverAbortMission);

      function mouseoutAbortMission() {
        document.getElementById("abortMission").style.backgroundColor = "";
      }
      missionAbort.addEventListener("mouseout", mouseoutAbortMission)

      function abortWindow() {
        window.alert("Are you sure you want to abort the mission?");
        paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
      }
      missionAbort.addEventListener("click", abortWindow)
}

window.addEventListener("load", init);

