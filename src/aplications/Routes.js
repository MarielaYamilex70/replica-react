import React from "react"
import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom';

const Routes = () => {
    return(
        <Routes>
        <Route path="/discover" element={<Discover/>} />
        <Route path="/join" element={<Join/>} />
      </Routes>
        
    </BrowserRouter>
        
    )

}

export default Routes;