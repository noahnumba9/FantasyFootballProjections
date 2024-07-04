/*const url = 'https://tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com/getNFLProjections?week=season&archiveSeason=2024&twoPointConversions=2&passYards=.04&passAttempts=-.5&passTD=4&passCompletions=1&passInterceptions=-2&pointsPerReception=1&carries=.2&rushYards=.1&rushTD=6&fumbles=-2&receivingYards=.1&receivingTD=6&targets=.1&fgMade=3&fgMissed=-1&xpMade=1&xpMissed=-1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7f6b7b48abmsh3b376281f1b8bc7p19faf8jsn0047ebba866d',
		'x-rapidapi-host': 'tank01-nfl-live-in-game-real-time-statistics-nfl.p.rapidapi.com'
	}
};

const ari = document.getElementById('ARI');
const atl = document.getElementById("ATL");
const bal = document.getElementById("BAL");
const buf = document.getElementById("BUF");

async function getAFCProjections() {
	const response = await fetch(url, options);
	const data = await response.json();
    ari.innerHTML = (data.body.teamDefenseProjections[1].defTD);
    atl.innerHTML = (data.body.teamDefenseProjections[2].defTD);
    bal.innerHTML = (data.body.teamDefenseProjections[3].defTD);
    buf.innerHTML = (data.body.teamDefenseProjections[4].defTD);
};

getAFCProjections();*/
