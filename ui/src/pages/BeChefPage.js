import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './BeChefPage.css'
import chefImg from '../components/homepageComponents/chef_img.jpeg'
import axios from 'axios'

const BeShefPage = () => {
  const navigate = useNavigate()
  const authCtx = useContext(AuthContext)
  const [aboutNewChef, setAboutNewChef] = useState('')
  const [country, setCountry] = useState('')
  const [streetAddress, setStreetAdress] = useState('')
  const [city, setCity] = useState('')

  const aboutHandler = (event) => {
    setAboutNewChef(event.target.value)
  }

  const streetAdressHandler = (event) => {
    setStreetAdress(event.target.value)
  }

  const cityHandler = (event) => {
    setCity(event.target.value)
  }

  const countryHandler = (event) => {
    console.log(event.target.value)
    setCountry(event.target.value)
  }

  const beChef = async () => {
    event.preventDefault()

    const chefInfos = {
      aboutNewChef: aboutNewChef,
      country: country,
      streetAddress: streetAddress,
      city: city.toLowerCase(),
    }
    const uid = localStorage.getItem('uid')
    const res = await axios.put(
      `http://127.0.0.1:3001/api/v1/users/${uid}/chefapply`,
      chefInfos
    )
    console.log(res)
    if (res.data.status === 'success') navigate('/')
  }

  useEffect(() => {
    if (!localStorage.getItem('uid')) {
      navigate('/')
    }
  }, [authCtx.isLoggedIn])

  return (
    <div className="">
      <form className="flex justify-center bg-teal-600 grid">
        <div className="space-y-12">
          <div className="border-b border-white/10 pb-12 mt-20">
            <img src={chefImg} className="ml-40 mb-12"></img>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-slate-100"
                >
                  About Yourself
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    defaultValue={''}
                    onChange={aboutHandler}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-100">
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>
          </div>

          <div className="border-b border-white/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-slate-100">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-slate-100"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    onChange={countryHandler}
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black"
                  >
                    <option value={'Turkey'}>Turkey</option>
                    <option value={'Canada'}>Canada</option>
                    <option value={'Mexico'}>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-slate-100"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    onChange={streetAdressHandler}
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-slate-100 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    onChange={cityHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6 mb-12">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-slate-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={beChef}
            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-slate-100 shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default BeShefPage
