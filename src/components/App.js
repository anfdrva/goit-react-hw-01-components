import { Profile } from "./Profile/Profile";
import userItems from '../user.json';
import statisticsData from '../data.json';
import friendList from '../friends.json';
import transactionsList from '../transactions.json';
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile item={userItems} />
      <Statistics data={statisticsData} />
      <FriendList friend={friendList} />
      <TransactionHistory transaction={transactionsList} />
      <GlobalStyle />
    </div>
  );
};
