const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

// reverse association
// defining the relationship of the Post model to the User
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Post };