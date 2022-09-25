import React from 'react'
import { HiArrowCircleDown, HiX } from 'react-icons/hi'

const Accordion = ({ name, metaData, id, index, setIndex }) => {
  const handleSetIndex = (id) => index !== id && setIndex(id)

  return (
    <>
      <div
        onClick={() => handleSetIndex(id)}
        className="group mt-2 flex h-16 w-3/4 cursor-pointer items-center justify-between rounded-md bg-white p-2 hover:bg-primary-500 hover:shadow-lg focus:bg-primary-500 dark:bg-primary-300"
      >
        <div className="group flex cursor-pointer">
          <div className="pl-10 font-semibold text-primary-600 group-hover:text-white dark:text-white dark:group-hover:text-primary-700">
            {name}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
          {index !== id ? (
            <HiArrowCircleDown className="h-6 w-6 text-primary-600 group-hover:text-white dark:text-white dark:group-hover:text-primary-700" />
          ) : (
            <HiX className="h-6 w-6 text-primary-600 group-hover:text-white dark:text-white dark:group-hover:text-primary-700" />
          )}
        </div>
      </div>
      {index === id && (
        <div className="mb-2 h-auto w-3/4 rounded-md border-l-2 border-blue-300 bg-primary-100 p-4 pl-10 text-primary-500 dark:bg-white dark:text-primary-700">
          {metaData.latitude}
        </div>
      )}
    </>
  )
}

export default Accordion
