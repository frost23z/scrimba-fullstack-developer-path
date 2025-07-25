import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js"
import {
	getDatabase,
	onValue,
	push,
	ref,
	remove
} from "https://www.gstatic.com/firebasejs/11.9.0/firebase-database.js"

const firebaseConfig = {
	databaseURL: "https://note-chrome-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
	let listItems = ""
	for (let i = 0; i < leads.length; i++) {
		listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
	}
	ulEl.innerHTML = listItems
}

onValue(referenceInDB, snapshot => {
	const snapshotDoesExist = snapshot.exists()
	if (snapshotDoesExist) {
		const snapshotValues = snapshot.val()
		const leads = Object.values(snapshotValues)
		render(leads)
	}
})

deleteBtn.addEventListener("dblclick", () => {
	remove(referenceInDB)
	ulEl.innerHTML = ""
})

inputBtn.addEventListener("click", () => {
	push(referenceInDB, inputEl.value)
	inputEl.value = ""
})
