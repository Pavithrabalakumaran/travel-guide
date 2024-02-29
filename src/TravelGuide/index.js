import './index.css'

const TravelGuide = props => {
  const {travelDetails} = props
  const {name, imageUrl, description} = travelDetails

  return (
    <li className="list-element">
      <img src={imageUrl} alt={name} className="image" />
      <h1 className="heading">{name}</h1>
      <p className="description"> {description}</p>
    </li>
  )
}

export default TravelGuide
