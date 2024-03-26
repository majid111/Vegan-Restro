import profileImg from '../../assets/Image/Profile.png'

const Nav = () => {
    return (
        <div className="navbar bg-base-100 my-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Recipe</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <h1 className='text-3xl font-bold text-orange-500'>Vegan-Restro</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Recipe</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex gap-2 items-center">
                    <div className="form-control ">
                        <input type="text" placeholder="Search" className="rounded-full input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="bg-[#0BE58A] rounded-full p-3">
                        <img className='w-full' src={profileImg} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Nav;