import Link from "next/link";

export default async function Page() {

    return (
        <main className="pageContainer w-50 pl6">
            <h1 className="homeTitle">about</h1>
            <p>structural + visual compositions of
                drink and food.</p>
                <p>drink-wall is a documentation diary appreciating the unique beauty of deli and grocery displays. drink-wall began with marveling over beverage aisles of NYC.</p>
            <hr />
            <Link href="/">&larr; Return to home</Link>
        </main>
    );
}