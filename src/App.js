import "./App.css"
import UserProfile from './components/UserProfile'
const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rahul',
    role: 'Software Engineer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rahul',
    role: 'Software Engineer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Rahul',
    role: 'Software Engineer',
  },
]

const App = () => (
<div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
        {usersDetailsList.map((eachItem) =><UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>))}
    </ul>
</div>
)
export default App

