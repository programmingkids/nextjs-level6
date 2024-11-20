'use server';

// サーバーアクション関数
export async function showData(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  // 受け取った値をそのまま返すだけ
  return {
    name,
    email,
  };
}
