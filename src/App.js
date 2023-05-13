import Navigation from './components/navigation/Navigation';
import PageIntro from './components/introduction/PageIntro';
import HealthPlans from './components/health-plans/HealthPlans';
import Customers from './components/customers/Customers';
import Contact from './components/contact/Contact';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <PageIntro />
      <HealthPlans />
      <div className="w-[100%] bg-orange-400 h-[.5px]"/>
      <Customers />
      <Contact />
      {/* 
      <SignIn />
      <Register /> */}
    </div>
  );
}

export default App;
