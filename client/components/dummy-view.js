import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { updateUsername } from '../redux/reducers/repositories'

const Dummy = () => {
  const dispatch = useDispatch()
  const username = useSelector((store) => store.repositories.username)
  return (
    <div>
      <div className="border-2 border-black w-1/3">
        <input
          type="text"
          value={username}
          onChange={(e) => {
            dispatch(updateUsername(e.target.value))
          }}
        />
      </div>
      <div>
        <Link to={`/${username}`}>
          <button type="button">Go to His Repo!</button>
        </Link>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
