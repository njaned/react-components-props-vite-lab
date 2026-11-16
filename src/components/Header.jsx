function Header({ name }) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-4xl px-6 py-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-indigo-600">
          {name}
        </h1>
      </div>
    </header>
  );
}

export default Header;
