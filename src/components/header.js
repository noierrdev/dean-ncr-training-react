import Button from '@mui/material/Button';


function Header() {
    return(
        <div className="fixed flex flex-row items-center px-20 py-2 w-full bg-white z-10" style={{ boxShadow: '0 20px 20px rgba(0, 0, 0, 0.25)' }}>
            <img src="/img/Logo_Big.png" alt="logo"/>
            <div className="flex space-x-6 ml-auto font-normal text-[19px] items-center">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Courses</a>
                <a href="/">Schedule</a>
                <a href="/">Contract</a>
                <Button variant="contained" size="medium">Login</Button>
            </div>
        </div>
    )
}

export default Header;