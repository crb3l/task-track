const prompt = require("prompt-sync")();
const t = [];
const u = [];
const d = [];
const w1 = [];
const w2 = [];
var cc = 0;
var cp = 0;
const  data = Date().now;

// function get_task(task, i){
// 	console.log('This is task no. '+i'.');
// }

function set_taskid(){
	let id = prompt('What is the task that you want to do?');
}

function set_desc(){
	let desc = prompt('What is the description of the task?');
}

function set_status(){
	let status = prompt('What is the status of the task?');
}

// function createdAt(){
// 	let status = prompt('When was the task created?');
// }

// function updatedAt(){
// 	let status = prompt('When was the task last updated?');
// }

function create_tasklist()
{
	cc = parseInt(prompt('How many tasks do you want to input?'));
	console.log(cc);
	t.length = cc;
	cp+=cc;
	for (let i=0; i<cc; i++)
	{	
		t[i] = prompt('What task do you have?');
		d[i] = prompt('What is the description of the task?');
		u[i] = 1;
		w1[i] = data.toUTCString();
	}
}

function list_tasklist()
{
	console.log(cc);
	t.length = cc;
	for (let i=0; i<cc; i++)
	{	
		console.log(t[i]);
	}
}

function check_task()
{
	for (let i=0;i<cc;i++)
	{
		if(u[i] == 1)
			console.log("Task"+i+"is in progress and was created on"+w1);
		else if (u[i] == 2)
			console.log("Task"+i+" is done. Date of completion: "+w2);
	}
}

function update_tasklist()
{
	let i = prompt('Which task did you complete?\n');
	u[i] += 1;
	w2[i] = w2[i] = data.toUTCString();
}

create_tasklist();
list_tasklist();



function run()
{
	var y=9;
	while (y)
	{
		y= prompt('Gday! Whatcha wanna do?\n\n 1. Create tasks. \n ');
	}
}