// mongodb+srv://dominick_joo:ONerzRrb0Vt6B7FU@cluster0.ies8d.mongodb.net/database?retryWrites=true&w=majority

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else { // development
    module.exports = require('./dev');
}