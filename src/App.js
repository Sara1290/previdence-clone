import routes from './routes';
import '../src/CSS/App.css';
import '../src/CSS/index.css';
// import RouteChangeTracker from './RouteChangeTracker';



function App() {

  return (
    <div className="App">
   {/* <RouteChangeTracker /> */}
   {routes}
    </div>
  );
}

export default App;
