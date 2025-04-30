import Header  from "./components/Header"
import Entry from "./components/Entry"

import data from "./data"

export default function App(){
  const dataJournal = data.map(data =>{
    return (
      <Entry 
      img = {data.img}
      title = {data.title}
      country = {data.country}
      googleMapsLink = {data.googleMapsLink}
      dates = {data.dates}
      text = {data.text}
      />
    )
  })
  return(
    <>
      <Header/>
      {dataJournal}
    </>
  )
}


