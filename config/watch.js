const webpack = require("webpack");
const { fork } = require("child_process");
const path = require("path");

let proc = null;

webpack(require("./webpack.config")).watch({}, (err, stats) => 
{
	if(err)
		console.error(err);
	if(stats)
		console.log(stats.toString("minimal"));
});

webpack(require("./webpack.config.server")).watch({}, (err, stats) => 
{
	if(err)
		console.error(err);

	if(stats)
		console.log(stats.toString("minimal"));

	if(proc)
		proc.kill();

	proc = fork(path.resolve(__dirname, "../dist/main.bundle.js"), { stdio: "inherit" });
});