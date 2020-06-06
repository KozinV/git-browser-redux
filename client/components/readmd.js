import React, { useEffect } from 'react' // , { useEffect }
import { useDispatch, useSelector } from 'react-redux' // , useDispatch
import { useParams } from 'react-router-dom'
import { getReadme } from '../redux/reducers/repositories'

const Readmd = () => {
  const dispatch = useDispatch()
  const readmd = useSelector((store) => store.repositories.readmd)
  const { repositoryname: reponame } = useParams()
  const { username: usernamerepo } = useParams()

  useEffect(() => {
    dispatch(getReadme(usernamerepo, reponame))
  }, [usernamerepo, reponame])
  return (
    <div>
      {/* {reponame}
      {usernamerepo} */}
      {readmd}
    </div>
  )
}

Readmd.propTypes = {}

export default React.memo(Readmd)
