import React, { useEffect, useState } from 'react'; import axios from 'axios'; import { Badge } from '@/components/ui/badge'; import { Button } from '@/components/ui/button'; import { FiCheckCircle, FiAlertTriangle } from 'react-icons/fi'; import { toast } from 'react-hot-toast'; import SEOHead from '@/components/SEOHead';

export default function FraudAlertsPage() { const [alerts, setAlerts] = useState([]); const [loading, setLoading] = useState(true);

const fetchAlerts = async () => { setLoading(true); try { const token = localStorage.getItem('token'); const response = await axios.get('https://d-final.onrender.com/fraud/alerts', { headers: { Authorization: Bearer ${token} } }); setAlerts(response.data.data); } catch (err) { toast.error(err.response?.data?.detail || 'Failed to load fraud alerts.'); } finally { setLoading(false); } };

const handleResolve = async (alertId) => { try { const token = localStorage.getItem('token'); await axios.post(https://d-final.onrender.com/fraud/resolve/${alertId}, {}, { headers: { Authorization: Bearer ${token} } }); toast.success('Fraud alert resolved successfully'); fetchAlerts(); } catch (err) { toast.error(err.response?.data?.detail || 'Failed to resolve alert.'); } };

useEffect(() => { fetchAlerts(); }, []);

return ( <div className="max-w-6xl mx-auto px-4 py-8"> <SEOHead title="Fraud Alerts - Admin" description="Manage fraud alerts and risks on Dealcross." /> <h1 className="text-2xl font-bold mb-6">Fraud Alerts</h1>

{loading ? (
    <p>Loading alerts...</p>
  ) : alerts.length === 0 ? (
    <p>No fraud alerts found.</p>
  ) : (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div key={alert.alert_id} className="border p-4 rounded-lg bg-white dark:bg-gray-800 shadow flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">{alert.alert_type.replace('_', ' ').toUpperCase()}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{alert.description}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">User ID: {alert.user_id} | {new Date(alert.created_at).toLocaleString()}</p>
          </div>
          <div className="flex items-center space-x-3">
            <Badge variant={alert.status === 'resolved' ? 'success' : 'destructive'}>
              {alert.status === 'resolved' ? <FiCheckCircle className="mr-1" /> : <FiAlertTriangle className="mr-1" />}
              {alert.status}
            </Badge>
            {alert.status !== 'resolved' && (
              <Button size="sm" onClick={() => handleResolve(alert.alert_id)}>
                Resolve
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  )}
</div>

); }

