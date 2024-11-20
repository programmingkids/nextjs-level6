'use server';

import { FormType } from '@/app/work01/page';
import { timeout } from '@/lib/functions';

// サーバーアクション関数
export async function showData(data: FormType) {
  // 疑似的に2秒間の待機
  await timeout(2000);

  const name = data.name;
  const email = data.email;

  // 受け取った値をそのまま返すだけ
  return {
    name,
    email,
  };
}
