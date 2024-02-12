'use client'
import { Flex, Button, Theme, Text, TextArea, TextField, IconButton, Blockquote } from '@radix-ui/themes';
import { MagnifyingGlassIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'

import { ThemeProvider } from 'next-themes';

export default function ChatView() {
    const ChatHistory = [
        { role: 'system', text: 'Hello, how can i help you?' },
        { role: 'user', text: 'How can you help me?' },
        { role: 'system', text: 'Hello, how can i help you?' },
        { role: 'user', text: 'How can you help me?' },
        { role: 'system', text: 'Hello, how can i help you?' },
        { role: 'user', text: 'How can you help me?' },
        { role: 'system', text: 'Hello, how can i help you?' },
        { role: 'user', text: 'How can you help me?' },
    ]
    return (
        <ThemeProvider attribute="class">
            <Theme>
                <Flex direction="column" gap="2" className='h-[100vh] p-6 flex items-center justify-center'>
                    <ul className='flex flex-col overflow-y-auto w-full h-[80%] p-6 rounded-xl border-solid border-2 border-gray-600'>
                        {ChatHistory.map((message, i) => {
                            return (<li key={i}>
                                <Blockquote>
                                    {message.role} : {message.text}
                                </Blockquote>
                            </li>)
                        })}
                    </ul>

                    <TextField.Root className='h-auto w-full'>
                        <TextField.Slot>
                            <MagnifyingGlassIcon height="16" width="16" />
                        </TextField.Slot>
                        <TextField.Input placeholder="Search the docs…" size="3" />
                        <TextField.Slot pr="3">
                            <IconButton size="2" variant="ghost">
                                <DotsHorizontalIcon height="16" width="16" />
                            </IconButton>
                        </TextField.Slot>
                    </TextField.Root>
                </Flex>
            </Theme>
        </ThemeProvider>

    )
}


