import React from 'react';
import { Routes, Route } from 'react-router-dom';
import appRoutes from './routes/app.routes';
import Gameboy from './components/Gameboy';
import '../styles.css';
import Map from './components/Map';

function App() {
    return (
        <div id="App">
            <Gameboy>
                <Routes>
                    {appRoutes.map((el) => (
                        <Route
                            key={el.name}
                            path={el.name}
                            exact
                            element={el.component}
                        />
                    ))}
                </Routes>
            </Gameboy>
            <Map />
        </div>
    );
}

export default App;
