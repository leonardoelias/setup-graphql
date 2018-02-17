"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./resouces/user/user.schema");
const post_shema_1 = require("./resouces/post/post.shema");
const comment_shema_1 = require("./resouces/comment/comment.shema");
const Mutation = `
    type Mutation {
        ${user_schema_1.userMutations}
        ${post_shema_1.postMutations}
        ${comment_shema_1.commentMutations}
    }
`;
exports.Mutation = Mutation;
