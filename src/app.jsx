const USERNAME = 'kponting82@csu.fullerton.edu'
const PASSWORD = 'Password123'

import PocketBase from "https://cdnjs.cloudflare.com/ajax/libs/pocketbase/0.19.0/pocketbase.es.js"

const pb = new PocketBase('http://127.0.0.1:8090')

const authData = await pb.admins.authWithPassword(USERNAME, PASSWORD)
console.log(authData)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function App () {
  return (
    <div className='App'>
      <h1>Hello, {authData.admin.email}</h1>
    </div>
  )
}