import { useEffect, useState } from 'react'

const CustomPopup = () => {
  const [showModal, setShowModal] = useState(true)

  useEffect(() => {
    const auth = localStorage.getItem('auth')

    if (auth === 'arikanami') {
      setShowModal(false)
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      username: event.target.username.value,
    }

    localStorage.setItem('auth', data.username)
    setShowModal(false)
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="relative flex-auto p-6">
                  <form className="bg-white px-8 pt-6 pb-8" onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        className="mb-2 block text-sm font-bold text-gray-700"
                        htmlFor="username"
                      >
                        Name
                      </label>
                      <input
                        className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="flex items-center justify-end">
                      <button
                        className="background-transparent py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                        type="submit"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  )
}

export default CustomPopup
