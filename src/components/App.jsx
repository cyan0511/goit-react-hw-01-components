import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import user from '../assets/json/user.json';
import stats from '../assets/json/data.json';
import friends from '../assets/json/friends.json';
import transactions from '../assets/json/transactions.json';
import { FriendList } from './friend-list/FriendList';
import { TransactionHistory } from './transaction-history/TransactionHistory';

export const App = () => {
  return (
    <div className="container">
      <div className="info-container">
        <div className="friends-container">
          <Profile user={user} />
          <FriendList friends={friends} />
        </div>
        <Statistics title="User Stats"  stats={stats} />
      </div>
      <TransactionHistory items={transactions} />
    </div>
  );
};
