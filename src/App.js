import Navigation from './components/navigation/Navigation';
import PageIntro from './components/introduction/PageIntro';
import HealthPlans from './components/health-plans/HealthPlans';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <PageIntro />
      <HealthPlans />
      {/* 
      <Customers />
      <Contact />
      <SignIn />
      <Register /> */}
    </div>
  );
}

export default App;
