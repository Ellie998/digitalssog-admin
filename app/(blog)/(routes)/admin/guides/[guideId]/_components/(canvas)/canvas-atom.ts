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

export const canvasCategoryState = atom({
  key: 'canvasCategory',
  default: '템플릿',
});

export const elementDatasState = atom<Array<elementDataType>>({
  key: 'elementDatas',
  default: [
    {
      content: 'person-fill',
      id: '2edf24e9-1aad-4b9c-9f54-43c0e1fa124c',
      style: {
        backgroundColor: '#adbbff',
        border: 'none',
        borderRadius: '100px',
        color: '#ffffff',
        fontSize: '20px',
        height: 'fit-content',
        left: '0px',
        margin: '0px',
        opacity: '100%',
        padding: '4px',
        shadow: 'none',
        textAlign: 'inherit',
        top: '0px',
        width: '100%',
        zIndex: '0',
      },
      type: 'icon',
    },
    {
      content: '사람1',
      id: '1235af6e-210c-4f5a-b4b5-c4f9342113c0',
      style: {
        backgroundColor: '#ffffff',
        border: 'none',
        borderRadius: '0px',
        color: '#000000',
        fontSize: '14px',
        height: 'fit-content',
        left: '37px',
        margin: '0px',
        opacity: '100%',
        padding: '4px',
        shadow: 'none',
        textAlign: 'inherit',
        top: '0px',
        width: '80px',
        zIndex: '0',
      },
      type: 'text',
    },
  ],
});

export const screenDatasState = atom<Array<screenDataType>>({
  key: 'screenData',
  default: [
    {
      name: '스크린1',
      appName: '기본',
      bgColor: '#ffffff',
      version: '1.1',
      elementsId: ['2edf24e9-1aad-4b9c-9f54-43c0e1fa124c', '1235af6e-210c-4f5a-b4b5-c4f9342113c0'],
    },
    {
      name: '스크린2',
      appName: '카카오톡',
      bgColor: '#879009',
      version: '1.1.2',
      elementsId: ['2edf24e9-1aad-4b9c-9f54-43c0e1fa124c', '1235af6e-210c-4f5a-b4b5-c4f9342113c0'],
    },
  ],
});
export const selectedElementState = atom({
  key: 'selectedElement',
  default: '',
});
export const bgColorState = atom({
  key: 'bgColor',
  default: '#ffffff',
});
export const screenNameState = atom({
  key: 'screenName',
  default: '',
});

//
