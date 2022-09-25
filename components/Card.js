const Card = ({ title }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '244px' }}>
    <div className="overflow-hidden rounded-md border-2 border-gray-200 bg-blue-400 dark:border-gray-700 dark:bg-white">
      <div className="pl-6 pr-6 text-justify">
        <p className="prose mb-3 max-w-none text-white dark:text-blue-400">{title}</p>
      </div>
    </div>
  </div>
)

export default Card
