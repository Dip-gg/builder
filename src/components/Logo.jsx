import { Image } from '@mantine/core';

export default function Logo() {
    return (
        <div style={{ maxWidth: 50 }}>
            <Image
                width={40}
                height="100%"
                fit="cover"
                radius="md"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
                alt="logo"
                withPlaceholder
            />
        </div>
    );
}