import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense} from 'react'
import QueryProvider from "../helper/utils/reactQuery/QueryProvider"
import StoreProvider from "../redux/provider/StoreProvider"
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner"
import PrivateRoutes from "./PrivateRoutes"
import NotConnectedRoutes from "./NotConnectedRoutes"

const Layout   = lazy(() => import('./Layout'))
const Home     = lazy(() => import('../pages/Home'))
const Landing  = lazy(() => import('../pages/Landing'))
const Profile  = lazy(() => import('../pages/Profile'))
const Register = lazy(() => import('../pages/Register'))
const RecoverPassword = lazy(() => import("../pages/RecoverPassword"))
const ViewMore = lazy(() => import("../pages/ViewMore"))
const Search   = lazy(() => import("../pages/Search"))


const Router = () => { 
    return (
        <QueryProvider>
        <StoreProvider>
            <BrowserRouter>
                <Suspense fallback={<LogoSpinner />}>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<NotConnectedRoutes><Landing /></NotConnectedRoutes>} />
                            <Route path='/register' element={<NotConnectedRoutes><Register /></NotConnectedRoutes>} />
                            <Route path='/recover-password' element={<NotConnectedRoutes><RecoverPassword /></NotConnectedRoutes>} />
                            <Route path='/home' element={<PrivateRoutes><Home /></PrivateRoutes>} />
                            <Route path='/home/:viewMore' element={<PrivateRoutes><ViewMore /></PrivateRoutes>} /> 
                            <Route path='/search' element={<PrivateRoutes><Search /></PrivateRoutes>} />
                            <Route path='/:username' element={<PrivateRoutes><Profile /></PrivateRoutes>}>
                                <Route path='/:username/information' element={<PrivateRoutes ><p>Display user info</p></PrivateRoutes>} />
                                <Route path='/:username/work' element={<PrivateRoutes><p>Display user work</p></PrivateRoutes>} />
                                <Route path='/:username/followers' element={<PrivateRoutes><p>Display user followers</p></PrivateRoutes>} />
                                <Route path='/:username/following' element={<PrivateRoutes><p>Display users followed</p></PrivateRoutes>} />
                            </Route> 
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </StoreProvider>
        </QueryProvider>
    )
}

export default Router
