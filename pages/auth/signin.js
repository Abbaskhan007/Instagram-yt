import React from "react";
import { getProviders, signIn as signIntoProvider } from "next-auth/react";
import Header from "../../components/Header";
import Image from "next/image";
function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col space-y-4 -mt-40 items-center justify-center min-h-screen">
        <Image
          src="https://links.papareact.com/ocw"
          objectFit="contain"
          height={100}
          width={100}
        />
        <p>This is not the real app. This app is for the education purposes</p>
        {Object?.values(providers).map(provider => (
          <div  key={provider.name}>
            <button
              className="bg-blue-500 rounded-lg text-white p-3 "
              onClick={() => signIntoProvider(provider.id, {callbackUrl: '/'})}
            >
              {`Sign in with ${provider.name}`}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  console.log(getProviders);
  return {
    props: {
      providers,
    },
  };
}

export default signin;
