import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  userTasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      // adding id
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload.id);
    },
    updateTask: (state, { payload }) => {
      const target = state.tasks.find((item) => payload.id === item.id);

      if (target.status === "pending") {
        target.status = "in-progress";
      } else if (target.status === "in-progress") {
        target.status = "complete";
      } else {
        target.status = "archive";
      }
    },
    directStatusChange: (state, { payload }) => {
      const target = state.tasks.find((item) => payload.id === item.id);

      if (target.status === "pending") {
        target.status = "complete";
      }
    },
    setUserTasks: (state, {payload}) => {
      const userTasks = state.tasks.filter(t => t.assignedTo === payload)
      state.userTasks = userTasks;
    }
  },
});

export const { addTask, removeTask, updateTask, directStatusChange, setUserTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
