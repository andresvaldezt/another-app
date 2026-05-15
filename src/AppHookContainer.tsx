import App from "./App";
import { AppRouter } from "./AppRouter";
import { GlobalProvider } from './context/global.context.tsx'

function AppHookContainer (){
    return(
        <AppRouter>
            <GlobalProvider>
                <App/>
            </GlobalProvider>
        </AppRouter>
    )
}

export default AppHookContainer;