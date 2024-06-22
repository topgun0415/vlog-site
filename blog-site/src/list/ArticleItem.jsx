import React from 'react';

const ArticleItem = () => {
  return (
    <section id="skills" className="text-gray-700 border-t border-gray-200">
      <div className="flex items-center justify-center h-screen">
        <div className="container mx-auto flex flex-col items-center justify-between py-8" style={{ minHeight: '60vh', maxHeight: '80vh', height: '60%' }}>
          {Array(4).fill().map((_, index) => (
            <div key={index} className="flex flex-col md:flex-row w-full h-1/4 mb-4">
              {index % 2 === 0 ? ( // 偶数番目の場合
                <>
                  <div className="md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center order-1">
                    <div className="w-full h-full relative group mx-20">
                      <img
                        src="/favicon.jpg"
                        alt=""
                        className="w-full h-full object-cover rounded-3xl rounded-lg transform transition duration-500 group-hover:scale-105"
                        style={{ minHeight: '100%', maxHeight: '100%' }} // 画像をコンテナいっぱいに表示するスタイル
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-500 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="py-6 p-2 md:w-1/2 w-full h-1/2 md:h-full flex items-center order-2">
                    <div className="mx-auto text-center">
                      <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-2">
                        Title Example
                      </h1>
                      <div className="w-full">
                        <h2>texttexttexttexttexttexttexttexttexttexttexttexttexttexttext</h2>
                      </div>
                    </div>
                  </div>
                </>
              ) : ( // 奇数番目の場合
                <>
                  <div className="md:w-1/2 w-full h-1/2 md:h-full flex items-center justify-center order-1 md:order-2 border-r border-b md:border-r-0 md:border-b-0 border-gray-300">
                    <div className="w-full h-full relative group mx-20 ">
                      <img
                        src="https://i.ibb.co/ZHGrn4B/work4.jpg"
                        alt=""
                        className="w-full h-full object-cover rounded-3xl rounded-lg transform transition duration-500 group-hover:scale-105"
                        style={{ minHeight: '100%', maxHeight: '100%' }} // 画像をコンテナいっぱいに表示するスタイル
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition duration-500 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="py-6 p-2 md:w-1/2 w-full h-1/2 md:h-full flex items-center order-2 md:order-1">
                    <div className="mx-auto text-center">
                      <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-2">
                        Title Example
                      </h1>
                      <div className="w-full">
                        <h2>texttexttexttexttexttexttexttexttexttexttexttexttexttexttext</h2>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ArticleItem;
