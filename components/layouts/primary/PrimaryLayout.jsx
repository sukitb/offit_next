import Head from 'next/head';

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default PrimaryLayout;