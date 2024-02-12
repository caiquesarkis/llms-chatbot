import { Flex, Button } from '@radix-ui/themes';

export default function ChatView() {
    return (
            <Flex direction="column" gap="2">
                <div>
                    llM: Message
                    human: Message
                </div>
                <textarea/>
                <Button variant='outlined'>Search</Button>
            </Flex>
    )
}