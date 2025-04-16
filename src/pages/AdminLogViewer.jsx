import React, { useEffect, useState } from 'react'; import { Card, CardContent } from '@/components/ui/card'; import { ScrollArea } from '@/components/ui/scroll-area'; import { Textarea } from '@/components/ui/textarea';

const AdminLogViewer = () => { const [logs, setLogs] = useState([]); const [filter, setFilter] = useState('');

useEffect(() => { // Simulate log fetch setLogs([ 'User JohnDoe logged in at 10:15 AM', 'Admin created new share offer at 11:05 AM', 'User JaneDoe started a dispute for Deal #2481', 'System Alert: Wallet balance mismatch detected for user ID 309', ]); }, []);

const filteredLogs = logs.filter((log) => log.toLowerCase().includes(filter.toLowerCase()) );

return ( <div className="p-4"> <h1 className="text-2xl font-semibold mb-4">Admin Log Viewer</h1> <Textarea placeholder="Filter logs..." value={filter} onChange={(e) => setFilter(e.target.value)} className="mb-4" /> <ScrollArea className="h-80 rounded-md border p-2"> <Card> <CardContent> {filteredLogs.length === 0 ? ( <p className="text-muted-foreground">No logs found.</p> ) : ( <ul className="space-y-2 text-sm"> {filteredLogs.map((log, index) => ( <li key={index} className="text-gray-700 dark:text-gray-300"> {log} </li> ))} </ul> )} </CardContent> </Card> </ScrollArea> </div> ); };

export default AdminLogViewer;

