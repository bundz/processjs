shell = require('shelljs');


function getProcesses(){
	var result = shell.exec('ps aux --sort user | tail -n+2');

	processes = result.split('\n');
	var processInformationMatrix = {};
	var foreachIndex = +0;

	processes.forEach(function(item){
		var aux;

		aux = item.split(' ');
		
		processInformationMatrix[foreachIndex++] = aux;	
		console.log(foreachIndex);
		console.log(aux);
		console.log(processInformationMatrix);
	});
}

