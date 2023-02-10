import { collection, getDocs } from "firebase/firestore";
import { db } from "../context/firebase";

const colRef = collection(db, "questions");

export class QuestionsService {
  private static getAllQuestions = async () => {
    let fetchingAllQuestions: any[] = [];

    getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          fetchingAllQuestions.push({
            id: doc.id,
            title: doc.data().title,
            titleFr: doc.data().titleFr,
            optionsFr: doc.data().optionsFr,
            options: doc.data().options,
            correctOptionIndex: doc.data().correctOptionIndex,
          });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
    return fetchingAllQuestions;
  };

  public static getRandomQuestions = async () => {
    const questions = await QuestionsService.getAllQuestions();
    const randomQuestion = questions.sort((a, b) => 0.5 - Math.random());
    return randomQuestion;
  };
}
