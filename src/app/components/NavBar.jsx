import Link from "next/link";

export default function NavBar() {
    return (
        <header className="bg-yellow-400 flex justify-around sticky top-0 p-4 shadow-md">
            <Link href={'/'}>
                Logo
            </Link>
            <Link href={'/productos'}>
                Ir a ver productos
            </Link>
        </header>

    )
}