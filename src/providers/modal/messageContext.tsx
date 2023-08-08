import { createContext, ReactNode, useState } from 'react'

export type IType =  'info' | 'warning' | 'error' ;
type Info = { message: string, type: IType }
export type MessageContextType = (info:Info) => void

const def: MessageContextType = (info) => {}

export const MessageContext = createContext<MessageContextType>(def)

export const MessageProvider = (props: { children: ReactNode }) => {
  const [value, setValue] = useState<Info | undefined>();

  return <MessageContext.Provider value={setValue}>
    <div>
        {value?.type}: {value?.message}
    </div>
    { props.children }
  </MessageContext.Provider>
}


