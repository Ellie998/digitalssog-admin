import { atom } from 'recoil';

export const userEmailState = atom({
  key: 'userEmail', //
  default: '', // default value (aka initial value)
});
