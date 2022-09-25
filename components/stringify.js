const JSONStringify = ({ data, name }) => {
  return (
    <>
      <h5 className="text-3xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
        Response {name}
      </h5>
      <div className="max-h-48 overflow-y-auto bg-primary-600 text-white dark:bg-white dark:text-primary-600">
        <pre className="m-4">
          <code>{JSON.stringify(data, null, 4)}</code>
        </pre>
      </div>
    </>
  )
}

export default JSONStringify
