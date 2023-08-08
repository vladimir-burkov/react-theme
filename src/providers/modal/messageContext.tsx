import { createContext, ReactNode, useState } from 'react'

export type IType =  'info' | 'warning' | 'error' ;
export type MessageContextType = (info:Info) => void
type Info = { message: string, type: IType }

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


