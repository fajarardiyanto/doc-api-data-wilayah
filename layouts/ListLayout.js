import { useState } from 'react'
import Select from '@/components/Select'

export default function ListLayout({ dataProv, title }) {
  const [province, setProvince] = useState(null)

  const changeProvince = (e) => {
    setProvince(e.target.value)
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <ul>
          <div className="mt-4 space-y-3 xl:col-span-3">

          </div>
        </ul>
      </div>
    </>
  )
}
