var ping = require('ping');

const main = () => {
    var hosts = [];

    setInterval(() => {
        ping.sys.probe('172.19.206.63', function (isAlive) {
            var msg = isAlive ? 'host ' + '172.19.206.63' + ' ON' : 'host ' + '172.19.206.63' + ' OFF';
            console.log(msg);
        });
    }, 2000)
}

main()