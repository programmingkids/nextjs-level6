'use server';

import { timeout } from '@/lib/functions';

// サーバーアクション関数
export async function showData(formData: FormData) {
  // 疑似的に2秒間の待機
  await timeout(2000);

  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  // 受け取った値をそのまま返すだけ
  return {
    name,
    email,
  };
}
