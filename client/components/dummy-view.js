import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateUsername } from '../redux/reducers/repositories'

const Dummy = () => {
  const dispatch = useDispatch()
  const username = useSelector((store) => store.repositories.username)
  return (
    <div className="flex items-center justify-center h-screen max-w-full">
      <div className="mb-3 pt-0 flex flex-no-wrap">
        <input
          id="input-field"
          placeholder="Input Name"
          type="text"
          value={username}
          className="mr-3 px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-blue-100 focus:bg-transparent rounded text-base border-blue-500 border-2"
          onChange={(e) => {
            dispatch(updateUsername(e.target.value))
          }}
        />
      </div>
      <div>
        <Link to={`/${username}`}>
          <button
            id="search-button"
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Go to His Repo!
          </button>
        </Link>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
