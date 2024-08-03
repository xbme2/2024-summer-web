import InterestingItem from "./InterestingItem";
import styles from "./InterestingList.module.css";
import Message from "../../ui/Message";
import Spinner from "../../ui/Spinner";
import { useInteresting } from "./useInterestings";
/*
const tempList = [
  {
    id: 245248,
    name: "galgame",
  },
  {
    id: 141151,
    name: "推理小说",
  },
  {
    id: 777644,
    name: "中外电影",
  },
];
*/
function InterestingList() {
  const { isLoading, interestinglists, error } = useInteresting();

  if (error) console.log(error.message);
  if (isLoading) return <Spinner />;

  return (
    <>
      {!interestinglists ? (
        <Message message="现在还没有兴趣，等待你来添加😊" />
      ) : (
        <ul className={styles.list}>
          {interestinglists.map((interesting) => (
            <InterestingItem interesting={interesting} key={interesting.id} />
          ))}
        </ul>
      )}
    </>
  );
}

export default InterestingList;
