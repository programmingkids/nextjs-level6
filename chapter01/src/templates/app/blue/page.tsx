export default function Page() {
  console.log('This is blue page');
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Blue</h1>
      <div className="py-4 px-6">
        <div className="py-4 text-start">{'blue, '.repeat(20)}</div>
      </div>
    </div>
  );
}
