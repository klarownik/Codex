const highlights = [
    {
        title: 'Świerk pospolity',
        text: 'Klasyczny zapach lasu i gęste gałązki idealne na cięższe ozdoby.',
    },
    {
        title: 'Jodła kaukaska',
        text: 'Miękkie igły, świetna trwałość i piękny, symetryczny kształt.',
    },
    {
        title: 'Sosna czarna',
        text: 'Wyrazisty aromat i rustykalny charakter, który podkreśla naturalne dekoracje.',
    },
];

const tips = [
    'Zacznij od lampek – najpierw owiń światełka wokół pnia, potem na końcówkach gałęzi.',
    'Wybierz 2-3 kolory ozdób i trzymaj się jednej palety, by choinka wyglądała spójnie.',
    'Dodaj naturalne akcenty: suszone pomarańcze, laski cynamonu, szyszki i wstążki z lnu.',
    'Najcięższe bombki zawieś bliżej pnia, lżejsze na zewnętrznych gałązkach.',
];

const TreeSellerApp = () => {
    return (
        <div className="page">
            <header className="hero">
                <div className="hero-content">
                    <p className="eyebrow">Sprzedawca choinek z tradycją</p>
                    <h1>Choinkowy Zakątek</h1>
                    <p className="lead">
                        Rodzinna plantacja świątecznych drzewek. Doradzamy, docinamy i
                        przygotowujemy choinki tak, aby były gotowe do wniesienia prosto do salonu.
                    </p>
                    <div className="hero-actions">
                        <a className="primary" href="https://choinkowyzakatek.pl">
                            Zarezerwuj choinkę
                        </a>
                        <a className="ghost" href="https://choinkowyzakatek.pl/oferta">
                            Poznaj ofertę
                        </a>
                    </div>
                </div>
                <div className="hero-card">
                    <h2>Godziny otwarcia</h2>
                    <ul>
                        <li>pon.-pt. 10:00 – 19:00</li>
                        <li>sob. 9:00 – 20:00</li>
                        <li>niedz. 10:00 – 18:00</li>
                    </ul>
                    <p className="note">Dowóz na terenie miasta gratis.</p>
                </div>
            </header>

            <section className="section">
                <h2>Najpopularniejsze gatunki</h2>
                <div className="grid">
                    {highlights.map((item) => (
                        <article className="card" key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="section accent">
                <h2>Jak ubrać choinkę na święta?</h2>
                <ol>
                    {tips.map((tip) => (
                        <li key={tip}>{tip}</li>
                    ))}
                </ol>
                <p className="closing">
                    Jeśli potrzebujesz pomocy w doborze dekoracji, zapytaj na miejscu – pokażemy
                    gotowe zestawy i zaproponujemy układ światełek dopasowany do wysokości drzewka.
                </p>
            </section>

            <footer className="footer">
                <div>
                    <strong>Choinkowy Zakątek</strong>
                    <p>ul. Leśna 12, 00-123 Warszawa</p>
                    <a className="footer-link" href="https://choinkowyzakatek.pl">
                        www.choinkowyzakatek.pl
                    </a>
                </div>
                <div>
                    <p>Tel. +48 600 123 456</p>
                    <p>kontakt@choinkowyzakatek.pl</p>
                </div>
            </footer>
        </div>
    );
};

export default TreeSellerApp;
