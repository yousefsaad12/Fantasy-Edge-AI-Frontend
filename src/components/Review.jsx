import React from 'react'
import Card from './Card'
export default function Review() {
  return (
    <div class=" mt-32">
  <section class="max-w-5xl mx-auto w-full px-10 py-10">
    <div class="flex items-center justify-center flex-col gap-y-2 py-5">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">Here's what our
        <span class="text-[#45B3BA]">customers</span> have to say
      </h2>
      <p class="text-lg font-medium text-slate-400/70">Discover how our service can benefit you</p>
      
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
        <Card title="sdad" comment="okoamfs" spanSize={'col-span-2'} />
        <Card title="sdad" comment="okoamfs" spanSize={"col-span-3"}/>
        <Card title="sdad" comment="okoamfs" spanSize={"col-span-3"}/>
        <Card title="sdad" comment="okoamfs" spanSize={"col-span-2"}/>
    </div>
   
    </section>
    </div>
  )
}
