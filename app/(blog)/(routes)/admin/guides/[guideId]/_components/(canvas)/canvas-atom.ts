import { atom } from 'recoil';

export type screenDataType = {
  name: string;
  bgColor: string;
  appName: string;
  version: string;
  elementsId: Array<string>;
};
export type elementDataType = {
  type: string;
  content: string;
  style: elementStyleType;
  id: string;
};

export type elementStyleType = {
  fontSize: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
  opacity: string;
  border: string;
  borderRadius: string;
  shadow: string;
  width: string;
  height: string;
  padding: string;
  margin: string;
  zIndex: string;
  left: string;
  top: string;
};

export type targetDataType = {
  top: string;
  left: string;
  width: string;
  height: string;
  zIndex: string;
};

export const targetDataState = atom<targetDataType>({
  key: 'targetData',
  default: { top: '', left: '', width: '', height: '', zIndex: '' },
});

export const canvasCategoryState = atom({
  key: 'canvasCategory',
  default: '템플릿',
});

export const elementDatasState = atom<Array<elementDataType>>({
  key: 'elementDatas',
  default: [],
});

export const selectedScreenDataState = atom<{ id: string; name: string }>({
  key: 'selectedScreenData',
  default: { id: '', name: '' },
});
export const selectedElementState = atom({
  key: 'selectedElement',
  default: '',
});
export const screenNameState = atom({
  key: 'screenName',
  default: '',
});

//
