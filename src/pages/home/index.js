import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from '../../Components/Layout'

export default function Home() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Welcome to the Jefflix App in Next.js!</title>
                </Head>
            </div>
        </Layout>
    );
}
