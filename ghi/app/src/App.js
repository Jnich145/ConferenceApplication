import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm'
import ConferenceForm from './ConferenceForm'
import AttendConferenceForm from './AttendConferenceForm'
import PresentationForm from './Presentation.Form';
import MainPage from './MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <BrowserRouter>
      <Nav />
        <div className="container">
          <Routes>
          <Route path="attendees" element={<AttendeesList attendees={props.attendees} />} />             
              <Route path="attendees/new" element={<AttendConferenceForm />} />          
          <Route path="conferences">
            <Route path="new" element={<ConferenceForm />} />
          </Route>
          <Route path="locations">
            <Route path="new" element={<LocationForm />} />
          </Route>    
          <Route path="presentations">
            <Route path="new" element={<PresentationForm />} />
          </Route>   
          <Route index element={<MainPage />} />
          
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
