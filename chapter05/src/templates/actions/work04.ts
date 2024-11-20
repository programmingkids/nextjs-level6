'use server';

import { FormType, formSchemaServer } from '@/lib/schemas';
import { timeout } from '@/lib/functions';

// サーバーアクション関数
export async function showData(data: FormType) {
  // 疑似的に2秒間の待機
  await timeout(2000);

  // Zodによるバリデーションを実行する
  const result = formSchemaServer.safeParse(data);

  // バリデーション成功の場合、dataを返す
  // バリデーション失敗の場合、errorを返す
  return {
    success: result.success,
    data: result.success ? result.data : {},
    error: result.success ? {} : result.error.flatten().fieldErrors,
  };
}
