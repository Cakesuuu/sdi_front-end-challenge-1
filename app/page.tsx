import Pagination from "./components/pagination";
import { promises as fs } from 'fs';

export default async function Home() {

  const file = await fs.readFile(process.cwd() + '/public/news.json', 'utf8');
  const news = JSON.parse(file);

  const entries = news.length;

  return (
    <main className="flex flex-col h-full items-center justify-between bg-zinc-800">

      <div className="flex flex-col w-full min-h-screen items-center justify-center p-5">

        <div className="flex flex-col w-full md:w-5/12 p-3 shadow-xl gap-1 bg-white">

          <Pagination></Pagination>

          <div className="flex flex-row text-black pagination gap-2 mt-5">

            <a href="#">&laquo;</a>

            {Array.from({ length: entries }, (_, index) => (
              <a href="#">{news[index].id}</a>
            ))}

            <a href="#">&raquo;</a>

          </div>

        </div>

      </div>

    </main>
  );
}