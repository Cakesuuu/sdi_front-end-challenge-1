import Image from "next/image";
import { promises as fs } from 'fs';

export default async function Pagination() {

    const authorsfile = await fs.readFile(process.cwd() + '/public/authors.json', 'utf8');
    const authors = JSON.parse(authorsfile);

    const newsfile = await fs.readFile(process.cwd() + '/public/news.json', 'utf8');
    const news = JSON.parse(newsfile);

    return (
        <div className="flex flex-col w-full h-full gap-2">

            <div className="flex flex-col w-full h-72">

                <div className="relative h-5/6">

                    <Image
                        className="object-cover"
                        src={news[0].image_url}
                        fill
                        unoptimized
                        alt=""
                    />

                </div>

                <div className="relative flex flex-row h-1/6 bottom-panel items-center justify-end shadow-sm">

                    <div className="absolute flex flex-col w-2/12 md:w-1/12 h-12 left-[20px] top-[-30px] skew-x-[-16deg] bg-[#d8312d]"></div>

                    <div className="absolute flex flex-col w-2/12 md:w-1/12 h-12 left-[20px] top-[-30px] text-white justify-center items-center">

                        <h1 className="text-[18px] font-black">13</h1>

                        <h1 className="text-[10px]">JAN</h1>

                    </div>

                    <a className="flex flex-row w-1/6 h-full float-right items-center justify-center" href="#">

                        <svg className="stroke-[#36404d] h-2/6 w-2/6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>

                        <h1 className="text-[#36404d] font-semibold text-xs">SHARE</h1>

                    </a>

                </div>

            </div>

            <div className="flex flex-col w-full h-fit gap-5">

                <div className="w-full h-fit">

                    <h2 className="text-[#d8312d] text-xs font-semibold">{authors[0].name}</h2>

                    <h1 className="text-[#36404d] text-base font-black">{news[0].title}</h1>
                    
                </div>

                <p className="text-[#36404d] text-xs font-medium">{news[0].body}</p>

                <div className="h-fit w-fit">

                    <a className="text-[#36404d] text-[10px] font-black underline underline-offset-2" href="">READ ARTICLE</a>

                </div>

            </div>

        </div>
    );
}