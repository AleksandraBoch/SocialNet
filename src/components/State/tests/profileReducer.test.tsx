import {addPostActionCreator, profileReducer, ProfileReducerType} from "../profileReducer";

    test('new post should be added',()=>{
    const startState:ProfileReducerType={

        'newPostText': '',
        'posts':
            [
                {id: 1, message: 'My first post', likesCount: 12},
                {id: 2, message: 'Im Okay', likesCount: 11},
                {id: 3, message: 'im learning js', likesCount: 1}
            ]
    }
const action=addPostActionCreator('new post')
        const endState=profileReducer(startState,action)


        expect(endState['posts'].length).toBe(4)
})