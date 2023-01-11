import Header from '@components/Header';
import Nav from '@common/Nav';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { useAuth } from "@hooks/useAuth";


export default function MainLayout({ children }: any) {
  const auth: any = useAuth();
  const router = useRouter();
  const [show, setShow] =  useState(false);


  useEffect(()=>{
    auth.loginValidation().then((res:any)=>{
      if(router.pathname !== '/'){
        res == 'unauthorized'? router.push('/'): setShow(true);
      } 
    });
  },[])

  return (
    <>
    {show &&
      <div className="min-h-full">
        <main>
          <Header />
          <Nav />
          <div className="max-w-7xl mx-auto py-6  px-5 sm:px-10 lg:px-40 ">{children}</div>
        </main>
      </div>
    }
    </>
  );
}
