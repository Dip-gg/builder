import { createStyles, Header } from '@mantine/core';
import Logo from './Logo';

const useStyles = createStyles((theme) => ({
  root: {
    // position: 'relative',
    zIndex: 1,
  },

  header: {
    position: 'relative',
    // overflow: 'hidden',
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center', 
    height: '100%',
    padding: `0 ${theme.spacing.md}px`,
  },
}));

export default function HeaderSection() {
  const { classes } = useStyles();

  return (
    <Header className={classes.root} height={{ base: 50, md: 70 }} p="xs">
      <div className={classes.header}>
        <Logo/>
      </div>
    </Header>
  );
}