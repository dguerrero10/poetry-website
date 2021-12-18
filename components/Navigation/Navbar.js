
import Link from 'next/link';
import classes from '../../styles/components/Navigation/navbar.module.css';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

function Navbar() {
    const router = useRouter();
    
    const [activeLink, setActiveLink] = useState('/');

    const links = [
        { linkPath: '/', linkName: 'Home' },
        { linkPath: '/poems', linkName: 'Poems' },
        { linkPath: '/contact-me', linkName: 'Contact me' },
    ];

    useEffect(() => {
        let currentLink = links.filter(link => link.linkPath === router.pathname).shift();
        if (!currentLink) return;
        setActiveLink(currentLink.linkPath);

    }, [router.pathname]);

    return (
        <nav className={classes['navbar']}>
            <div className={classes['navbar__list']}>
                {links.map(link => 
                    <Link  key={link.linkName} 
                           href={link.linkPath}>
                           <a className={classes['navbar__list--item']}>
                           {link.linkName}</a>
                    </Link>)}
            </div>
        </nav>
    )
}

export default Navbar
