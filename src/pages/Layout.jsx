import { AppShell, SimpleGrid } from '@mantine/core';
import { Sidebar, HeaderSection, FooterSection } from '../components';
import useStore from '../hooks/useStore';

const Layout = () => {
    const { divs, setDivs } = useStore();

    const removeDiv = (id) => {
        setDivs(divs.filter(div => div.id !== id));
    };

    return (
        <AppShell
            layout='alt'
            navbar={<Sidebar />}
            header={<HeaderSection />}
            footer={<FooterSection />}
        >
            {/* App content */}
            <div>
                {divs?.map((div) => (
                    <div
                        key={div.id}
                        style={{ backgroundColor: div.backgroundColor }}
                        onClick={() => removeDiv(div.id)}
                    >
                        {div.text}
                    </div>
                ))}
            </div>
            <SimpleGrid cols={4} spacing="md"
                breakpoints={[
                    { maxWidth: 980, cols: 3, spacing: 'md' },
                    { maxWidth: 755, cols: 2, spacing: 'sm' },
                    { maxWidth: 600, cols: 1, spacing: 'sm' },
                ]}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </SimpleGrid>
        </AppShell>
    )
}

export default Layout