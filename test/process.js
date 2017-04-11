var expect = require('chai').expect,
    assert = require('assert'),
    Processjs = require('../lib/process');

describe('Processjs', function () {

    var process = new Processjs();

    context('when calling get without sort', function () {

        var result = process.get();

        it('should return processes with properties', function () {

            result.forEach(function (item) {

                expect(item).to.have.property('user');
                expect(item).to.have.property('pid');
                expect(item).to.have.property('cpu');
                expect(item).to.have.property('mem');
                expect(item).to.have.property('vsz');
                expect(item).to.have.property('rss');
                expect(item).to.have.property('tty');
                expect(item).to.have.property('stat');
                expect(item).to.have.property('start');
                expect(item).to.have.property('time');
                expect(item).to.have.property('command');

            });
            
        });

    });

    context('when caling with cpu sort', function () {

        var result = process.get('cpu');

        it('should return precesses sorted by cpu', function () {
            var prev;

            result.forEach(function (item) {

                if(prev) {
                    expect(parseFloat(item.cpu) <= parseFloat(prev.cpu)).to.be.true;
                }

                prev = item;

            });

        });

    });

    context('when caling with mem sort', function () {

        var result = process.get('mem');

        it('should return precesses sorted by mem', function () {
            var prev;

            result.forEach(function (item) {

                if(prev) {
                    expect(parseFloat(item.mem) <= parseFloat(prev.mem)).to.be.true;
                }

                prev = item;

            });

        });

    });

    context('when caling with user sort', function () {

        var result = process.get('user');

        it('should return precesses sorted by user', function () {
            var prev;

            result.forEach(function (item) {

                if(prev) {

                    expect(item.user >= prev.user).to.be.true;
                }

                prev = item;

            });

        });

    });

    context('when caling with non-existing sort', function () {

        var result = process.get('asduagsduy');

        it('should return precesses sorted by user', function () {
            var prev;

            result.forEach(function (item) {

                if(prev) {

                    expect(item.user >= prev.user).to.be.true;
                }

                prev = item;

            });

        });

    });

    context('when caling get by id with a valid id', function () {

        var id = process.get()[0].pid;
        var item = process.getById(id);

        it('should return the process with specified id', function () {

            expect(item).to.have.property('user');
            expect(item).to.have.property('pid');
            expect(item).to.have.property('cpu');
            expect(item).to.have.property('mem');
            expect(item).to.have.property('vsz');
            expect(item).to.have.property('rss');
            expect(item).to.have.property('tty');
            expect(item).to.have.property('stat');
            expect(item).to.have.property('start');
            expect(item).to.have.property('time');
            expect(item).to.have.property('command');           

        });

    });

});