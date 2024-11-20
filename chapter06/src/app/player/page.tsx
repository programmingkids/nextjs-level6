import { PlayerTable } from '@/components/playerTable';
import { getPlayers } from '@/lib/api';

export default async function Page() {
  // 一覧データを取得
  return (
    <div className="main">
      <h1 className="p-4 bg-blue-200 text-xl">Player List</h1>
      <div className="py-4 px-6"></div>
    </div>
  );
}
