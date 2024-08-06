// API call

const url = 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLProjections?week=season&archiveSeason=2024&twoPointConversions=2&passYards=.04&passAttempts=-.5&passTD=4&passCompletions=1&passInterceptions=-2&pointsPerReception=1&carries=.2&rushYards=.1&rushTD=6&fumbles=-2&receivingYards=.1&receivingTD=6&targets=.1&fgMade=3&fgMissed=-1&xpMade=1&xpMissed=-1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7f6b7b48abmsh3b376281f1b8bc7p19faf8jsn0047ebba866d',
		'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
	}
};

// API call targeted for NFC East 

const dal = document.getElementById('DAL');
const nyg  = document.getElementById("NYG");
const phi = document.getElementById("PHI");
const wsh = document.getElementById("WSH");

async function getNFCEProjections() {

    let data = {}

    try {

	const response = await fetch(url, options);
	const data = await response.json();

    dal.innerHTML += (data.body.teamDefenseProjections[9].fantasyPointsDefault);
    nyg.innerHTML += (data.body.teamDefenseProjections[24].fantasyPointsDefault);
    phi.innerHTML += (data.body.teamDefenseProjections[27].fantasyPointsDefault);
    wsh.innerHTML += (data.body.teamDefenseProjections[32].fantasyPointsDefault);

    } catch (error) {

        dal.innerHTML += "Error getting data :(";
        nyg.innerHTML += "Error getting data :(";
        phi.innerHTML += "Error getting data :(";
        wsh.innerHTML += "Error getting data :(";
    

    }

};


getNFCEProjections();

//API call targeted for NFC North

const chi = document.getElementById('CHI');
const det = document.getElementById("DET");
const gb = document.getElementById("GB");
const min = document.getElementById("MIN");

async function getNFCNProjections() {

    let data = {}

    try {

	const response = await fetch(url, options);
	const data = await response.json();

    chi.innerHTML += (data.body.teamDefenseProjections[6].fantasyPointsDefault);
    det.innerHTML += (data.body.teamDefenseProjections[11].fantasyPointsDefault);
    gb.innerHTML += (data.body.teamDefenseProjections[12].fantasyPointsDefault);
    min.innerHTML += (data.body.teamDefenseProjections[21].fantasyPointsDefault);
    
    } catch (error) {

        chi.innerHTML += "Error getting data :(";
        det.innerHTML += "Error getting data :(";
        gb.innerHTML  += "Error getting data :(";
        min.innerHTML += "Error getting data :(";

    }

};

getNFCNProjections();

//API call targeted for NFC South

const atl = document.getElementById('ATL');
const car  = document.getElementById("CAR");
const no = document.getElementById("NO");
const tb = document.getElementById("TB");

async function getNFCSProjections() {

	let data = {}

    try {

        const response = await fetch(url, options);
        data = await response.json()

    atl.innerHTML += (data.body.teamDefenseProjections[2].fantasyPointsDefault);
    car.innerHTML += (data.body.teamDefenseProjections[5].fantasyPointsDefault);
    no.innerHTML += (data.body.teamDefenseProjections[23].fantasyPointsDefault);
    tb.innerHTML += (data.body.teamDefenseProjections[30].fantasyPointsDefault);

        } catch (error) {


    atl.innerHTML += "Error getting data :(";
    car.innerHTML += "Error getting data :(";
    no.innerHTML  += "Error getting data :(";
    tb.innerHTML  += "Error getting data :(";
    }
    
};

getNFCSProjections();

//Api call targeted for NFC West

const ari = document.getElementById('ARI');
const lar  = document.getElementById("LAR");
const sf = document.getElementById("SF");
const sea = document.getElementById("SEA");

async function getNFCWProjections() {

    let data = {}

    try {

	    const response = await fetch(url, options);
	    const data = await response.json();

    ari.innerHTML += (data.body.teamDefenseProjections[1].fantasyPointsDefault);
    lar.innerHTML += (data.body.teamDefenseProjections[19].fantasyPointsDefault);
    sf.innerHTML += (data.body.teamDefenseProjections[28].fantasyPointsDefault);
    sea.innerHTML += (data.body.teamDefenseProjections[29].fantasyPointsDefault);

    } catch (error) {

        ari.innerHTML += "Error getting data :(";
        lar.innerHTML += "Error getting data :(";
        sf.innerHTML  += "Error getting data :(";
        sea.innerHTML += "Error getting data :(";
    } 
};

getNFCWProjections();