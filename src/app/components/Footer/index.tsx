import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© 2023 To Be Home. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link href="#" className="text-white hover:text-indigo-300">
            Facebook
          </Link>
          <Link href="#" className="text-white hover:text-indigo-300">
            Twitter
          </Link>
          <Link href="#" className="text-white hover:text-indigo-300">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
