import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen grid place-items-center">
            <div className="text-center space-y-4">
                <Image src="/404.png" alt="404 - Page Not Found" width={300} height={300} />
                <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
                <Link href="/" className="text-blue-500 underline">
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}
