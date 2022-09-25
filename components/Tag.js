import Link from 'next/link'
import DataLink from '@/data/link'

const Tag = ({ text }) => {
  let url = DataLink[text]
  return (
    <Link href={`${url}`}>
      <a
        target="_blank"
        className="mr-3 text-lg font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
      >
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
