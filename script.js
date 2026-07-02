function generateMission() {

    const acts = document.getElementById("acts").value;
    const threats = document.getElementById("threats").value;
    const successes = document.getElementById("successes").value;
    const failures = document.getElementById("failures").value;

    const mission = {
        acts: Number(acts),
        threats: Number(threats),
        successes: Number(successes),
        failures: Number(failures)
    };

    console.log("MISSÃO GERADA:");
    console.log(mission);

    document.getElementById("output").innerText =
        "Missão gerada! Veja o console (F12)";
}
