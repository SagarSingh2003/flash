import {  UserButton, useUser } from "@clerk/clerk-react";


const Header = () => {

    const {user} = useUser();

    console.log(user);


    return (
        <section className="text-[16px] text-gray-500 absolute top-0 left-0 flex h-[40px] w-[100%] items-center justify-end gap-10 p-[20px] max-[740px]:text-[14px]">
            <a href="/" className="hover:text-black hover:cursor-pointer">Study</a>
            <a href="/createCards" className="hover:text-black hover:cursor-pointer">Create Cards</a>
            <a href="/share" className="hover:text-black hover:cursor-pointer">Share</a>
            <a href="/import" className="hover:text-black hover:cursor-pointer">Import</a>
            {!user ? <a href="/signin">Sign In</a> : <UserButton />}
        </section>
    )
}

export default Header;