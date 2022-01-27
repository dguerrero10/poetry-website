import { useRouter } from "next/router";
import React, { useEffect, useState } from 'react';
import { signOut, useSession } from "next-auth/client";

import Link from 'next/link';

import classes from '../../styles/components/Navigation/navbar.module.css';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function Navbar() {
    const [session, loading] = useSession();
    const router = useRouter();

    const [activeLink, setActiveLink] = useState('/');
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const links = [
        { linkPath: '/', linkName: 'Home' },
        { linkPath: '/poems', linkName: 'Poems' },
        { linkPath: '/contact-me', linkName: 'Contact me' },
    ];

    if (session && !loading) links.push({ linkPath: '/post-poem', linkName: 'Post Poem' });
    else if (!session && !loading && links.length > 3) links.pop();

    useEffect(() => {
        let currentLink = links.filter(link => link.linkPath === router.pathname).shift();
        if (!currentLink) return;
        setActiveLink(currentLink.linkPath);

    }, [router.pathname]);

    const logoutHandler = () => {
        setIsLoggingOut(isLoggingOut => !isLoggingOut);
        signOut();
    }

    return (
        <nav className={classes['navbar']}>
            <div className={classes['navbar__list']}>
                {links.map(link =>
                    <Link key={link.linkName}
                        href={link.linkPath}
                        passHref>
                        <a className={activeLink === link.linkPath ?
                            classes['navbar__list--item-active'] :
                            classes['navbar__list--item']}>
                            {link.linkName}
                        </a>
                    </Link>)}
            </div>
            {session &&
             !isLoggingOut && <button
                    onClick={logoutHandler}
                    className={classes['logout__btn']}>
                    Logout
                </button>}
            {session && 
            isLoggingOut && <Box sx={{ display: 'flex', alignSelf: 'center' }}>
                    <CircularProgress />
                </Box>}
        </nav>
    )
}

export default React.memo(Navbar)
