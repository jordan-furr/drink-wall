import Link from "next/link";

export default async function Page() {

    return (
        <main className="pageContainer w-50 ml5">
            <div>
                <p className="mb3">structural + visual compositions of
                    drink and food.</p>
                <p>drink-wall is a documentation diary appreciating the unique beauty of deli and grocery displays. drink-wall began with marveling over beverage aisles of NYC.</p>
            </div>
            <hr />
            <Link href="/">&larr; Return to home</Link>
        </main>
    );
}