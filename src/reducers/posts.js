import {RECEIVE_POSTS} from '../actions/posts'

const defaultState = {
    posts: [], 
    pageNum: 1,
    totalPages: 1
};

export default function posts(state = defaultState, action) {
    switch(action.type) {
        case RECEIVE_POSTS:
            const { pageNum, totalPages, posts } = action.payload;
            return{
                ...state,
                posts: posts,
                pageNum: pageNum,
                totalPages: parseInt(totalPages)
            }
        default:
            return state;
    }

}
