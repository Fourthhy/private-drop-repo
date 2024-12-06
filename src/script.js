import { db } from './firebase'
import { collection, doc, getDocs, deleteDoc, addDoc, updateDoc, getDoc } from "firebase/firestore";
import studentList from './studentList.json'



function addingToList() {
    studentList.forEach(element => {
    addToList(
        element.name, 
        element.LvID, 
        element.course, 
        element.unclaimed)
    });
}