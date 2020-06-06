import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { setRepositories } from '../redux/reducers/repositories' // updateUsername,

// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const username = useSelector((store) => store.repositories.username)
  const repos = useSelector((store) => store.repositories.list)
  const { username: userNameParams } = useParams()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(updateUsername(userNameParams))
  // }, [userNameParams])

  useEffect(() => {
    dispatch(setRepositories(userNameParams))
  }, [userNameParams])

  return (
    <div>
      {repos.map((it) => {
        return (
          <div key={it.id} className="w-1/3 flex">
            <div className="min-w-full inline-block mr-3 mb-2 py-1 bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">
              <Link to={`/${username}/${it.name}`} className="block h-full w-full text-center">
                {it.name}
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Home.propTypes = {}

export default Home
