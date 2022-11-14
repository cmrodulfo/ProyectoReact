export const MainLayout = ({children}) => {
    return(
        <div className="container align-items-center justify-contect-center position-center bg-light"
        style={{height:'100vh', zIndex: '-1'}}>
            {children}
        </div>
    )
}