import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';

const GeneralInformation = () => {
  return (
    <ScrollArea className="h-full">
      <div className="flex flex-col p-8 rounded-none bg-[color:var(--card)] max-md:px-5">
        <div className="flex gap-5 justify-between py-0.5 pr-20 w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="text-2xl font-bold leading-9 text-gray-900">
            General Information
          </div>
          <div className="flex gap-1.5 text-sm font-medium leading-6 whitespace-nowrap">
            <div className="justify-center px-3 py-1.5 border border-solid bg-[color:var(--background)] border-zinc-200 rounded-[calc(var(--radius)_-_2px)] text-[color:var(--foreground)]">
              Cancel
            </div>
            <div className="justify-center px-3 py-1.5 bg-[color:var(--primary)] rounded-[calc(var(--radius)_-_2px)] text-[color:var(--primary-foreground)]">
              Save
            </div>
          </div>
        </div>
        <div className="mt-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[68%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-7 pt-9 pb-20 w-full bg-white rounded-md shadow-sm max-md:px-5 max-md:mt-8 max-md:max-w-full">
                <div className="text-base font-bold leading-6 text-gray-900 max-md:max-w-full">
                  Brand Information
                </div>
                <div className="mt-9 text-sm leading-5 text-gray-500 max-md:max-w-full">
                  Company Name
                </div>
                <input type="text" className="justify-center items-start px-4 py-3.5 mt-1.5 text-base leading-6 bg-white rounded border border-solid border-slate-200 text-slate-400 max-md:pr-5 max-md:max-w-full" placeholder='fei qi chu hai' />
                <div className="mt-5 text-sm leading-5 text-gray-500 max-md:max-w-full">
                  Official website
                </div>
                <input type="url" className="justify-center items-start px-4 py-3.5 mt-2.5 text-base leading-6 whitespace-nowrap bg-white rounded border border-solid border-slate-200 text-slate-400 max-md:pr-5 max-md:max-w-full" placeholder='http://' />
                <div className="mt-5 text-sm leading-5 text-gray-500 max-md:max-w-full">
                  Shop website
                </div>
                <input type="url" className="justify-center items-start px-4 py-3.5 mt-1.5 text-base leading-6 whitespace-nowrap bg-white rounded border border-solid border-slate-200 text-slate-400 max-md:pr-5 max-md:max-w-full" placeholder='http://' />
                <div className="self-start mt-5 text-sm leading-5 text-gray-500">
                  Brand name
                </div>
                <input type="text" className="justify-center items-start px-4 py-3.5 mt-2.5 max-w-full text-base leading-6 bg-white rounded border border-solid border-slate-200 text-slate-400 w-[323px] max-md:pr-5" placeholder='Fei' />
                <div className="mt-10 text-sm leading-5 text-gray-500 max-md:max-w-full">
                  Brand Description
                </div>
                <textarea className="items-start px-4 pt-5 pb-16 mt-1.5 text-base leading-6 bg-white rounded border border-solid border-slate-200 text-slate-400 max-md:pr-5 max-md:max-w-full" placeholder='Brand description'>
                </textarea>
                <div className="shrink-0 mt-5 h-px bg-zinc-200 max-md:max-w-full" />
                <div className="mt-6 text-base font-bold leading-6 text-gray-900 max-md:max-w-full">
                  Style
                </div>
                <div className="flex justify-center items-center px-16 py-12 mt-7 bg-white rounded border border-dashed border-slate-400 max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col max-w-full w-[143px]">
                    <div className="justify-center items-start self-center px-5 py-3.5 max-w-full text-base leading-6 text-blue-600 bg-white rounded border border-solid border-zinc-200 w-[102px] max-md:pl-5">
                      Add File
                    </div>
                    <div className="mt-4 text-sm leading-5 text-center text-gray-500">
                      Or drag and drop files
                    </div>
                  </div>
                </div>
                <div className="shrink-0 mt-12 h-px bg-zinc-200 max-md:mt-10 max-md:max-w-full" />
                <div className="mt-7 text-base font-bold leading-6 text-gray-900 max-md:max-w-full">
                  Competitors
                </div>
                <div className="flex gap-5 mt-8 max-md:flex-wrap">
                  <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
                    <div className="text-sm leading-5 text-gray-500">
                      Competitor1
                    </div>
                    <input type="text" className="justify-center items-start px-4 py-3.5 mt-1.5 text-base leading-6 bg-white rounded border border-solid border-slate-200 text-slate-400 max-md:pr-5" placeholder='Fei' />
                  </div>
                  <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit">
                    <div className="text-sm leading-5 text-gray-500">
                      Competitor1 website
                    </div>
                    <input type="url" className="flex gap-5 justify-between py-2 pr-2 pl-4 mt-1.5 text-base leading-6 bg-white rounded border border-solid border-slate-200 text-slate-400" placeholder='http://' />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-7 pt-9 pb-20 mt-2 w-full text-sm leading-5 text-gray-500 bg-white rounded-md shadow-sm max-md:px-5 max-md:mt-10">
                <div className="text-base font-bold leading-6 text-gray-900">
                  Company Information
                </div>
                <div className="mt-8">Title</div>
                <input type="text" className="shrink-0 mt-2.5 h-10 bg-white rounded border border-solid border-slate-200" />
                <div className="mt-7">Email</div>
                <input type="email" className="shrink-0 mt-2.5 bg-white rounded border border-solid border-slate-200 h-[41px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default GeneralInformation;
