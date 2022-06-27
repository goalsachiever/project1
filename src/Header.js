import RoundedLink from "./RoundedLink";

function Header() {
    return (
        <div className="sticky top-0 flex items-center justify-between px-4 h-14 bg-primary-400">

            <p className="text-sm font-bold text-white" > Starbucks® Rewards</p>
            < RoundedLink  href="https://google.com"  target="black" theme="white"> Join in the app </RoundedLink>
            
        </div>
    );
}

export default Header;  