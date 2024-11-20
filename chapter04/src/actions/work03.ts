// サーバーアクション関数
export async function showData(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;

  // 実際には登録処理、DB処理などを行う
  // ここでは、表示処理のみを行う
  console.log(name);
  console.log(email);
}
