import React, {ReactNode} from 'react';
import {AuthWrapper} from "@/page-s/Auth";
interface PageLayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: PageLayoutProps) => {
    return (
        <AuthWrapper>
            {children}
        </AuthWrapper>
    );
};

export default Layout;