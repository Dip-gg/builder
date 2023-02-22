import { AppShell } from '@mantine/core';
import { Sidebar, HeaderSection, FooterSection } from '../components';

const Layout = () => {
    return (
        <AppShell
            layout='alt'
            navbar={<Sidebar/>}
            header={<HeaderSection/>}
            footer={<FooterSection/>}
        >
            App content
        </AppShell>
    )
}

export default Layout