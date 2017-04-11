var shell = require('shelljs');

var Processjs = function () {

};

Processjs.prototype.get = function (sort) {
    var processes;

    var command = "ps aux"


    if(sort) {
        command = command + ' --sort=' + this.getSortCommand(sort);
    }

    command = command + ' | tail -n+2';

    processes = shell.exec(command, { silent: true }).stdout;

    processes = processes.replace(/  +/g, ' ');
    processes = processes.slice(0, -1);
    processes = processes.split('\n');

    return jsonfy(processes);
};

Processjs.prototype.getSortCommand = function (sort) {

    switch(sort) {
        case 'user':
            return 'user';
        case 'cpu':
            return '-pcpu';
        case 'mem':
            return '-pmem';
        case 'time':
            return '-time';
        default:
            return 'user';
    }

    return 'user';

};

Processjs.prototype.getById = function (id) {
    var process;
    var command = 'ps';

    if(parseInt(id)) {

        command = command + ' -p ' + id + ' -u';

    } else {

        return '';

    }

    command = command + ' | tail -n+2';

    process = shell.exec(command, { silent: true }).stdout;

    process = process.replace(/  +/g, ' ');
    process = process.slice(0, -1);
    process = process.split('\n');

    return jsonfy(process)[0];    

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