const t = [];
const u = [];

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
	var c = prompt('How many tasks do you want to input?')
	tasks.length = c;
	for (let i=0; i<c; i++)
	{	
		t[i] = prompt('What task do you have?');
		u[i] = 1;
	}
}

function update_tasklist()
{
	let i = prompt('Which task did you ocmpplete?');
	u[i] += 1;
}

create_tasklist();
// function list_tasklist()
// {
	
// 	for (let i=0; i<c; i++)
// 	{	
		
// 	}
// }