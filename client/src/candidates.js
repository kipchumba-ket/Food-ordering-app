import React, {useEffect, useState} from 'react'

function Candidate() {
  const [candidates, setCandidates] = useState([])

useEffect(() =>{
  fetch(`http://localhost:3000/candidates`)
  .then(response => response.json())
  .then((candidates) => {
    setCandidates(
      JSON.parse(candidates).map((candidate) => (
      <div>
        <h2>{candidate.name}</h2>
      </div>
    )))
  })
}, [])
  return (
    <div>
      {candidates}
    </div>
  )
}

export default Candidate