import useFetch from './../../../Hooks/useFetch';

const NewsletterSubscribers = () => {

  // Simulate API fetch
    const { data: newsLSubscribers = [] } = useFetch(
    "newsLetterSubscribers",
    "http://localhost:5000/newsletter"
  );

  return (
    <div>
      <h1 className="text-2xl font-bold text-base-content mb-2">📬 Newsletter Subscribers</h1>
      <p className="text-base-content/70 mb-6">Manage all users who subscribed to Aevium updates.</p>

      
        <div className="bg-base-100 rounded-xl shadow overflow-hidden">
          <table className="table table-zebra">
            <thead style={{ backgroundColor: '#1AB0B0', color: 'white' }}>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {newsLSubscribers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-base-content/60">
                    No subscribers yet.
                  </td>
                </tr>
              ) : (
                newsLSubscribers.map((sub, i) => (
                  <tr key={sub.id} className="hover:bg-base-200 transition-colors">
                    <th>{i + 1}</th>
                    <td className="font-medium">{sub.name}</td>
                    <td>
                      <a
                        href={`mailto:${sub.email}`}
                        className="text-[#1AB0B0] hover:underline"
                      >
                        {sub.email}
                      </a>
                    </td>
                    <td>{new Date(sub.subscribedAt).toLocaleDateString()}</td>
                    <td>
                      <span
                        className={`badge text-xs px-3 py-1 ${
                          sub.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {sub.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      {/* Stats Footer */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="stat">
          <div className="stat-title">Total Subscribers</div>
          <div className="stat-value">{newsLSubscribers.length}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Active</div>
          <div className="stat-value text-[#1AB0B0]">
            {newsLSubscribers.filter(s => s.status === "active").length}
          </div>
        </div>
        <div className="stat">
          <div className="stat-title">Unsubscribed</div>
          <div className="stat-value text-red-500">
            {newsLSubscribers.filter(s => s.status === "Unsubscribed").length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscribers;

// FUTURE OPTIONAL TODO : Implement Real UnSubScribed Tracking