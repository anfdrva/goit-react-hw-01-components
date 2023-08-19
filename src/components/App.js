import { Profile } from "./Profile/Profile";
import userItems from '../user.json';
import statisticsData from '../data.json';
import { GlobalStyle } from "./GlobalStyle";
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <div>
      <Profile item={userItems} />
      <Statistics data={statisticsData} />
      <GlobalStyle />
    </div>
  );
};
