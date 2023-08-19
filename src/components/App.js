import { Profile } from "./Profile/Profile";
import userItems from '../user.json'
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <div>
      <Profile item={userItems} />
      <GlobalStyle />
    </div>
  );
};
