import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TravelGuide from './TravelGuide'

import './App.css'

class App extends Component {
  state = {
    isLoading: true,
    detailsList: [],
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.packages.map(every => ({
        id: every.id,
        name: every.name,
        imageUrl: every.image_url,
        description: every.description,
      }))
      this.setState({isLoading: false, detailsList: formattedData})
      console.log(formattedData)
    }
  }

  isLoadingView = () => (
    <div data-testid="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  successView = () => {
    const {detailsList} = this.state

    return (
      <ul className="list-container">
        {detailsList.map(each => (
          <TravelGuide key={each.id} travelDetails={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="main-container">
        <h1 className="main-heading">Travel Guide</h1>
        <div className="travel-view">
          {isLoading === true ? this.isLoadingView() : this.successView()}
        </div>
      </div>
    )
  }
}

export default App
