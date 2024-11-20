import { useFormStatus } from 'react-dom';

export const SubmitButton = () => {
  // フォームの送信状態を保持するフック
  // 送信中はボタンがdisabledになるので、二重送信を防止する
  return (
    <button
      type="submit"
      className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-blue-300 disabled:cursor-not-allowed"
    >
      登録
    </button>
  );
};
