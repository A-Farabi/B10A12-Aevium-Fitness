import useRole from '../../Hooks/useRole';
import Loader from '../../Components/Loader';
import AdminDashboard from './AdminDashboard';
import TrainerDashboard from './TrainerDashboard';
import UserDashboard from './UserDashboard';

const DashBoard = () => {
  // TODO : on refresh ErrroPage showing up
  const [role, isLoading] = useRole();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="py-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-base-content mb-2">Dashboard</h1>
      <p className="text-base-content/70 mb-8">
        Role: <span className="font-semibold capitalize">{role || 'user'}</span>
      </p>

      {role === 'admin' ? (
        <AdminDashboard />
      ) : role === 'trainer' ? (
        <TrainerDashboard />
      ) : (
        <UserDashboard />
      )}
    </div>
  );
};


export default DashBoard;