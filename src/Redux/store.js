import { configureStore,createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
const toggleFunctionsSlice = createSlice({
    name:'Toggle',
    initialState: {
        nextPage:false,
        focused:false,
        showmailbox:false,
        openedSide:undefined
    },
    reducers: {
        turnNext:(state,action) => {
           state.nextPage = true
        },
        focusInput:(state,action) => {
            state.focused = true
        },
        blurInput: (state,action) => {
            state.focused = false
        },
        showMailBox:(state,action) => {
            state.showmailbox = true
        },
        hideMailBox:(state,action) => {
            state.showmailbox = false
        },
        openSidebar:(state,action) => {
            state.openedSide = true
        },
        closeSidebar:(state,action) => {
            state.openedSide = false
        },
        toggleSidebar: (state,action) => {
            state.openedSide = !state.openedSide
        }
    }
})



const inputToggles = createSlice({
    name:'InputToggles',
    initialState: {
        nameInput:false,
        surnameInput:false,
        emailInput:false,
        passwordInput:false,
        passwordInputRepeat:false,
        searchInputFocus:false
    },
    reducers: {
        nameInput:(state,action) => {
            if (action.payload === false) {
                state.nameInput = false
            }
            else if (action.payload === true){
                state.nameInput = true
            }
        },
        surnameInput:(state,action) => {
            if (action.payload === false) {
                state.surnameInput = false
            }
            else if (action.payload === true){
                state.surnameInput = true
            }
        },
        emailInput:(state,action) => {
            if (action.payload === false) {
                state.emailInput = false
            }
            else if (action.payload === true){
                state.emailInput = true
            }
        },
        passwordInput:(state,action) => {
            if (action.payload === false) {
                state.passwordInput = false
            }
            else if (action.payload === true){
                state.passwordInput = true
            }
        },
        passwordInputRepeat:(state,action) => {
            if (action.payload === false) {
                state.passwordInputRepeat = false
            }
            else if (action.payload === true){
                state.passwordInputRepeat = true
            }
        },
        searchInputFocus:(state,action) => {
            state.searchInputFocus = !state.searchInputFocus
        }
    }
})

const accountsSlice = createSlice({
    name:'Products',
    initialState: [],
    reducers: {
        addToAccounts: (state,action) => {
            state.push(action.payload)
        }
    }
})

const mailPage = createSlice({
    name:'Mail Page',
    initialState: {
        currentMail:undefined
    },
    reducers: {
        definePage:(state,action) => {
            state.currentMail = action.payload
        }
    }
})

const currentAccountSlice = createSlice({
    name:'Current',
    initialState: {
        targetAcc:undefined,
        currentAcc:undefined,
        currentID:undefined
    },
    reducers: {
        targetAcc:(state,action) => {
            state.targetAcc = action.payload
        }, setID:(state,action) => {
            state.currentID = action.payload[0]
        }
    },
   
})

const accounts = createSlice({
    name:'All Accounts',
    initialState: {
        accounts:[]
    },
    reducers: {
        setAccs: (state,action) => {
            state.accounts = action.payload
        }
    }
})


const states = configureStore({
    reducer: {
        toggleStates:toggleFunctionsSlice.reducer,
        accounts:accountsSlice.reducer,
        inputStates:inputToggles.reducer,
        currentAcc:currentAccountSlice.reducer,
        accountsObject:accounts.reducer,
        mailPageState:mailPage.reducer,
        
    }
})

            // SLICE EXPORTS
export const toggleActions = toggleFunctionsSlice.actions
export const inputActions = inputToggles.actions
export const accountActions = accounts.actions
export const setCurrentAcc = currentAccountSlice.actions
export const defineCurrentMail  = mailPage.actions

export default states