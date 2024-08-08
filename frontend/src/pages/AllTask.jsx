import React from 'react'
import Cards from '../components/Home/Cards'
import InputForm from '../components/Home/InputForm'

export default function AllTask() {
  const [inputDiv, setInputDiv] = useState("hidden");
  return (
    <>
    <div><Cards home={true}/></div>
    <InputForm inputDiv={"hidden"}/>
    </>
  )
}
