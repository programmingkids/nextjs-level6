import * as z from 'zod';

// スキーマ定義
export const formSchema = z.object({
  name: z.string().min(1, { message: '名前は必須です' }),
  email: z.string().email({ message: 'メールは必須です' }),
  age: z
    .number({ message: '年齢は数値です' })
    .min(0, { message: '年齢は0以上です' })
    .max(150, { message: '年齢は150以下です' }),
});

// サーバーバリデーションのためのスキーマ
// 本来はクライアントとサーバーで同じスキーマを利用するべき
// ここでは動作確認のために、サーバー側で異なるスキーマを利用する
export const formSchemaServer = z.object({
  name: z
    .string()
    .min(1, { message: '名前は必須です' })
    .max(5, { message: '名前は5文字以内です' }),
  email: z.string().email({ message: 'メールは必須です' }),
  age: z
    .number({ message: '年齢は数値です' })
    .int({ message: '年齢は整数です' })
    .min(0, { message: '年齢は0以上です' })
    .max(150, { message: '年齢は150以下です' }),
});

// スキーマ定義から型を推論
export type FormType = z.infer<typeof formSchema>;
