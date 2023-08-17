import Navigation from "./components/Navigation";
import Search from "./components/Search";
import SearchResult from "./components/Search_result";
import Premium from "./components/Premium_partner";
import News from "./components/News_section";
import Ourstanding from "./components/Ourstanding";
import Download from "./components/Download";
import Categorys from "./components/Categorys_section";
import Footer from "./components/Footer_section";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Search />
      <SearchResult />
      <Premium />
      <News />
      <Ourstanding />
      <Download />
      <Categorys />
      <Footer />
    </div>
  );
}

export default App;
