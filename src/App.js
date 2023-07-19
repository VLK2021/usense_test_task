import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import {Form, NotFound} from "./component";


function App() {

    return (
        <div className="app width">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Form/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
