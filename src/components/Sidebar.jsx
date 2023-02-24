import { useState } from 'react';
import { Navbar, Tooltip, UnstyledButton, createStyles, Stack } from '@mantine/core';
import { IconArrowUpBar, IconBoxMargin, IconMessageChatbot, IconDownload } from '@tabler/icons-react';
import useStore from '../hooks/useStore';

const useStyles = createStyles((theme) => ({
    section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.white,
        opacity: 0.85,
        '&:hover': {
            opacity: 1,
            backgroundColor: theme.fn.lighten( 
                theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
                0.1
            ),
        },
    },
    // active: {
    //     opacity: 1,
    //     '&, &:hover': {
    //         backgroundColor: theme.fn.lighten(
    //             theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    //             0.15
    //         ),
    //     },
    // },
}));

function NavbarLink({ icon, label, active, onClick }) {
    const { classes, cx } = useStyles();
    return (
        <Tooltip label={label} position="right" transitionDuration={0}>
            <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
                {icon}
            </UnstyledButton>
        </Tooltip>
    );
}


export default function Sidebar() {
    const { classes } = useStyles();
    const [active, setActive] = useState(2);
    const { divs, setDivs } = useStore();

    
    const addDiv = () => {
        const newDiv = {
            id: divs?.length + 1,
            backgroundColor: getRandomColor(),
            text: `Div ${divs.length + 1}`,
        };
        setDivs([...divs, newDiv]);
    };

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const mockdata = [
        { icon: <IconArrowUpBar stroke={1.5}/>, label: 'Navbar' },
        { icon: <IconBoxMargin stroke={1.5}/>, label: 'Div', click:addDiv },
        { icon: <IconMessageChatbot stroke={1.5}/>, label: 'Bot' },
        { icon: <IconDownload stroke={1.5}/>, label: 'Download' },
    ];

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={link?.click}
        />
    ));

    return (
        <Navbar
            // height={750}
            width={{ base: 70 }}
            p="md"
            sx={(theme) => ({
                backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
                    .background,
            })}
        >
                
            <Navbar.Section grow className={classes.section}>
                <Stack justify="center" align="center" spacing={10}>
                    {links}
                </Stack>
                
            </Navbar.Section>
        </Navbar>
    );
}