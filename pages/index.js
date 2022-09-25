import axios from 'axios'
import { useState } from 'react'
import Select from '@/components/Select'
import useSWR from 'swr'
import fetcher from '@/lib/utils/fetching'
import JSONStringify from '@/components/stringify'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'

const MAX_DISPLAY = 100

export async function getStaticProps(context) {
  const BASE_URL = process.env.BASE_URL

  const { data } = await axios.get(`${BASE_URL}/provinces`)
  const prov = data.data

  return { props: { prov, BASE_URL } }
}

export default function Home({ prov, BASE_URL }) {
  const [province, setProvince] = useState(null)
  const [regencies, setRegencies] = useState(null)
  const [district, setDistrict] = useState(null)
  const [village, setVillage] = useState(null)

  const changeProvince = (e) => {
    setProvince(e.target.value)
  }

  const changeRegencies = (e) => {
    setRegencies(e.target.value)
  }

  const changeDistrict = (e) => {
    setDistrict(e.target.value)
  }

  const changeVillage = (e) => {
    setVillage(e.target.value)
  }

  const { data: dataRegencies } = useSWR(`${BASE_URL}/regencies?prov_id=${province}`, fetcher)
  const { data: dataDistrict } = useSWR(`${BASE_URL}/districts?regencies_id=${regencies}`, fetcher)
  const { data: dataVillage } = useSWR(`${BASE_URL}/villages?district_id=${district}`, fetcher)
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Data Wilayah Indonesia
          </h1>
          <p className="text-center">
            API Statis Data Wilayah Indonesia{' '}
            <Link href={siteMetadata.siteRepo}>
              <a
                target="_blank"
                className="text-md mr-3 font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Github
              </a>
            </Link>
          </p>
        </div>
        <ul>
          <div className="mt-4 space-y-3 xl:col-span-3">
            <div>
              <Select datas={prov} name="provinsi" title="Provinsi" handleChange={changeProvince} />
              <JSONStringify data={prov} name="Provinsi" />
            </div>
            {province && dataRegencies && (
              <Select
                datas={dataRegencies?.data}
                name="kabupaten"
                title="Kabupaten / Kota"
                handleChange={changeRegencies}
              />
            )}
            {regencies && dataDistrict && (
              <>
                <JSONStringify data={dataRegencies} name="Kabupaten / Kota" />
                <Select
                  datas={dataDistrict?.data}
                  name="kecamatan"
                  title="Kecamatan"
                  handleChange={changeDistrict}
                />
              </>
            )}
            {district && dataVillage && (
              <>
                <JSONStringify data={dataDistrict} name="Kecamatan" />
                <Select
                  datas={dataVillage?.data}
                  name="desa"
                  title="Desa"
                  handleChange={changeVillage}
                />
              </>
            )}
            {village && <JSONStringify data={dataVillage} name="Desa" />}
          </div>
        </ul>
      </div>
    </>
  )
}
