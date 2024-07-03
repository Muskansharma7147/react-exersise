import { Navigate } from 'react-router-dom'


const route = (isLogined) => {
    const routes = [
        {
            path: 'auth',
            element: isLogined ? <Navigate to={'/'} /> : <BaseLayout />,
            children: [
                {
                    path: 'login',
                    element: <Login />
                },
                {
                    path: 'signup',
                    element: <Signup />
                },
            ]
        },
        {
            path: '',
            element: isLogined? <NavbarLayout /> : <Navigate to={"/auth/login"}/>,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: 'chat',
                    element: <Chat />
                },
                {
                    path: 'my-network',
                    element: <MyNetwork />
                },
                {
                    path: "notifications",
                    element:<Notification/>
                }, 
                {
                    path: "jobs",
                    element: <div>Jobs in progerss </div>
                },
                {
                    path:"in",
                    children:[
                        {
                            path:'',
                            element:<Profile loginedUser={true}/>
                        },
                        {
                            path:':user_id',
                            element:<Profile loginedUser={false}/>
                        }
                    ]
                }
            ]
        },
        {
            path:"*",
            element:<NotFound/>
        }
    ]
    return routes
}
export default route