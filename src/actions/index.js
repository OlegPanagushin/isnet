import * as consts from "../constants";

function makeAction(type, ...argNames) {
  return function(...args) {
    const action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

export const loadApp = makeAction(consts.LOAD_APP);
export const startSimulation = makeAction(consts.START_SIMULATION);
export const pauseSimulation = makeAction(consts.PAUSE_SIMULATION, "pause");
