"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./resouces/user/user.schema");
const post_shema_1 = require("./resouces/post/post.shema");
const comment_shema_1 = require("./resouces/comment/comment.shema");
const Query = `
    type Query {
        ${user_schema_1.userQueries}
        ${post_shema_1.postQueries}
        ${comment_shema_1.commentQueries}
    }
`;
exports.Query = Query;
