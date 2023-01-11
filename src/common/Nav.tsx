import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();
  let route = router.asPath.substring(1);
  route = route.replace('/', ' > ');

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
        <h3 className="text-gray-400 capitalize">You are on {route}</h3>
      </div>
    </nav>
  );
}
