// import home from '@/store/home';

export const state = () => ({
  index: {
    indeterminateOfProgressLinear: false,
    snackbarValForZoomApiProgress: false,
    snackbarMsgForZoomApiProgress: '',
    disabledBtnOfCreateNextWeekRoom: false
  },
});

export const mutations = {
  makeTrueIndeterminateOfProgressLinear(state: any) {
    state.index.indeterminateOfProgressLinear = true;
  },
  makeFalseIndeterminateOfProgressLinear(state: any) {
    state.index.indeterminateOfProgressLinear = false;
  },
  makeTrueSnackbarValForZoomApiProgress(state: any) {
    state.index.snackbarValForZoomApiProgress = true;
  },
  makeFalseSnackbarValForZoomApiProgress(state: any) {
    state.index.snackbarValForZoomApiProgress = false;
  },
  changeSnackbarMsgForZoomApiProgress(state: any, newMsg: string) {
    state.index.snackbarMsgForZoomApiProgress = newMsg;
  },
  enableBtnOfCreateNextWeekRoom(state: any) {
    state.index.disabledBtnOfCreateNextWeekRoom = false;
  },
  disableBtnOfCreateNextWeekRoom(state: any) {
    state.index.disabledBtnOfCreateNextWeekRoom = true;
  },
};
