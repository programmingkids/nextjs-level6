export default function Page() {
  // サーバーアクション関数
  async function showData(formData: FormData) {
    'use server';
    const name = formData.get('name');
    const email = formData.get('email');

    // 実際には登録処理、DB処理などを行う
    // ここでは、表示処理のみを行う
    console.log(name);
    console.log(email);
  }

  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work02</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <form>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
                type="text"
                id="name"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
              >
                登録
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
