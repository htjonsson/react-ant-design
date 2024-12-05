import { BrowserRouter, Routes, Route } from "react-router-dom";

import QueryStudioApp from './apps/query-studio/query-studio-app';
import DevelopmentApp from './apps/development/development-app';
import DashboardApp from './apps/dashboard/dashboard-app';
import SgiMotifApp from "./apps/sgi-motif/sgi-motif-app";
import FormBuilderApp from "./apps/form-builder/form-builder-app";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DashboardApp />} />
                <Route path='/dash' element={<DashboardApp />} />
                <Route path='/query' element={<QueryStudioApp />} />
                <Route path='/development' element={<DevelopmentApp />} />
                <Route path='/sgi-motif' element={<SgiMotifApp />} />
                <Route path='/form' element={<FormBuilderApp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
