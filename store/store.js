import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./rootReducer";

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
export const store = configureStore({ reducer: rootReducer });

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
