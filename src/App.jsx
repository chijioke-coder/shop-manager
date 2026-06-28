import { useState } from 'react';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Master password logic - replace with a secure variable later
    if (password === "1234") { 
      setIsAdmin(true);
    } else {
      alert("Invalid Access Code");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">ShopManager</h1>
        <p className="text-sm text-gray-500">Business Control System</p>
      </header>

      {!isAdmin ? (
        // --- APPRENTICE VIEW ---
        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white p-6 rounded-xl font-bold shadow-lg">Record Sale</button>
          <button className="w-full bg-emerald-600 text-white p-6 rounded-xl font-bold shadow-lg">Record Credit</button>
          <button className="w-full bg-amber-600 text-white p-6 rounded-xl font-bold shadow-lg">Log Expense</button>
          
          <div className="mt-10 pt-6 border-t border-gray-200">
            <input 
              type="password" 
              placeholder="Owner Access Key" 
              className="w-full p-3 border rounded-lg mb-2"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="w-full bg-gray-800 text-white p-3 rounded-lg">Login to Dashboard</button>
          </div>
        </div>
      ) : (
        // --- OWNER VIEW (CONTROL DASHBOARD) ---
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-yellow-500">
            <h2 className="text-lg font-bold mb-2">Control Dashboard</h2>
            <p className="text-3xl font-mono text-gray-800">₦ 0.00</p>
            <p className="text-sm text-gray-400">Total Sales Today</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="bg-white p-4 rounded-xl shadow border border-gray-200">Debtors List</button>
            <button className="bg-white p-4 rounded-xl shadow border border-gray-200">Upload Video</button>
            <button className="bg-white p-4 rounded-xl shadow border border-gray-200">Inventory</button>
            <button className="bg-white p-4 rounded-xl shadow border border-gray-200">Settings</button>
          </div>
          
          <button onClick={() => setIsAdmin(false)} className="w-full text-red-500 p-4 font-bold">Logout</button>
        </div>
      )}
    </div>
  );
}

export default App;
