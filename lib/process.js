var shell = require('shelljs');

var Processjs = function () {

};

Processjs.prototype.get = function (filter) {
    var processes;


    if(filter && filter.sort) {
        processes = shell.exec('ps aux --sort user | tail -n+2', {silent: true}).stdout;
    }

    if(filter && filter.filter) {
        
    }

    processes = processes.replace(/  +/g, ' ');
    processes = processes.slice(0, -1);
    processes = processes.split('\n');

    return jsonfy(processes);


};

module.exports = Processjs;

function jsonfy(processes) {

    var result = [];
    var aux;

    processes.forEach(function (process) {
        aux = process.split(' ');

        result.push({
            user:    aux[0],
            pid:     aux[1],
            cpu:     aux[2],
            mem:     aux[3],
            vsz:     aux[4],
            rss:     aux[5],
            tty:     aux[6],
            stat:    aux[7],
            start:   aux[8],
            time:    aux[9],
            command: aux[10]
        });

    });

    return result;

}