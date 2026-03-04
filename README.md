# 🚀 Redux Toolkit Setup Guide (React + Redux + DevTools)

This guide will help you:

- Install Redux Toolkit & React-Redux
- Enable Redux DevTools
- Create a Redux Store
- Create a Slice
- Export Slice Reducer to Store
- Connect Redux to React App
- Use Redux State in Components

---

# 📦 1️⃣ Install Dependencies

Run the following command in your React project:

```bash
npm install @reduxjs/toolkit react-redux
```

## 🛠 2️ Install Redux DevTools (Browser Extension)

Redux DevTools is a browser extension.

🔹 Install Extension:

Chrome: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

Firefox: https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/

After installing, open your browser DevTools → Click Redux tab

---

## 📁 3️ Create Folder Structure

Inside your src folder:

```
src/
 ├── app/
 │    └── store.js
 ├── features/
 │    └── counter/
 │         └── counterSlice.js
 ├── App.js
 └── main.jsx (or index.js)
 ```

 ---
 🏪 4️ Create Redux Store (DevTools Enabled)

📄 src/app/store.js

```
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: true, // Enables Redux DevTools
});
```

> 👉 Note: Redux Toolkit automatically enables DevTools in development mode.
> You can disable it in production like this:

```
devTools: process.env.NODE_ENV !== "production"
```


## 🧩 5️ Create a Slice

📄 src/features/counter/counterSlice.js
```
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
```

---
## 🔗 6️ Connect Redux to React App

Wrap your app with Provider.

📄 src/main.jsx (Vite) or src/index.js (CRA)

```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```
---
## 🖥 7️ Use Redux in Component

📄 src/App.js

```
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        +5
      </button>
    </div>
  );
}

export default App;
```

---
🔍 8️⃣ How to Use Redux DevTools

Run your app:
```
npm run dev
```
Open browser DevTools → Click Redux tab

You can:

See all dispatched actions

View state changes

Time-travel debug

Inspect payloads

---
## How It Works

- configureStore() → Creates Redux store

- createSlice() → Creates:

  - Actions

   - Reducer

- Provider → Makes store available to React

- useSelector() → Reads state

- useDispatch() → Dispatches actions

- devTools: true → Enables Redux DevTools