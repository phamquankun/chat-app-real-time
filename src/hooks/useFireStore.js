import React,{useState} from 'react'
import { db } from '../firebase/config'

export default function useFireStore(collection, condition) {
    const [documents, setdocuments] = useState([])
    React.useEffect(() => {
        let collectionRef = db.collection(collection).orderBy('createdAt');
        if(condition) {
            if(condition.compareValue || !condition.compareValue.length) {
                return;
            }
            collectionRef.where(condition.fieldName, condition.operator, condition.compareValue);
        }
        const unsubcribe = collection.onSnapshot((snapshot) => {
            const documents = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }))

            setdocuments(documents)
        })
        return unsubcribe;
    },[collection, condition])
    return documents
}
