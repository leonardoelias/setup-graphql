"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const lodash_1 = require("lodash");
const query_1 = require("./query");
const mutation_1 = require("./mutation");
const user_schema_1 = require("./resouces/user/user.schema");
const post_shema_1 = require("./resouces/post/post.shema");
const comment_shema_1 = require("./resouces/comment/comment.shema");
const comment_resolvers_1 = require("./resouces/comment/comment.resolvers");
const post_resolvers_1 = require("./resouces/post/post.resolvers");
const user_resolvers_1 = require("./resouces/user/user.resolvers");
const resolvers = lodash_1.merge(comment_resolvers_1.commentResolvers, post_resolvers_1.postResolvers, user_resolvers_1.userResolvers);
const SchemaDefinition = `
    type Schema {
        query: Query
        mutation: Mutation
    }
`;
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs: [
        SchemaDefinition,
        query_1.Query,
        mutation_1.Mutation,
        user_schema_1.userTypes,
        post_shema_1.postTypes,
        comment_shema_1.commentTypes
    ],
    resolvers
});
