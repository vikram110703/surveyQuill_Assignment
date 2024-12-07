import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-600 px-8 py-3">
      <Link className="text-white font-bold underline" href={"/"}>
        Home
      </Link>
      <Link className="bg-white p-2 rounded-md" href={"/addTopic"}>
        Add Topic
      </Link>
    </nav>
  );
}
