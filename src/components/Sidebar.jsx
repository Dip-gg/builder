import { useState } from 'react';
import { Navbar, Tooltip, UnstyledButton, createStyles, Stack } from '@mantine/core';
import { IconArrowUpBar, IconBoxMargin, IconMessageChatbot, IconDownload } from '@tabler/icons-react';

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

const mockdata = [
    { icon: <IconArrowUpBar stroke={1.5}/>, label: 'Navbar' },
    { icon: <IconBoxMargin stroke={1.5}/>, label: 'Div' },
    { icon: <IconMessageChatbot stroke={1.5}/>, label: 'Bot' },
    { icon: <IconDownload stroke={1.5}/>, label: 'Download' },
];

export default function Sidebar() {
    const { classes } = useStyles();
    const [active, setActive] = useState(2);

    const links = mockdata.map((link, index) => (
        <NavbarLink
            {...link}
            key={link.label}
            active={index === active}
            onClick={() => setActive(index)}
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