import { Profile } from "./Profile/Profile";
import userItems from '../data/user.json';
import statisticsData from '../data/data.json';
import friendList from '../data/friends.json';
import transactionsList from '../data/transactions.json';
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile item={userItems} />
      <Statistics title="Upload stats" data={statisticsData} />
      <FriendList friend={friendList} />
      <TransactionHistory transaction={transactionsList} />
      <GlobalStyle />
    </div>
  );
};
