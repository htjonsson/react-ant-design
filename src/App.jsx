import { BrowserRouter, Routes, Route } from "react-router-dom";

import QueryStudioApp from './apps/query-studio/query-studio-app';
import DevelopmentApp from './apps/development/development-app';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<QueryStudioApp />} />
                <Route path='/query' element={<QueryStudioApp />} />
                <Route path='/devel' element={<DevelopmentApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
