const g = new Dygraph(document.getElementById('graph'), "temperatures.csv", { rollPeriod: 7, showRoller: true});
const e = new Dygraph(document.getElementById('graph'), "Date,Temperature\n" +
"10, 10\n" +
"8, 20\n" +
"22, 30\n", { rollPeriod: 7, showRoller: true});
