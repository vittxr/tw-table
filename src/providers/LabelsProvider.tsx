import React, { createContext, ReactNode, useContext } from 'react'
import { UITexts, uiTexts } from '../constants/texts'
import { DeepPartial } from '../types/DeepPartial';

type Props = {
    children: ReactNode;
    texts: DeepPartial<UITexts>;
}

const LabelsContext = createContext<{
    texts: UITexts
}>({
    texts: uiTexts
})


export const useLabels = () => {
    return useContext(LabelsContext)
}

const LabelsProvider = ({ children, texts }: Props) => {
  return (
    <LabelsContext.Provider
        value={{
            texts: texts        
        }}
    >
        {children}
    </LabelsContext.Provider>
  )
}

export default LabelsProvider