var expect = require('chai').expect,
    assert = require('assert'),
    Processjs = require('../lib/process');

describe('Processjs', function () {

    var process = new Processjs();

    context('when calling get without filters', function () {

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

});