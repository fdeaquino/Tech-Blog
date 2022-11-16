const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment')

User.hasMany(Post, {
    foreignKey: 'user_id'
});

// reverse association
// defining the relationship of the Post model to the User
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };