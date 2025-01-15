import { getDatabase } from "firebase/database";
import firebaseApp from "./firebaseConfig";

// Inicializa o Realtime Database
const db = getDatabase(firebaseApp);
export default db;