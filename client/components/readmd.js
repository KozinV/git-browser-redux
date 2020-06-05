import React from 'react' // , { useEffect }
// import { useSelector } from 'react-redux' // , useDispatch
import { useParams } from 'react-router-dom'

const Readmd = () => {
  // const dispatch = useDispatch()
  // const username = useSelector((store) => store.repositories.username)
  const { repositoryname: reponame } = useParams()
  const { username : usernamerepo } = useParams()

  return (
    <div>
      {reponame}
      {usernamerepo}
    </div>
  )
}

Readmd.propTypes = {}

export default React.memo(Readmd)
