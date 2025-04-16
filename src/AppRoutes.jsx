// src/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import WalletPage from './pages/WalletPage';
import FundWalletPage from './pages/FundWalletPage';
import StartDealPage from './pages/StartDealPage';
import DealConfirmation from './pages/DealConfirmation';
import DealTrackerPage from './pages/DealTrackerPage';
import ShareTradingPage from './pages/ShareTradingPage';
import TradingChartPage from './pages/TradingChartPage';
import KYCUploadPage from './pages/KYCUploadPage';
import DisputeResolutionPage from './pages/DisputeResolutionPage';
import AdminDashboard from './pages/AdminDashboard';
import InvestorPanel from './pages/InvestorPanel';
import InvestorProfile from './pages/InvestorProfile';
import PitchDeckViewer from './pages/PitchDeckViewer';
import FraudDetectionLog from './pages/FraudDetectionLog';
import EscrowTracker from './pages/EscrowTracker';
import LiveTradingChart from './pages/LiveTradingChart';
import MobileAppPromo from './pages/MobileAppPromo';
import UserManagement from './pages/UserManagement';
import AnalyticsDashboard from './pages/AnalyticsDashboard';
import ReportCenter from './pages/ReportCenter';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';
import TransactionHistory from './pages/TransactionHistory';
import EscrowDashboard from './pages/EscrowDashboard';
import DocsPage from './pages/DocsPage';
import NotFoundPage from './pages/404Page';
import AIInsightCenter from './pages/AIInsightCenter';
import InvestorReports from './pages/InvestorReports';
import DealAnalytics from './pages/DealAnalytics';
import SecurityCenter from './pages/SecurityCenter';
import ReferralProgram from './pages/ReferralProgram';
import InvestorMessages from './pages/InvestorMessages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><LandingPage /></MainLayout>} />
      <Route path="/login" element={<MainLayout><LoginPage /></MainLayout>} />
      <Route path="/signup" element={<MainLayout><SignupPage /></MainLayout>} />
      <Route path="/wallet" element={<MainLayout><WalletPage /></MainLayout>} />
      <Route path="/fund-wallet" element={<MainLayout><FundWalletPage /></MainLayout>} />
      <Route path="/start-deal" element={<MainLayout><StartDealPage /></MainLayout>} />
      <Route path="/deal-confirmation" element={<MainLayout><DealConfirmation /></MainLayout>} />
      <Route path="/deal-tracker" element={<MainLayout><DealTrackerPage /></MainLayout>} />
      <Route path="/share-trading" element={<MainLayout><ShareTradingPage /></MainLayout>} />
      <Route path="/trading-chart" element={<MainLayout><TradingChartPage /></MainLayout>} />
      <Route path="/kyc-upload" element={<MainLayout><KYCUploadPage /></MainLayout>} />
      <Route path="/dispute-resolution" element={<MainLayout><DisputeResolutionPage /></MainLayout>} />
      <Route path="/admin" element={<MainLayout><AdminDashboard /></MainLayout>} />
      <Route path="/investor" element={<MainLayout><InvestorPanel /></MainLayout>} />
      <Route path="/investor-profile" element={<MainLayout><InvestorProfile /></MainLayout>} />
      <Route path="/pitch-deck" element={<MainLayout><PitchDeckViewer /></MainLayout>} />
      <Route path="/fraud-log" element={<MainLayout><FraudDetectionLog /></MainLayout>} />
      <Route path="/escrow-tracker" element={<MainLayout><EscrowTracker /></MainLayout>} />
      <Route path="/live-chart" element={<MainLayout><LiveTradingChart /></MainLayout>} />
      <Route path="/mobile-app" element={<MainLayout><MobileAppPromo /></MainLayout>} />
      <Route path="/users" element={<MainLayout><UserManagement /></MainLayout>} />
      <Route path="/analytics" element={<MainLayout><AnalyticsDashboard /></MainLayout>} />
      <Route path="/reports" element={<MainLayout><ReportCenter /></MainLayout>} />
      <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
      <Route path="/profile" element={<MainLayout><UserProfile /></MainLayout>} />
      <Route path="/transactions" element={<MainLayout><TransactionHistory /></MainLayout>} />
      <Route path="/escrow-dashboard" element={<MainLayout><EscrowDashboard /></MainLayout>} />
      <Route path="/docs" element={<MainLayout><DocsPage /></MainLayout>} />
      <Route path="/ai-insights" element={<MainLayout><AIInsightCenter /></MainLayout>} />
      <Route path="/investor-reports" element={<MainLayout><InvestorReports /></MainLayout>} />
      <Route path="/deal-analytics" element={<MainLayout><DealAnalytics /></MainLayout>} />
      <Route path="/security-center" element={<MainLayout><SecurityCenter /></MainLayout>} />
      <Route path="/referrals" element={<MainLayout><ReferralProgram /></MainLayout>} />
      <Route path="/messages" element={<MainLayout><InvestorMessages /></MainLayout>} />

      {/* NotFoundPage is left unwrapped */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
        
