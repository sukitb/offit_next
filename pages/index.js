import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Card from '../components/cards/ActivityCard/Card';
import { mockCardProps } from '../components/cards/ActivityCard/Card.mocks';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>Welcome to Offit</h1>
        <Card {...mockCardProps.base} />
        <Card {...mockCardProps.base} />
        <Card {...mockCardProps.base} />
      </section>
    </div>
  );
}

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
