import {userMutations} from "./resouces/user/user.schema";
import {postMutations} from "./resouces/post/post.shema";
import {commentMutations} from "./resouces/comment/comment.shema";

const Mutation = `
    type Mutation {
        ${userMutations}
        ${postMutations}
        ${commentMutations}
    }
`;

export {Mutation}