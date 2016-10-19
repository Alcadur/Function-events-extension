module.exports = {
    entry: [
        './src/Function.idGenerator.js',
        './src/Function._events.js',
        './src/Function.addEventListener.js',
        './src/Function.dispatch.js',
        './src/Function.removeEventListener.js'
    ],
    output: {
        path: __dirname + '/build',
        filename: 'Function.events.min.js'
    }
};