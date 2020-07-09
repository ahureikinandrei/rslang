import { createEvent, createStore } from 'effector';
import { preloaderCommand } from './AppStateConst';

export const openAuthPopup = createEvent();
export const closeAuthPopup = createEvent();
export const authPopupState = createStore(false)
  .on(openAuthPopup, () => true)
  .on(closeAuthPopup, () => false);

export const setUserData = createEvent();
export const userDataStore = createStore({}).on(setUserData, (_, userData) => userData);

export const showAuthReport = createEvent();
export const authReportStore = createStore('').on(
  showAuthReport,
  (_, rejectReport) => rejectReport,
);

export const openPreloader = createEvent();
export const closePreloader = createEvent();
export const preloaderState = createStore(preloaderCommand.hide)
  .on(openPreloader, (_, value) => value)
  .on(closePreloader, (_, value) => value);
