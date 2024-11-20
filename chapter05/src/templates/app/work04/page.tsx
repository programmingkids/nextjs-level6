'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormType, formSchema } from '@/lib/schemas';
import { showData } from '@/actions/work04';

// ReactHookFormによるフォーム作成
// Zodによるバリデーション実行をサーバー側で実行
// サーバーアクションでサーバー側で処理可能
export default function Page() {
  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);

  // Formの入力パーツの初期化
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, isSubmitting },
    setError,
    clearErrors,
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  // onSubmitイベントのハンドラー
  const onSubmit: SubmitHandler<FormType> = async (data: FormType) => {
    clearErrors();
    setOpen(false);
    // サーバアクションを起動
    const result = await showData(data);
    if (result.success) {
      // サーバー側バリデーション成功なら、データを表示する
      setData(result.data);
      setOpen(true);
    } else {
      // サーバー側バリデーション失敗なら、エラーを表示する
      Object.entries(result.error).map(([key, value]) => {
        setError(`root.${key}`, { message: value[0] });
      });
    }
  };

  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Work04</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 text-start">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4 col-start-1 md:col-start-2 lg:col-start-2 col-span-1 md:col-span-3 lg:col-span-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
                {...register('name')}
              />
              <div className="mt-1 mb-4 text-red-500 font-bold">
                {errors.name?.message}
                {errors.root?.name?.message}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
                {...register('email')}
              />
              <div className="mt-1 mb-4 text-red-500 font-bold">
                {errors.email?.message}
                {errors.root?.email?.message}
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-2" htmlFor="age">
                Age
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline focus:border-blue-500"
                {...register('age', { valueAsNumber: true })}
              />
              <div className="mt-1 mb-4 text-red-500 font-bold">
                {errors.age?.message}
                {errors.root?.age?.message}
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
