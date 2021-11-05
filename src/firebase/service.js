import React from 'react'
import firebase,{db} from './config'
export default function addDocument(collection,data) {
    const query = db.collection(collection)
    query.add({
        ...data,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
}
