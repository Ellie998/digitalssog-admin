import { useRecoilState, useRecoilValue } from 'recoil';
import { elementDataType, elementDatasState, selectedElementState } from './canvas-atom';

export const useElementDataManipulation = () => {
  const [elementDatas, setElementDatas] = useRecoilState(elementDatasState);

  const selectedElement = useRecoilValue(selectedElementState);

  const selectedElementInfo = elementDatas.find((element) => element.id === selectedElement);

  const onAddElementData = (newElement: elementDataType) => {
    setElementDatas((prevElements): elementDataType[] => [...prevElements, newElement]);
  };
  const onEditElementData = (editElement: elementDataType) => {
    setElementDatas((prevElements): elementDataType[] => {
      const tempElements = prevElements.filter((element) => element.id !== editElement.id);

      return [...tempElements, editElement];
    });
  };
  const onDeleteElementData = (deleteElement: { id: string }) => {
    setElementDatas((prevElements): elementDataType[] => {
      const tempElements = prevElements.filter((element) => element.id !== deleteElement.id);
      return [...tempElements];
    });
  };

  return {
    onAddElementData,
    onEditElementData,
    onDeleteElementData,
    selectedElementInfo,
    // Other state manipulation functions
  };
};
