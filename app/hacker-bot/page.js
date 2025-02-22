// app/hacker-bot/page.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const HackerBot = () => {
  const [logs, setLogs] = useState([]);
  const [liveData, setLiveData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        id: logs.length + 1,
        type: Math.random() > 0.5 ? "Hacker" : "Bot",
        ip: `192.168.1.${Math.floor(Math.random() * 255)}`,
        action: ["Brute Force", "SQL Injection", "XSS", "DDoS", "Scanning"][Math.floor(Math.random() * 5)],
        timestamp: new Date().toLocaleTimeString(),
      };
      setLogs((prev) => [newLog, ...prev]);
      setLiveData((prev) => [...prev, { time: newLog.timestamp, count: prev.length + 1 }]);
    }, 3000);
    return () => clearInterval(interval);
  }, [logs]);

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center mb-6 bg-gray-800 p-4 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">Honeypot Monitor</h1>
        <div>
          <Link href="/dashboard">
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md mr-2">Dashboard</button>
          </Link>
          <Link href="/hacker-bot">
            <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md">Hacker Bot Logs</button>
          </Link>
        </div>
      </div>

      {/* Live Attempts Table */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Live Hacking Attempts</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-2 border border-gray-600">ID</th>
                <th className="p-2 border border-gray-600">Type</th>
                <th className="p-2 border border-gray-600">IP</th>
                <th className="p-2 border border-gray-600">Action</th>
                <th className="p-2 border border-gray-600">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {logs.slice(0, 10).map((log) => (
                <tr key={log.id} className="text-center border border-gray-600">
                  <td className="p-2 border border-gray-600">{log.id}</td>
                  <td className="p-2 border border-gray-600 text-red-400 font-bold">{log.type}</td>
                  <td className="p-2 border border-gray-600">{log.ip}</td>
                  <td className="p-2 border border-gray-600 text-yellow-400">{log.action}</td>
                  <td className="p-2 border border-gray-600">{log.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Attack Trends Graph */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-center mb-4">Attack Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={liveData}>
            <XAxis dataKey="time" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#29b6f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Clear Logs Button */}
      <div className="flex justify-center mt-4">
        <button onClick={() => setLogs([])} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Clear Logs</button>
      </div>
    </div>
  );
};

export default HackerBot;
