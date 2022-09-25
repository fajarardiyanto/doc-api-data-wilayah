const Select = ({ datas, name, title, handleChange }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="text-md mb-2 block font-medium text-gray-900 dark:text-white"
      >
        Pilih {title}
      </label>
      <select
        id={name}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        onChange={handleChange}
      >
        <option selected>Pilih {title}</option>
        {datas?.map((data) => {
          const { id, name } = data
          // eslint-disable-next-line react/jsx-key
          return (
            <option key={id} value={id} defaultValue={id}>
              {name}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Select
