import { db } from '../firebase'
import {collection, addDoc, serverTimestamp, Timestamp} from 'firebase/firestore'

const saveCartToFirestore = async (cartItems, userId) => {
    try {
        const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)


        await addDoc(collection(db, 'carts'), {
            userId : userId || 'guest',
            items: cartItems,
            total,
            timestamp: serverTimestamp()
        });

        alert('Cart saved to Firebase')
    } catch (err) {
        console.error('Error saving cart: ' , err);
        alert('Failed to save cart')
    }
}