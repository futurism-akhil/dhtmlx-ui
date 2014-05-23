define(
    ['service/logger'],
    function (logger) {
        logger.debug('Event module has initialized');

        var events = {};

        return {
            on: function (eventName, callback) {
                var event = events[eventName] || [];
                event.push(callback);
                events[eventName] = event;
            },
            fireEvent: function (eventName) {
                var eventArray = events[eventName] || [];
                var i, j = eventArray.length;
                for (i = 0; i < j; i++) {
                    if (typeof eventArray[i] === 'function') eventArray[i]();
                }
            }
        }
    }
);
