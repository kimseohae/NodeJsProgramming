// EventEmitter 객체를 생성합니다.
var EventEmitter = require('events');
var custom = new EventEmitter();

// 이벤트를 연결합니다.
custom.on('tick', function (code) {
    console.log('이벤트를 실행합니다. ^_^');
});

custom.emit('tick');