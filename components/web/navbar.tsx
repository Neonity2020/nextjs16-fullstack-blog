import Link from "next/link";

export function Navbar() {
    return (
        <nav className="w-full py-5 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link href="/">
                    <h1 className="text-3xl font-bold">
                        Next<span className="text-blue-500">Pro</span>
                    </h1>
                </Link>

            <div className="flex items-center gap-2">
                <Link href="/" className="text-lg hover:text-blue-500 transition">
                    Home
                </Link>
                <Link href="/blog" className="text-lg hover:text-blue-500 transition">
                    Blog
                </Link>
                <Link href="/about" className="text-lg hover:text-blue-500 transition">
                    Create
                </Link>
            </div>
        </div>
        </nav>
    )
}