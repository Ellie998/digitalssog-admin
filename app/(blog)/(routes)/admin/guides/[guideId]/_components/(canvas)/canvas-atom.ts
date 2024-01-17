import { atom } from 'recoil';

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
  zIndex: string;
  left: string;
  top: string;
};

export const canvasCategoryState = atom({
  key: 'canvasCategory',
  default: '템플릿',
});

export const elementDatasState = atom<Array<elementDataType>>({
  key: 'elementDatas',
  default: [],
});
export const selectedElementState = atom({
  key: 'selectedElement',
  default: '',
});

//
