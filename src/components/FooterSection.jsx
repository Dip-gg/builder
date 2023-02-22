import { createStyles, Anchor, Group, ActionIcon, Footer } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import Logo from './Logo';

const useStyles = createStyles((theme) => ({
    footer: {
        // marginTop: 120,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
            }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `0 ${theme.spacing.md}px`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}));

const links = [
    { link: "#", label: "Contact" },
    { link: "#", label: "Privacy" },
    { link: "#", label: "Blog" },
    { link: "#", label: "Store" },
    { link: "#", label: "Careers" }
]

export default function FooterCentered() {
    const { classes } = useStyles();
    const items = links?.map((link) => (
        <Anchor
            color="dimmed"
            key = { link.label }
            href = { link.link }
            sx = {{ lineHeight: 1 }}
            onClick = {(event) => event.preventDefault()}
            size = "sm"
        >
            { link.label }
        </Anchor >
    ));

return (
    <Footer className={classes.footer} p="xs">
        <div className={classes.inner}>
            <Logo />

            <Group className={classes.links}>{items}</Group>

            <Group spacing="xs" position="right" noWrap>
                <ActionIcon size="lg" variant="default" radius="xl">
                    <IconBrandTwitter size={18} stroke={1.5} />
                </ActionIcon>
                <ActionIcon size="lg" variant="default" radius="xl">
                    <IconBrandYoutube size={18} stroke={1.5} />
                </ActionIcon>
                <ActionIcon size="lg" variant="default" radius="xl">
                    <IconBrandInstagram size={18} stroke={1.5} />
                </ActionIcon>
            </Group>
        </div>
    </Footer>
);
}