'use client';

import { timeout } from '@/lib/functions';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

// フォームの入力パーツの型
type FormInput = {
  name: string;
  email: string;
  age: number;
};

export default function Page() {
  // ReactHookFormとは本質的には関係ない
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);
  // ここまで

  // フォームの初期化
  // register -> 入力要素にハンドラーを登録する関数
  // handleSubmit -> サブミット時に実行するイベントハンドラ関数
  // errors -> 入力要素のエラー
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<FormInput>();

  // サブミット時に実行する関数
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    // 疑似的に2秒間の待機を設定する
    await timeout(2000);
    // ここでは、state変数に代入している
    // 実際にはサーバーに送信などを行う
    setData(data);
    setOpen(true);
  };

  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work08</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 m-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
                {...register('name', {
                  required: {
                    value: true,
                    message: '名前は必須です,',
                  },
                })}
              />
              <div className="mt-1 mb-4 text-red-500 font-bold">
                {errors.name?.message}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'メールは必須です,',
                  },
                })}
              />
              <div className="mt-1 mb-4 text-red-500 font-bold">
                {errors.email?.message}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="age">
                Age
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
                {...register('age', {
                  min: {
                    value: 0,
                    message: '最小値は0です,',
                  },
                  max: {
                    value: 150,
                    message: '最大値は150です,',
                  },
                  validate: {
                    ng: function (value, formValues) {
                      if (value % 2 == 0) {
                        return true;
                      } else {
                        return '年齢は偶数のみです';
                      }
                    },
                  },
                })}
              />
              <div className="mt-1 mb-4 text-red-500 font-bold">
                {errors.age?.message}
              </div>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
                disabled={!isDirty || !isValid || isSubmitting}
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
              <div className="mb-4">Age: {data.age}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
