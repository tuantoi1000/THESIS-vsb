import ListEndow from './ListEndow';

const Endows = [
    {
        id: 1,
        name: 'endow.content1',
        description:  'endow.content4',
        icon: 'ti-package',
    },
    {
        id: 2,
        name: 'endow.content2',
        description: 'endow.content5',
        icon: 'ti-unlock',
    },
    {
        id: 3,
        name: 'endow.content3',
        description: 'endow.content6',
        icon: 'ti-reload',
    },
];

export default function Endow() {

    return (
        <div className="shop-method-area section-padding30">
            <div className="container">
                <div className="row d-flex justify-content-between">
                    {Endows.map((endow) => (
                        <ListEndow
                            key={endow.id}
                            id={endow.id}
                            name={endow.name}
                            description={endow.description}
                            icon={endow.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
