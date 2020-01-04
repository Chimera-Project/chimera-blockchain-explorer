var api = "http://explorer.chimeraproject.io:8197";
var apiList = [
	"http://explorer.chimeraproject.io/"
];
var blockTargetInterval = 60;
var coinUnits = 100;
var symbol = 'CMRA';
var refreshDelay = 30000;
// pools stats by MainCoins
var poolsStat =
	[
		["chimera.pdss2access.com","http://chimera.pdss2access.com:8117/stats"],
		["54.172.240.25","http://54.172.240.25:8117/stats"],
		["cmra.miningpool.fun", "https://cmra.miningpool.fun:8151/stats"],
		["cryptonote.club","https://mng.cryptonote.club:8197/stats"],
		["cryptonote.club 2","https://btch.cryptonote.club:8197/stats"],
		["semipool.com","https://webcmra.semipool.com/api"],
		["minercountry.com","https://wtips.minercountry.com/stats"]
    ];
var nodesStat =
	[
		["us-east.chimeraproject.io:8197"],
		["explorer.chimeraproject.io:8197"],
		["cryptodude.chimeraproject.io:8197"]
    ];
