// API call

const url = 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLProjections?week=season&archiveSeason=2024&twoPointConversions=2&passYards=.04&passAttempts=-.5&passTD=4&passCompletions=1&passInterceptions=-2&pointsPerReception=1&carries=.2&rushYards=.1&rushTD=6&fumbles=-2&receivingYards=.1&receivingTD=6&targets=.1&fgMade=3&fgMissed=-1&xpMade=1&xpMissed=-1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7f6b7b48abmsh3b376281f1b8bc7p19faf8jsn0047ebba866d',
		'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
	}
};

// API call targeted for AFC East 

const buf = document.getElementById("BUF");
const ne  = document.getElementById("NE");
const mia = document.getElementById("MIA");
const nyj = document.getElementById("NYJ");

async function getAFCEProjections() {

    let data = {}

    try {

	const response = await fetch(url, options);
	const data = await response.json();

    buf.innerHTML += (data.body.teamDefenseProjections[4].fantasyPointsDefault);
    ne.innerHTML += (data.body.teamDefenseProjections[22].fantasyPointsDefault);
    mia.innerHTML += (data.body.teamDefenseProjections[20].fantasyPointsDefault);
    nyj.innerHTML += (data.body.teamDefenseProjections[25].fantasyPointsDefault);

    } catch (error) {

    buf.innerHTML += "Error getting data :(";
    ne.innerHTML  += "Error getting data :(";
    mia.innerHTML += "Error getting data :(";
    nyj.innerHTML += "Error getting data :(";

    }
};

getAFCEProjections();

//API call targeted for AFC North

const bal = document.getElementById("BAL");
const cin = document.getElementById("CIN");
const cle = document.getElementById("CLE");
const pit = document.getElementById("PIT");

async function getAFCNProjections() {

    let data = {}

    try {

	const response = await fetch(url, options);
	const data = await response.json();

    bal.innerHTML += (data.body.teamDefenseProjections[3].fantasyPointsDefault);
    cin.innerHTML += (data.body.teamDefenseProjections[7].fantasyPointsDefault);
    cle.innerHTML += (data.body.teamDefenseProjections[8].fantasyPointsDefault);
    pit.innerHTML += (data.body.teamDefenseProjections[26].fantasyPointsDefault);

    } catch (error) {

        bal.innerHTML += "Error getting data :(";
        cin.innerHTML += "Error getting data :(";
        cle.innerHTML += "Error getting data :(";
        pit.innerHTML += "Error getting data :(";        

    }
};

getAFCNProjections();

//API call targeted for AFC South

const hou = document.getElementById("HOU");
const ind = document.getElementById("IND");
const jax = document.getElementById("JAX");
const ten = document.getElementById("TEN");

async function getAFCSProjections() {

    let data = {}

    try {

	const response = await fetch(url, options);
	const data = await response.json();

    hou.innerHTML += (data.body.teamDefenseProjections[13].fantasyPointsDefault);
    ind.innerHTML += (data.body.teamDefenseProjections[14].fantasyPointsDefault);
    jax.innerHTML += (data.body.teamDefenseProjections[15].fantasyPointsDefault);
    ten.innerHTML += (data.body.teamDefenseProjections[31].fantasyPointsDefault);
    
    } catch (error) {

    hou.innerHTML += "Error getting data :(";
    ind.innerHTML += "Error getting data :(";
    jax.innerHTML += "Error getting data :(";
    ten.innerHTML += "Error getting data :(";

    }
};

getAFCSProjections();

//Api call targeted for AFC West

const den = document.getElementById("DEN");
const kc  = document.getElementById("KC");
const lv  = document.getElementById("LV");
const lac = document.getElementById("LAC");

async function getAFCWProjections() {

    let data = {}

    try {

	const response = await fetch(url, options);
	const data = await response.json();

    den.innerHTML += (data.body.teamDefenseProjections[10].fantasyPointsDefault);
    kc.innerHTML += (data.body.teamDefenseProjections[16].fantasyPointsDefault);
    lv.innerHTML += (data.body.teamDefenseProjections[17].fantasyPointsDefault);
    lac.innerHTML += (data.body.teamDefenseProjections[18].fantasyPointsDefault);

    } catch (error) {

        den.innerHTML += "Error getting data :(";
        kc.innerHTML  += "Error getting data :(";
        lv.innerHTML  += "Error getting data :(";
        lac.innerHTML += "Error getting data :(";

    }
};

getAFCWProjections();