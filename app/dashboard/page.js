'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
    const [logs, setLogs] = useState([
        { id: 1, type: 'SSH', source: '192.168.1.100', details: 'ls -la', timestamp: '2025-02-22 10:00:00' },
        { id: 2, type: 'HTTP', source: '192.168.1.101', details: 'GET /admin', timestamp: '2025-02-22 10:05:00' },
        { id: 3, type: 'Parser', source: '192.168.1.102', details: 'malicious_input', timestamp: '2025-02-22 10:10:00' },
        { id: 4, type: 'SSH', source: '192.168.1.103', details: 'cat /etc/passwd', timestamp: '2025-02-22 10:15:00' },
        { id: 5, type: 'HTTP', source: '192.168.1.104', details: 'POST /login', timestamp: '2025-02-22 10:20:00' },
    ]);

    const chartData = logs.map((log, index) => ({
        time: log.timestamp.split(' ')[1],
        count: index + 1
    }));

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
            <h1 className="text-3xl font-bold flex items-center gap-2">
                <span role="img" aria-label="honeypot">📊</span> Honeypot Logs
            </h1>

            {/* Log Table */}
            <div className="bg-gray-100 text-gray-900 rounded-xl p-6 shadow-lg mt-6 w-11/12 max-w-4xl">
                <table className="w-full border border-gray-400 rounded-lg">
                    <thead>
                        <tr className="bg-blue-600 text-white text-lg">
                            <th className="border border-gray-400 p-3">ID</th>
                            <th className="border border-gray-400 p-3">Type</th>
                            <th className="border border-gray-400 p-3">Source</th>
                            <th className="border border-gray-400 p-3">Details</th>
                            <th className="border border-gray-400 p-3">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log) => (
                            <tr key={log.id} className="hover:bg-gray-200 text-gray-900 text-lg">
                                <td className="border border-gray-400 p-3 font-bold">{log.id}</td>
                                <td className="border border-gray-400 p-3 font-semibold">{log.type}</td>
                                <td className="border border-gray-400 p-3">{log.source}</td>
                                <td className="border border-gray-400 p-3">{log.details}</td>
                                <td className="border border-gray-400 p-3">{log.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Attack Trends Chart */}
            <div className="bg-gray-100 text-gray-900 rounded-xl p-6 shadow-lg mt-6 w-11/12 max-w-4xl">
                <h2 className="text-xl font-bold flex items-center gap-2">
                    <span role="img" aria-label="chart">📉</span> Attack Trends
                </h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" stroke="#333" />
                        <YAxis stroke="#333" />
                        <Tooltip />
                        <Line type="monotone" dataKey="count" stroke="#4A90E2" strokeWidth={3} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Refresh Button */}
            <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 mt-6 rounded-lg text-lg shadow-md">
                🔄 Refresh Logs
            </button>
        </div>
    );
}