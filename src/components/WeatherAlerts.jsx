import React, { useState } from 'react';
import { AlertCircle, Cloud, Droplets, Wind, Eye, Gauge } from 'lucide-react';

const WeatherAlerts = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      city: 'New York',
      type: 'THUNDERSTORM',
      severity: 'HIGH',
      message: 'Severe thunderstorm warning issued',
      timestamp: new Date(),
      details: 'Strong winds and heavy rainfall expected'
    },
    {
      id: 2,
      city: 'London',
      type: 'FOG',
      severity: 'MEDIUM',
      message: 'Dense fog warning',
      timestamp: new Date(),
      details: 'Low visibility expected throughout the day'
    },
    {
      id: 3,
      city: 'Tokyo',
      type: 'HEAT',
      severity: 'HIGH',
      message: 'Heat advisory issued',
      timestamp: new Date(),
      details: 'Dangerously high temperatures expected'
    }
  ]);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'HIGH':
        return 'bg-red-100 border-red-400 text-red-800';
      case 'MEDIUM':
        return 'bg-yellow-100 border-yellow-400 text-yellow-800';
      case 'LOW':
        return 'bg-blue-100 border-blue-400 text-blue-800';
      default:
        return 'bg-gray-100 border-gray-400 text-gray-800';
    }
  };

  const getSeverityBadgeColor = (severity) => {
    switch (severity) {
      case 'HIGH':
        return 'bg-red-500';
      case 'MEDIUM':
        return 'bg-yellow-500';
      case 'LOW':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const dismissAlert = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle size={32} className="text-red-600" />
          <h2 className="text-3xl font-bold text-gray-800">Weather Alerts</h2>
        </div>

        {alerts.length === 0 ? (
          <div className="text-center py-12">
            <Cloud size={64} className="text-green-400 mx-auto mb-4" />
            <p className="text-xl text-gray-600">No active weather alerts</p>
          </div>
        ) : (
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`border-l-4 p-6 rounded-lg ${getSeverityColor(alert.severity)}`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <span className={`${getSeverityBadgeColor(alert.severity)} text-white px-4 py-1 rounded-full font-semibold text-sm`}>
                      {alert.severity}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold">{alert.type}</h3>
                      <p className="text-sm opacity-75">{alert.city}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => dismissAlert(alert.id)}
                    className="text-lg font-bold opacity-50 hover:opacity-100 transition"
                  >
                    ×
                  </button>
                </div>

                <p className="font-semibold mb-2">{alert.message}</p>
                <p className="opacity-75 mb-3">{alert.details}</p>
                <p className="text-xs opacity-50">
                  {alert.timestamp.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherAlerts;
