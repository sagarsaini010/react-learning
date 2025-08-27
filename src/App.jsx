import React from 'react'
import Card from './components/Card'

const App = () => {
const users = [
  {
    "name": "Aarav Mehta",
    "city": "Mumbai",
    "age": 28,
    "profession": "UI/UX Designer",
    "photoUrl": "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    "name": "Isha Verma",
    "city": "Delhi",
    "age": 25,
    "profession": "Data Scientist",
    "photoUrl": "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    "name": "Rohan Kapoor",
    "city": "Bangalore",
    "age": 30,
    "profession": "DevOps Engineer",
    "photoUrl": "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    "name": "Sneha Reddy",
    "city": "Hyderabad",
    "age": 27,
    "profession": "Product Manager",
    "photoUrl": "https://randomuser.me/api/portraits/women/41.jpg"
  },
  {
    "name": "Kabir Singh",
    "city": "Chandigarh",
    "age": 26,
    "profession": "Backend Developer",
    "photoUrl": "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    "name": "Tanya Joshi",
    "city": "Jaipur",
    "age": 24,
    "profession": "Frontend Developer",
    "photoUrl": "https://randomuser.me/api/portraits/women/61.jpg"
  },
  {
    "name": "Aditya Rao",
    "city": "Pune",
    "age": 29,
    "profession": "AI Researcher",
    "photoUrl": "https://randomuser.me/api/portraits/men/71.jpg"
  },
  {
    "name": "Neha Sharma",
    "city": "Lucknow",
    "age": 23,
    "profession": "Content Strategist",
    "photoUrl": "https://randomuser.me/api/portraits/women/81.jpg"
  },
  {
    "name": "Yash Patel",
    "city": "Ahmedabad",
    "age": 31,
    "profession": "Cybersecurity Analyst",
    "photoUrl": "https://randomuser.me/api/portraits/men/91.jpg"
  },
  {
    "name": "Meera Nair",
    "city": "Kochi",
    "age": 27,
    "profession": "Mobile App Developer",
    "photoUrl": "https://randomuser.me/api/portraits/women/99.jpg"
  }
]


  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 py-8">
   {
    users.map((e, idx) =>{
      return <Card key={idx} name={e.name} city={e.city} age={e.age} profession={e.profession} photoUrl={e.photoUrl}/>
    })
   }</div>
    </>
  )
}

export default App