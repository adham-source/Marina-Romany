const mongoose = require('mongoose')
module.exports = () => {
    const dbUrl = 'mongodb+srv://MarinaRomany:marina12345@cluster0.pz7d5.mongodb.net/blog?retryWrites=true&w=majority'
    mongoose.connect(dbUrl ,{useNewUrlParser : true , UseUnifiedTopology: true})
}
