'use client';

import { useState } from 'react';
import { useFormState } from 'react-dom';
import { showData } from '@/actions/work07';
import { SubmitButton } from '@/components/button';

// 型定義
type FormType = {
  name: string;
  email: string;
};

// stateの初期値
const defaultValue: FormType = {
  name: 'Bob',
  email: 'bob@example.com',
};

export default function Page() {
  const [open, setOpen] = useState(false);

  // useFormStateにわたすコールバック関数

  // フォームの状態管理用フック呼び出し

  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work07</h1>
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
              <SubmitButton />
            </div>
          </form>
          <hr className="my-8 border-gray-500" />
          {open && <div className="mt-8"></div>}
        </div>
      </div>
    </div>
  );
}
