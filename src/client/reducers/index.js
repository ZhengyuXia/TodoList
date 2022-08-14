export const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case "INIT":
      return [...payload];
    case "ADD":
      return [...state, { ...payload }];

    case "DEL":
      //   // 1st method, splice
      //   const newStateAfterDEL = [...state];
      //   newStateAfterDEL.splice(payload, 1);
      //   return newStateAfterDEL;

      // 2nd method slice
      return [...state.slice(0, payload), ...state.slice(payload + 1)];

    case "MOD":
      //   // 1st method
      //   const newStateAfterMod = [...state];
      //   newStateAfterMod[payload].isCompleted =
      //     !newStateAfterMod[payload].isCompleted;
      //   return newStateAfterMod;

      // 2nd method
      return state.map((todo, index) => {
        if (index === payload) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
