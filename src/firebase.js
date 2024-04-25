import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
    databaseURL: import.meta.env.VITE_REACT_APP_DATABASE_URL
}

const app = initializeApp(appSetting)
const database = getDatabase(app)

export default database;