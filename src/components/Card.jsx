import React from 'react'

export default function Card({title, comment, spanSize}) {
  return (

      <div
        className={`border p-7 rounded-xl bg-gradient-to-r from-pink-600 to-pink-100 drop-shadow-md border-neutral-800/50 flex flex-col gap-y-10 justify-between ${spanSize} transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group`}  >
        <div className="flex flex-col gap-y-3.5">
          <p className="font-bold text-xl text-white">Efficient customer support</p>
          <p className="font-medium text-white">The customer support team at our service is incredibly responsive and
            helpful. They went above and beyond to assist me with my issue.</p>
        </div>
        <div className="flex flex-col">
          <p className="pt-2 text-sm font-semibold text-white">Emily Smith {title}</p>
          <p className="text-sm font-medium text-slate-100/70">Marketing Manager at ABC Company {comment}</p>
        </div>

      </div>
  )
}
