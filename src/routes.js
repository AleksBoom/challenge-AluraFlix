import Formulario from "pages/Formulario/Formulario";
import Pie from "components/Pie/Pie"

const { default: Inicio } = require("pages/Inicio");
const {BrowserRouter, Routes, Route} = require ("react-router-dom");

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/formulario" element={<Formulario/>}></Route>
        </Routes>
        <Pie/>
        </BrowserRouter>

    )
}

export default AppRoutes