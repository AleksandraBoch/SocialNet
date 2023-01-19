import {addMessageAC, changeMessageTextActionCreator, dialogsReducer, DialogsReducerType} from "../dialogsReduser";

test ('message should be added',()=>{

    const startState:DialogsReducerType={
        newMessageText: '',
        "dialogsData": [
            {id: 11, name: "Sasha",},
            {id: 12, name: "Dina"},
            {id: 13, name: "Vladimir"},
            {id: 14, name: "Egor"},

        ],
        'messageData': [
            {id: 21, message: 'Hello'},
            {id: 22, message: 'How are you?'},
            {id: 23, message: 'Whats the weather like today?'}

        ]
    }
    const action = addMessageAC('h')

    const endState = dialogsReducer(startState, action)

    expect(endState['messageData'].length).toBe(4)
})


