var Clicks = 0;
var MultiUpgradeCost = 50;
var Multi = 1;
function Shorten(Amount, suffix = '') {
     let suffixes = ['', 'K', 'M', 'B', 'T']

     if (Amount < 1000) {
          return Amount.toFixed(1) + suffix
     }

     let index = suffix ? suffixes.indexOf(suffix) + 1 : 1;
     return convert(Amount / 1000, suffixes[index])
}

function buttonFunction() {
     Clicks = Clicks + (1 * Multi);
     ClicksText = Shorten(Clicks)
     document.getElementById("TextIdk").innerHTML = "Clicks: " + ClicksText
}

function BuyMulti() {
     if (Clicks >= MultiUpgradeCost) {
          Clicks = Clicks - MultiUpgradeCost
          MultiUpgradeCost = MultiUpgradeCost * 2.5
          Multi = Multi + 1
          ClicksText = Shorten(Clicks)
          document.getElementById("TextIdk").innerHTML = "Clicks: " + ClicksText
          document.getElementById("UpgradeButton").innerHTML = "multiplier: " + String(Shorten(MultiUpgradeCost) + " Clicks")
     }
}