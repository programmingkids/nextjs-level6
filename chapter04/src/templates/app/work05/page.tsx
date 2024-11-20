'use client';

import { useState } from 'react';
import { showData } from '@/actions/work05';

export default function Page() {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);

  // これはイベントハンドラー関数
  const handleSubmit = async (formData: FormData) => {
    // サーバアクションを起動
    const result = await showData(formData);
    // 戻り値をstateに代入
    setData(result);
    setOpen(true);
  };

  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work05</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <form action={handleSubmit}>
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
          <hr className="my-8 border-gray-500" />
          {open && (
            <div className="mt-8">
              <div className="mb-4">Name: {data.name}</div>
              <div className="mb-4">Email: {data.email}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
