import React from 'react'

export default function AnimalsTable({animals}) {
  return (
    <div>
      <h2>Students</h2>
      <table>
          <thead>
              <tr>
                  <th>Animal Name</th>
                  <th>Residence</th>
                  <th>Sanctuary</th>
                </tr>
            </thead>
            <tbody>
                { animals?.map(animal =>
                <tr key={animal.animalId}>
                    <td>{animal.animalName}</td>
                    <td>{animal.residence}</td>
                    <td>{animal.sanctuary}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
