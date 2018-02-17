import {userQueries} from "./resouces/user/user.schema";
import {postQueries} from "./resouces/post/post.shema";
import {commentQueries} from "./resouces/comment/comment.shema";

const Query = `
    type Query {
        ${userQueries}
        ${postQueries}
        ${commentQueries}
    }
`;

export {Query}