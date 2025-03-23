import { Head, Link } from "@inertiajs/react";
import { HttpContext } from "@adonisjs/core/http";

export default function Home() {
  const { auth } = HttpContext.getOrFail();
  return (
    <>
      <Head title="Homepage" />
      <Link href="/register">Register</Link>

      <h1 className="text-2xl bg-amber-600">Kook</h1>

      {/* {JSON.stringify(auth.user)} */}
      {auth.isAuthenticated && <div>Bienvenue {auth.user.email}</div>}
    </>
  );
}
