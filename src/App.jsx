-import ShareTradingPage  from './pages/ShareTradingPage'
+import ShareTrading      from './pages/ShareTrading'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"              element={<LandingPage/>}   />
-       <Route path="/share-trading" element={<ShareTradingPage/>}/>
+       <Route path="/share-trading" element={<ShareTrading/>}   />
        {/* …other routes… */}
      </Routes>
    </BrowserRouter>
  )
}
