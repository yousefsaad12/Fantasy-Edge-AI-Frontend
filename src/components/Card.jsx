import React from 'react'

export default function Card({name, comment, from, spanSize}) {
  return (

      <div
        className={`border p-7 rounded-3xl bg-gradient-to-tr from-[#37003c] to-[#da0043] drop-shadow-md border-neutral-800/50 flex flex-col gap-y-10 justify-between ${spanSize} transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group`}  >
        <div className="flex flex-col gap-y-3.5">
          <p className="font-bold text-xl text-white"> {name} </p>
          <p className="font-medium text-white">{comment}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-slate-100/70"> {from}</p>
        </div>

      </div>
  )
}
