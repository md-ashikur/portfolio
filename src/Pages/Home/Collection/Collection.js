import React from 'react';
import web1 from "../../../image/web1.jpg"
import web2 from "../../../image/web2.png"
import web3 from "../../../image/web3.jpg"
import web4 from "../../../image/web4.png"
import web5 from "../../../image/web5.png"
import web6 from "../../../image/web6.png"
import web7 from "../../../image/web7.PNG"
const Collection = () => {
    return (
        <div>
          
<div class="relative bg-base-300 overflow-hidden">
  <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
      <div class="sm:max-w-lg">
        <h1 class="text-4xl font font-extrabold tracking-tight text-white sm:text-6xl">Summer styles are finally here</h1>
        <p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
      </div>
      <div>
        <div class="mt-10">
         
          <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
            <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div class="flex items-center space-x-6 lg:space-x-8">
                <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                    <img src={web1} alt="" class="w-full h-full object-center object-cover"/>
                  </div>
                  <div class="w-44 h-64 rounded-lg overflow-hidden">
                    <img src={web7} alt="" class="w-full h-full object-center object-cover"/>
                  </div>
                </div>
                <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="w-44 h-64 rounded-lg overflow-hidden">
                    <img src={web5} alt="" class="w-full h-full object-center object-cover"/>
                  </div>
                  <div class="w-44 h-64 rounded-lg overflow-hidden">
                    <img src={web2} alt="" class="w-full h-full object-center object-cover"/>
                  </div>
                  <div class="w-44 h-64 rounded-lg overflow-hidden">
                    <img src={web3} alt="" class="w-full h-full object-center object-cover"/>
                  </div>
                </div>
                <div class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div class="w-44 h-64 rounded-lg overflow-hidden">
                    <img src={web4} alt="" class="w-full h-full object-center object-cover"/>
                  </div>
                  <div class="w-44 h-64 rounded-lg overflow-hidden">
                    <img src={web6} alt="" class="w-full h-full object-center object-cover"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#" class="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Shop Collection</a>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
};

export default Collection;