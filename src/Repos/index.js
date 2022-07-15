import React from 'react'
import Github from '../pages/Github'

const Repos = ({repo}) => {
  return (
    <section className="repos">
    {repo.map((repo)=> (
      <Github key={repo.id} repo={repo} />
    ))}
    </section>
  )
}

export default Repos