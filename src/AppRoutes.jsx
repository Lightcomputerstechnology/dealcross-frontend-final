import { Routes, Route } from 'react-router-dom';

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
import AIInsightCenter from './pages/AIInsightCenter';
import InvestorReports from './pages/InvestorReports';
import DealAnalytics from './pages/DealAnalytics';
import SecurityCenter from './pages/SecurityCenter';
import ReferralProgram from './pages/ReferralProgram';
import StartDealPairing from './pages/StartDealPairing';
import DisputeLogViewer from './pages/DisputeLogViewer';
import ChatSupport from './pages/ChatSupport';
import NotFoundPage from './pages/NotFoundPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/wallet" element={<WalletPage />} />
      <Route path="/fund-wallet" element={<FundWalletPage />} />
      <Route path="/start-deal" element={<StartDealPage />} />
      <Route path="/deal-confirmation" element={<DealConfirmation />} />
      <Route path="/deal-tracker" element={<DealTrackerPage />} />
      <Route path="/share-trading" element={<ShareTradingPage />} />
      <Route path="/trading-chart" element={<TradingChartPage />} />
      <Route path="/kyc-upload" element={<KYCUploadPage />} />
      <Route path="/dispute-resolution" element={<DisputeResolutionPage />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/investor" element={<InvestorPanel />} />
      <Route path="/investor-profile" element={<InvestorProfile />} />
      <Route path="/pitch-deck" element={<PitchDeckViewer />} />
      <Route path="/fraud-log" element={<FraudDetectionLog />} />
      <Route path="/escrow-tracker" element={<EscrowTracker />} />
      <Route path="/live-chart" element={<LiveTradingChart />} />
      <Route path="/mobile-app" element={<MobileAppPromo />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/analytics" element={<AnalyticsDashboard />} />
      <Route path="/reports" element={<ReportCenter />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/transactions" element={<TransactionHistory />} />
      <Route path="/escrow-dashboard" element={<EscrowDashboard />} />
      <Route path="/docs" element={<DocsPage />} />
      <Route path="/ai-insights" element={<AIInsightCenter />} />
      <Route path="/investor-reports" element={<InvestorReports />} />
      <Route path="/deal-analytics" element={<DealAnalytics />} />
      <Route path="/security-center" element={<SecurityCenter />} />
      <Route path="/referral" element={<ReferralProgram />} />
      <Route path="/pair-deal" element={<StartDealPairing />} />
      <Route path="/dispute-log" element={<DisputeLogViewer />} />
      <Route path="/chat" element={<ChatSupport />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
