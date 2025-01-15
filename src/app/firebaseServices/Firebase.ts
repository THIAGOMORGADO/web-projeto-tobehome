// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCat56-zCYaw3el73BirGhCbtfhN5a3zh8",
  authDomain: "notificaiton-todohome.firebaseapp.com",
  databaseURL: "https://notificaiton-todohome-default-rtdb.firebaseio.com",
  projectId: "notificaiton-todohome",
  storageBucket: "notificaiton-todohome.firebasestorage.app",
  messagingSenderId: "786345858991",
  appId: "1:786345858991:web:bce755f028ede62059815a",
  measurementId: "G-WQWYHMNJH3",
};
// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const analytics = getAnalytics(app);

export { ref, set, onValue };

export const notificationsRef = ref(db, "visitors/");
onValue(notificationsRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data); // Exibindo os dados das notificações
});

export const fetchDataFromFirestore = async () => {
  const db = getFirestore();
  try {
    // Referência à coleção
    const usersCollection = collection(db, "users"); // Substitua "users" pela sua coleção

    // Pega todos os documentos da coleção
    const querySnapshot = await getDocs(usersCollection);

    // Itera sobre cada documento e exibe os dados no console
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data()); // Exibe o id e os dados do documento
    });
  } catch (error) {
    console.error("Erro ao buscar dados do Firestore:", error);
  }
};
