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

const sideBarSlice = createSlice({
    name:'Side',
    initialState:{
        sentPage:false,
        inboxPage:false,
        favoritesPage:false,
        
    },
    reducers: {
        setCurrentPage:(state,action) => {
            if (action.payload == 'sent') {
                state.sentPage = true
                state.favoritesPage = false
                state.inboxPage =false
            }
            else if (action.payload == 'inbox') {
                state.sentPage = false
                state.favoritesPage = false
                state.inboxPage =true
            }
            else if(action.payload == 'favorite') {
                state.favoritesPage = true
                state.sentPage = false
                state.inboxPage =true
            }
        },
        
    }
})

const headerTogglesSlice = createSlice({
    name:'header toggles',
    initialState: {
        showQuestionMarkToggle:false
    },
    reducers: {
        toggleQuestionMark:(state,action) => {
            state.showQuestionMarkToggle = !state.showQuestionMarkToggle
        }
    }
})

const inputFilterSlice = createSlice({
    name:'Input Filter',
    initialState: {
        filterByString:undefined
    },
    reducers: {
        setFilterByString:(state,action) => {
            state.filterByString = action.payload
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
        inputFilterStates:inputFilterSlice.reducer,
        sideBarStates:sideBarSlice.reducer,
        headerStates:headerTogglesSlice.reducer
    }
})

            // SLICE EXPORTS
export const toggleActions = toggleFunctionsSlice.actions
export const inputActions = inputToggles.actions
export const accountActions = accounts.actions
export const setCurrentAcc = currentAccountSlice.actions
export const defineCurrentMail  = mailPage.actions
export const inputFilterActions = inputFilterSlice.actions
export const sideBarToggles = sideBarSlice.actions
export const headerToggles = headerTogglesSlice.actions

export default states